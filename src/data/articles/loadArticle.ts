import type { ConceptArticle } from './model';

type ChapterArticles = { default: ConceptArticle[] };
const chapters = import.meta.glob<ChapterArticles>('./chapters/*.ts');
const cache = new Map<string, Promise<ConceptArticle[]>>();

export async function loadArticle(chapterId: string, conceptId: string): Promise<ConceptArticle> {
  const load = chapters[`./chapters/${chapterId}.ts`];
  if (!load) throw new Error(`Missing articles for ${chapterId}`);
  let pending = cache.get(chapterId);
  if (!pending) {
    pending = load().then(module => module.default).catch(error => {
      cache.delete(chapterId);
      throw error;
    });
    cache.set(chapterId, pending);
  }
  const result = (await pending).find(item => item.id === conceptId);
  if (!result) throw new Error(`Missing article ${conceptId}`);
  return result;
}
