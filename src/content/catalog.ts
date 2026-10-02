import type { CourseDefinition } from '../types/course';
import { aula01HtmlCss } from './fullstack/aula-01-html-css';

export const catalog: CourseDefinition[] = [
  {
    slug: 'programador-full-stack',
    title: 'Programador Full Stack',
    description: 'Materiais progressivos organizados por unidade curricular, módulo e aula de 4 horas.',
    ucs: [
      {
        slug: 'desenvolvimento-front-end',
        title: 'Desenvolvimento Front-End',
        description: 'Estrutura, apresentação e comportamento no navegador.',
        modules: [
          {
            slug: 'html-css',
            title: 'HTML e CSS',
            description: 'Fundamentos da Web, HTML semântico, CSS, responsividade e acessibilidade.',
            status: 'active',
            lessons: [aula01HtmlCss]
          },
          {
            slug: 'javascript',
            title: 'JavaScript',
            description: 'Lógica, linguagem, DOM, eventos, APIs e modularização.',
            status: 'planned',
            lessons: []
          },
          {
            slug: 'react',
            title: 'React',
            description: 'Componentes, estado, efeitos, roteamento, formulários e consumo de APIs.',
            status: 'planned',
            lessons: []
          }
        ]
      },
      {
        slug: 'desenvolvimento-back-end',
        title: 'Desenvolvimento Back-End',
        description: 'Node.js, APIs, persistência, autenticação e arquitetura.',
        modules: [
          {
            slug: 'node-api',
            title: 'Node.js e APIs',
            description: 'Conteúdo será incorporado após a trilha Front-End.',
            status: 'planned',
            lessons: []
          }
        ]
      },
      {
        slug: 'projeto-integrador',
        title: 'Projeto Integrador em Programador Full Stack',
        description: 'Aplicação integrada das competências construídas ao longo do curso.',
        modules: [
          {
            slug: 'projeto',
            title: 'Projeto',
            description: 'Planejamento, construção, validação, apresentação e retrospectiva.',
            status: 'planned',
            lessons: []
          }
        ]
      }
    ]
  }
];

export function findLesson(courseSlug: string, ucSlug: string, lessonSlug: string) {
  const course = catalog.find((item) => item.slug === courseSlug);
  const uc = course?.ucs.find((item) => item.slug === ucSlug);

  for (const module of uc?.modules ?? []) {
    const lesson = module.lessons.find((item) => item.slug === lessonSlug);
    if (lesson) return { course, uc, module, lesson };
  }

  return null;
}
