import type { CourseDefinition } from '../../types/course';
import { buildJsLesson } from './lesson-builder';
import { group01 } from './group-01';
import { group02 } from './group-02';
import { group03 } from './group-03';
import { group04a } from './group-04a';
import { group04b } from './group-04b';
import { group05 } from './group-05';
import { group06 } from './group-06';

const specs = [...group01, ...group02, ...group03, ...group04a, ...group04b, ...group05, ...group06];
export const javascriptLessons = specs.map(buildJsLesson);

export const javascriptCourse: CourseDefinition = {
  slug: 'curso-javascript',
  title: 'JavaScript',
  description: 'Trilha completa de JavaScript: linguagem moderna, navegador, APIs, Node.js, testes, segurança e projetos.',
  ucs: [{
    slug: 'fundamentos-javascript',
    title: 'JavaScript do primeiro código ao projeto completo',
    description: '30 aulas progressivas de 4 horas, com exercícios e editor JavaScript executável.',
    modules: [
      { slug: 'javascript', title: 'JavaScript completo',
        description: 'Fundamentos, linguagem, DOM, assíncrono, backend, qualidade e projeto.',
        status: 'active', lessons: javascriptLessons }
    ]
  }]
};
