import type { SourceRef } from '../../types';

export type ArticleBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'heading'; text: string }
  | { kind: 'note'; title: string; paragraphs: string[] }
  | { kind: 'image'; variant: string; caption: string };

export interface ConceptArticle {
  id: string;
  title: string;
  lead: string;
  blocks: ArticleBlock[];
  sources: SourceRef[];
  readingMinutes: number;
}

/** Parses individually authored text; never generates editorial prose. */
export function article(id: string, title: string, lead: string, sources: SourceRef[], text: string): ConceptArticle {
  const blocks: ArticleBlock[] = [];
  const parts = text.trim().split(/\n\s*\n/);
  let note: Extract<ArticleBlock, { kind: 'note' }> | undefined;
  for (const part of parts) {
    const value = part.trim();
    if (value.startsWith('::: ')) {
      if (note) throw new Error(`Nested article note: ${id}`);
      note = { kind: 'note', title: value.slice(4), paragraphs: [] };
      blocks.push(note);
    } else if (value === ':::') {
      if (!note) throw new Error(`Unexpected end of note: ${id}`);
      note = undefined;
    } else if (note) {
      note.paragraphs.push(value);
    } else if (value.startsWith('## ')) {
      blocks.push({ kind: 'heading', text: value.slice(3) });
    } else if (value.startsWith('@image ')) {
      const [variant, ...caption] = value.slice(7).split('|');
      blocks.push({ kind: 'image', variant: variant.trim(), caption: caption.join('|').trim() });
    } else {
      blocks.push({ kind: 'paragraph', text: value });
    }
  }
  if (note) throw new Error(`Unclosed article note: ${id}`);
  const mainText = [lead, ...blocks.flatMap(block => block.kind === 'paragraph' || block.kind === 'heading' ? [block.text] : [])].join(' ');
  return { id, title, lead, blocks, sources, readingMinutes: Math.max(1, Math.ceil(mainText.split(/\s+/).length / 200)) };
}
