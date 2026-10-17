import type { CourseDefinition, Slide } from '../types/course';

export type CourseSearchResult = {
  kind: 'course' | 'lesson';
  title: string;
  courseTitle: string;
  detail: string;
  href: string;
  score: number;
};

function normalize(value: string): string {
  return value.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slideText(slide: Slide): string {
  const parts: string[] = [slide.title, slide.eyebrow ?? '', slide.subtitle ?? ''];
  switch (slide.kind) {
    case 'statement':
      parts.push(slide.lead, slide.detail, ...slide.chips);
      break;
    case 'cards':
      parts.push(...slide.items.flatMap(item => [item.title, item.detail, item.kicker ?? '']));
      break;
    case 'challenge':
      parts.push(slide.prompt, slide.explanation, ...slide.options.map(option => option.label));
      break;
    case 'algorithm-visualization':
    case 'algorithm-lab':
    case 'truth-table':
      parts.push(slide.scenario ?? ('operator' in slide ? slide.operator : ''));
      break;
    default:
      break;
  }
  return parts.join(' ');
}

function matching(queryTerms: string[], searchable: string): boolean {
  return queryTerms.every(term => searchable.includes(term));
}

function rank(title: string, body: string, query: string, queryTerms: string[]): number {
  const name = normalize(title);
  const text = normalize(body);
  if (!matching(queryTerms, name + ' ' + text)) return -1;
  if (name === query) return 150;
  if (name.startsWith(query)) return 120;
  if (name.includes(query)) return 100;
  if (queryTerms.every(term => name.includes(term))) return 85;
  return 40;
}

/**
 * Public catalog search: course names and descriptions, published lesson titles,
 * objectives and topics visible in their slides. One result per lesson.
 * No backend or personal data is required.
 */
export function searchCourseCatalog(
  courses: CourseDefinition[],
  query: string,
  limit = 24
): CourseSearchResult[] {
  const normalized = normalize(query);
  if (!normalized || limit <= 0) return [];
  const terms = normalized.split(' ');
  const results: CourseSearchResult[] = [];

  for (const course of courses) {
    const courseUrl = '/curso/' + course.slug;
    const metadata = [
      course.slug, course.description,
      ...course.ucs.flatMap(uc => [uc.title, uc.description,
        ...uc.modules.flatMap(module => [module.title, module.description])])
    ].join(' ');
    const courseScore = rank(course.title, metadata, normalized, terms);
    if (courseScore >= 0) results.push({
      kind: 'course',
      title: course.title,
      courseTitle: course.title,
      detail: course.description,
      href: courseUrl,
      score: courseScore
    });

    for (const uc of course.ucs) {
      for (const module of uc.modules) {
        for (const lesson of module.lessons) {
          if (lesson.status === 'planned' || lesson.slides.length === 0) continue;
          const names = lesson.title + ' ' + lesson.shortTitle;
          const lessonMetadata = [
            lesson.slug,
            ...lesson.objectives,
            ...lesson.slides.map(slideText)
          ].join(' ');
          const lessonScore = rank(names, lessonMetadata, normalized, terms);
          if (lessonScore < 0) continue;

          const matchingSlide = lesson.slides.find(slide =>
            matching(terms, normalize(slideText(slide)))
          );
          const topic = matchingSlide && normalize(names).includes(normalized) === false
            ? matchingSlide.title : '';
          results.push({
            kind: 'lesson',
            title: lesson.shortTitle || lesson.title,
            courseTitle: course.title,
            detail: topic && topic !== lesson.shortTitle ? 'Assunto: ' + topic : 'Aula ' +
              String(lesson.number).padStart(2, '0') + ' · ' + module.title,
            href: courseUrl + '/uc/' + uc.slug + '/aula/' + lesson.slug,
            score: lessonScore + 5
          });
        }
      }
    }
  }

  return results.sort((a, b) =>
    b.score - a.score || a.kind.localeCompare(b.kind) || a.title.localeCompare(b.title, 'pt-BR')
  ).slice(0, limit);
}
