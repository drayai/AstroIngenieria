import { Fragment, useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { loadArticle } from '../../data/articles/loadArticle';
import type { ConceptArticle } from '../../data/articles/model';
import type { AstroConcept } from '../../types';
import { getConceptImageVariants } from './conceptImages';
import { ImageLightbox, type ImageLightboxImage } from './ImageLightbox';
import './articleReader.css';

export function ArticleReader({ concept }: { concept: AstroConcept }) {
  const [content, setContent] = useState<ConceptArticle | null>(null);
  const [error, setError] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<ImageLightboxImage | null>(null);
  useEffect(() => {
    let cancelled = false;
    setContent(null);
    setError(false);
    setLightboxImage(null);
    loadArticle(concept.chapterId, concept.id).then(article => {
      if (!cancelled) setContent(article);
    }).catch(() => {
      if (!cancelled) setError(true);
    });
    return () => { cancelled = true; };
  }, [concept.id, concept.chapterId]);

  if (error) return <div className="ar-status" role="alert"><p>No se pudo cargar la lectura.</p><button type="button" onClick={() => {
    // A rejected module import can stay cached until the document is reloaded.
    window.history.replaceState(window.history.state, '', `#obra-${concept.id}`);
    window.location.reload();
  }}>Recargar lectura</button></div>;
  if (!content || content.id !== concept.id) return <div className="ar-status" role="status" aria-live="polite">Preparando la lectura…</div>;
  const variants = getConceptImageVariants(concept);
  const prefix = `article-${concept.id}`;
  const renderText = (text: string): ReactNode => text.split(/(\[\d+\])/g).map((part, index) => {
    const match = part.match(/^\[(\d+)\]$/);
    if (!match) return <Fragment key={index}>{part}</Fragment>;
    const number = Number(match[1]);
    const source = content.sources[number - 1];
    return source ? <sup key={index}><a className="ar-citation" href={`#${prefix}-source-${number}`} onClick={event => { event.preventDefault(); document.getElementById(`${prefix}-source-${number}`)?.focus(); }} aria-label={`Referencia ${number}: ${source.title}`}>[{number}]</a></sup> : null;
  });
  let paragraphIndex = 0;
  return <>
    <article className="ar-reader" aria-labelledby={`${prefix}-title`}>
      <header className="ar-header">
        <p className="ar-time">{content.readingMinutes} min de lectura{content.blocks.some(block => block.kind === 'note') ? ' · Notas para profundizar' : ''}</p>
        <h3 id={`${prefix}-title`}>{content.title}</h3>
        <p className="ar-lead">{content.lead}</p>
      </header>
      {content.blocks.map((block, index) => {
        if (block.kind === 'heading') return <h4 key={index}>{block.text}</h4>;
        if (block.kind === 'paragraph') return <p className={paragraphIndex++ === 0 ? 'ar-opening' : undefined} key={index}>{renderText(block.text)}</p>;
        if (block.kind === 'note') return <details key={index} className="ar-note"><summary>{block.title}</summary><div>{block.paragraphs.map((paragraph, noteIndex) => <p key={noteIndex}>{renderText(paragraph)}</p>)}</div></details>;
        const variant = variants.find(item => item.id === block.variant);
        return variant ? (
          <figure key={index}>
            <button
              type="button"
              className="ar-image-trigger"
              onClick={() => setLightboxImage({ src: variant.src, alt: block.caption, caption: block.caption })}
              aria-label={`Ampliar imagen: ${block.caption}`}
              data-cursor-label="Ampliar imagen"
            >
              <img src={variant.src} alt={block.caption} loading="lazy" decoding="async" />
            </button>
            <figcaption>{block.caption}</figcaption>
          </figure>
        ) : null;
      })}
      <footer className="ar-sources">
        <h4>Fuentes y caminos para seguir</h4>
        <ol>{content.sources.map((source, index) => <li key={source.url} id={`${prefix}-source-${index + 1}`} tabIndex={-1}><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a><span>{source.publisher}</span></li>)}</ol>
      </footer>
    </article>
    <AnimatePresence>
      {lightboxImage && (
        <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </AnimatePresence>
  </>;
}
