import type { CourseDefinition, LessonDefinition } from '../../types/course';
import { aula01Html } from '../fullstack/aula-01-html';
import { aula02Html } from './aula-02-textos-links-imagens';
import { aula03Html } from './aula-03-html-semantico';
import { aula04Html } from './aula-04-tabelas';
import { aula05Html } from './aula-05-formularios-fundamentos';
import { aula06Html } from './aula-06-formularios-validacao';
import { aula07Html } from './aula-07-audio-video-embeds';
import { aula08Html } from './aula-08-imagens-responsivas';
import { aula09Html } from './aula-09-acessibilidade-html';
import { aula10Html } from './aula-10-seo-metadados';
import { aula11Html } from './aula-11-html-moderno';
import { aula12Html } from './aula-12-projeto-final';

/**
 * All twelve lessons are delivered together in one course-level PR.
 * Do not merge the branch while any course validation is incomplete.
 */
export const htmlLessons: LessonDefinition[] = [
  { ...aula01Html, status: 'published', lab: {
    workspacePath: 'labs/html/aula-01/index.html',
    editorLabel: 'Abrir código da Aula 01 no VS Code Web'
  } },
  aula02Html,
  aula03Html, aula04Html, aula05Html, aula06Html,
  aula07Html, aula08Html, aula09Html, aula10Html,
  aula11Html, aula12Html
];

export const htmlCourse: CourseDefinition = {
  slug: 'curso-html5',
  title: 'HTML5',
  description: 'Curso completo de HTML · Linguagens',
  ucs: [
    {
      slug: 'fundamentos-html5',
      title: 'HTML do zero ao projeto final',
      description:
        'Do nascimento da Web à construção de documentos semânticos, acessíveis e preparados para projetos reais.',
      modules: [
        {
          slug: 'html5',
          title: 'HTML',
          description:
            '12 aulas de 4 horas, com progressão pedagógica, laboratórios e projeto final.',
          status: 'active',
          lessons: htmlLessons
        }
      ]
    }
  ]
};
