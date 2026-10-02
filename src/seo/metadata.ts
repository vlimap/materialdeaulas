import { catalog, technologyCourses } from '../content/catalog';
import type { CourseDefinition, LessonDefinition, UcDefinition } from '../types/course';

export type SeoKind = 'home' | 'roadmap' | 'course' | 'lesson' | 'fallback';

export type SeoPage = {
  kind: SeoKind;
  path: string;
  title: string;
  description: string;
  canonicalPath: string;
  robots: string;
  ogType: 'website' | 'article';
  jsonLd: Record<string, unknown>[];
};

export const seoSite = {
  name: 'Material de Aulas',
  author: 'Val Lima',
  language: 'pt-BR',
  locale: 'pt_BR',
  defaultTitle: 'Material de Aulas | Val Lima',
  defaultDescription:
    'Aulas gratuitas de programação e tecnologia organizadas por linguagem, frontend, backend, banco de dados, DevOps e testes.',
  fallbackUrl: 'https://materialdeaulas.vercel.app',
  githubUrl: 'https://github.com/vlimap/materialdeaulas',
  ogImageUrl: 'https://avatars.githubusercontent.com/u/117370378?v=4'
} as const;

const publicCourses = technologyCourses;

function normalizeDescription(value: string, max = 158) {
  const compact = value.replace(/\s+/g, ' ').trim();
  if (compact.length <= max) return compact;
  return compact.slice(0, max - 1).trimEnd() + '…';
}

function durationToIso(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  return 'PT' + (hours ? hours + 'H' : '') + (remaining ? remaining + 'M' : '');
}

function provider() {
  return {
    '@type': 'Person',
    name: seoSite.author,
    url: seoSite.githubUrl
  };
}

function coursePath(course: CourseDefinition) {
  return '/curso/' + course.slug;
}

function lessonPath(course: CourseDefinition, uc: UcDefinition, lesson: LessonDefinition) {
  return (
    coursePath(course) +
    '/uc/' +
    uc.slug +
    '/aula/' +
    lesson.slug
  );
}

function courseLessons(course: CourseDefinition) {
  return course.ucs.flatMap((uc) =>
    uc.modules.flatMap((module) =>
      module.lessons
        .filter((lesson) => lesson.status !== 'planned' && lesson.slides.length > 0)
        .map((lesson) => ({ uc, module, lesson }))
    )
  );
}

function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path
    }))
  };
}

function homeJsonLd() {
  const realCourses = publicCourses.filter((course) => courseLessons(course).length > 0);

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoSite.name,
    description: seoSite.defaultDescription,
    inLanguage: seoSite.language,
    author: provider()
  };

  const collection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: seoSite.name,
    description: seoSite.defaultDescription,
    inLanguage: seoSite.language,
    hasPart: publicCourses.map((course) => ({
      '@type': 'CreativeWork',
      name: course.title,
      description: normalizeDescription(course.description, 180),
      url: coursePath(course)
    }))
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Trilhas de tecnologia',
    itemListElement: publicCourses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: coursePath(course),
      name: course.title
    }))
  };

  const schemas: Record<string, unknown>[] = [website, collection, itemList];

  // Google requires at least three real courses for Course list eligibility.
  // Only emit a Course-focused list when the catalog actually reaches that threshold.
  if (realCourses.length >= 3) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Cursos disponíveis',
      itemListElement: realCourses.map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: coursePath(course),
        item: {
          '@type': 'Course',
          name: course.title,
          description: normalizeDescription(course.description, 60),
          provider: provider()
        }
      }))
    });
  }

  return schemas;
}

function courseSeo(course: CourseDefinition): SeoPage {
  const lessons = courseLessons(course);
  const description = normalizeDescription(
    lessons.length
      ? course.description + ' ' + lessons.length + (lessons.length === 1 ? ' aula disponível.' : ' aulas disponíveis.')
      : course.description + ' Conteúdo em preparação.'
  );

  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': lessons.length ? 'Course' : 'CollectionPage',
      name: course.title,
      description,
      inLanguage: seoSite.language,
      url: coursePath(course),
      provider: provider(),
      hasPart: lessons.map(({ uc, lesson }) => ({
        '@type': 'LearningResource',
        name: lesson.title,
        learningResourceType: 'Lesson',
        timeRequired: durationToIso(lesson.durationMinutes),
        url: lessonPath(course, uc, lesson)
      }))
    },
    breadcrumb([
      { name: seoSite.name, path: '/' },
      { name: course.title, path: coursePath(course) }
    ])
  ];

  return {
    kind: 'course',
    path: coursePath(course),
    title: course.title + ' | ' + seoSite.name,
    description,
    canonicalPath: coursePath(course),
    robots: lessons.length ? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' : 'noindex,follow',
    ogType: 'website',
    jsonLd: schemas
  };
}

function lessonSeo(course: CourseDefinition, uc: UcDefinition, lesson: LessonDefinition): SeoPage {
  const path = lessonPath(course, uc, lesson);
  const objectiveSummary = lesson.objectives.slice(0, 3).join(' ');
  const description = normalizeDescription(
    lesson.title + '. ' + objectiveSummary
  );

  return {
    kind: 'lesson',
    path,
    title: lesson.title + ' | ' + seoSite.name,
    description,
    canonicalPath: path,
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    ogType: 'article',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        name: lesson.title,
        headline: lesson.title,
        description,
        inLanguage: seoSite.language,
        learningResourceType: 'Lesson',
        educationalLevel: 'Beginner',
        timeRequired: durationToIso(lesson.durationMinutes),
        teaches: lesson.objectives,
        author: provider(),
        isPartOf: {
          '@type': 'Course',
          name: course.title,
          url: coursePath(course)
        },
        url: path
      },
      breadcrumb([
        { name: seoSite.name, path: '/' },
        { name: course.title, path: coursePath(course) },
        { name: lesson.title, path }
      ])
    ]
  };
}

export function getPublicSeoPages(): SeoPage[] {
  const pages: SeoPage[] = [
    {
      kind: 'home',
      path: '/',
      title: seoSite.defaultTitle,
      description: seoSite.defaultDescription,
      canonicalPath: '/',
      robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
      ogType: 'website',
      jsonLd: homeJsonLd()
    },
    {
      kind: 'roadmap',
      path: '/roadmap',
      title: 'Roadmap de Programação | ' + seoSite.name,
      description:
        'Roadmap interativo de programação com trilhas de Frontend, Backend, Full Stack, Banco de Dados e DevOps ligadas aos cursos da plataforma.',
      canonicalPath: '/roadmap',
      robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
      ogType: 'website',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: 'Roadmap de Programação',
          description:
            'Trilhas interativas de Frontend, Backend, Full Stack, Banco de Dados e DevOps.',
          inLanguage: seoSite.language,
          learningResourceType: 'Learning path',
          author: provider(),
          hasPart: publicCourses.map((course) => ({
            '@type': 'CreativeWork',
            name: course.title,
            url: coursePath(course)
          }))
        },
        breadcrumb([
          { name: seoSite.name, path: '/' },
          { name: 'Roadmap', path: '/roadmap' }
        ])
      ]
    }
  ];

  for (const course of publicCourses) {
    pages.push(courseSeo(course));

    for (const { uc, lesson } of courseLessons(course)) {
      pages.push(lessonSeo(course, uc, lesson));
    }
  }

  return pages;
}

export function resolveSeoPage(pathname: string): SeoPage {
  const normalized =
    pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  const exact = getPublicSeoPages().find((page) => page.path === normalized);
  if (exact) return exact;

  const legacyLesson = catalog
    .flatMap((course) =>
      course.ucs.flatMap((uc) =>
        uc.modules.flatMap((module) =>
          module.lessons
            .filter((lesson) => lesson.status !== 'planned' && lesson.slides.length > 0)
            .map((lesson) => ({
              course,
              uc,
              lesson,
              path: lessonPath(course, uc, lesson)
            }))
        )
      )
    )
    .find((entry) => entry.path === normalized);

  if (legacyLesson) {
    const canonical = getPublicSeoPages().find(
      (page) =>
        page.kind === 'lesson' &&
        page.title.startsWith(legacyLesson.lesson.title + ' |')
    );

    return {
      ...lessonSeo(
        legacyLesson.course,
        legacyLesson.uc,
        legacyLesson.lesson
      ),
      path: normalized,
      canonicalPath: canonical?.canonicalPath ?? normalized,
      robots: canonical ? 'noindex,follow' : 'index,follow'
    };
  }

  return {
    kind: 'fallback',
    path: normalized,
    title: 'Página não encontrada | ' + seoSite.name,
    description: seoSite.defaultDescription,
    canonicalPath: '/',
    robots: 'noindex,follow',
    ogType: 'website',
    jsonLd: []
  };
}
