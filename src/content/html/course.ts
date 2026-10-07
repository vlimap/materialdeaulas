import type { CourseDefinition, LessonDefinition } from '../../types/course';
import { aula01Html } from '../fullstack/aula-01-html';
import { aula02Html } from './aula-02-texto-semantica';

function plannedLesson(
  number: number,
  slug: string,
  title: string,
  shortTitle: string,
  objectives: string[]
): LessonDefinition {
  const padded = String(number).padStart(2, '0');

  return {
    id: 'html-aula-' + padded,
    status: 'planned',
    slug,
    number,
    title,
    shortTitle,
    durationMinutes: 240,
    audience: 'Iniciantes em desenvolvimento web',
    ucSlug: 'fundamentos-html5',
    objectives,
    lab: {
      workspacePath: 'labs/html/aula-' + padded + '/index.html',
      editorLabel: 'Abrir atividade no VS Code Web'
    },
    slides: []
  };
}

export const htmlLessons: LessonDefinition[] = [
  {
    ...aula01Html,
    status: 'published',
    lab: {
      workspacePath: 'labs/html/aula-01/index.html',
      editorLabel: 'Abrir código da Aula 01 no VS Code Web'
    }
  },
  aula02Html,
  plannedLesson(
    3,
    'aula-03-html-semantico',
    'HTML semântico: estrutura e significado',
    'HTML semântico',
    [
      'Organizar páginas com header, nav, main, section, article, aside e footer.',
      'Escolher elementos pelo significado e não pela aparência.',
      'Usar figure, figcaption, time e address quando apropriado.',
      'Reconhecer quando div e span continuam sendo adequados.'
    ]
  ),
  plannedLesson(
    4,
    'aula-04-tabelas',
    'HTML: tabelas e representação de dados',
    'Tabelas',
    [
      'Modelar dados tabulares com table, caption, thead, tbody e tfoot.',
      'Relacionar cabeçalhos e células com th, td e scope.',
      'Usar colspan e rowspan apenas quando necessários.',
      'Evitar tabelas para construção de layout.'
    ]
  ),
  plannedLesson(
    5,
    'aula-05-formularios-fundamentos',
    'HTML: formulários — fundamentos',
    'Formulários I',
    [
      'Construir formulários com form, label, input, textarea, select e button.',
      'Relacionar labels e controles corretamente.',
      'Escolher tipos de input adequados ao dado solicitado.',
      'Organizar grupos de campos com fieldset e legend.'
    ]
  ),
  plannedLesson(
    6,
    'aula-06-formularios-validacao',
    'HTML: formulários — validação e experiência do usuário',
    'Formulários II',
    [
      'Aplicar required, min, max, minlength, maxlength, pattern e step.',
      'Usar autocomplete e demais atributos de experiência de preenchimento.',
      'Trabalhar radio, checkbox, file, range, color e campos de data e hora.',
      'Distinguir validação no navegador de validação e segurança no servidor.'
    ]
  ),
  plannedLesson(
    7,
    'aula-07-audio-video-embeds',
    'HTML: áudio, vídeo e conteúdo incorporado',
    'Mídia e embeds',
    [
      'Incorporar áudio e vídeo com elementos nativos.',
      'Trabalhar múltiplas fontes, poster, controles e comportamento de reprodução.',
      'Adicionar legendas com track e WebVTT.',
      'Usar iframe considerando acessibilidade, privacidade e falhas externas.'
    ]
  ),
  plannedLesson(
    8,
    'aula-08-imagens-responsivas',
    'HTML: imagens responsivas e carregamento eficiente',
    'Imagens responsivas',
    [
      'Compreender o papel da meta viewport em dispositivos móveis.',
      'Usar srcset e sizes para fornecer imagens adequadas ao contexto.',
      'Aplicar picture para direção de arte e formatos alternativos.',
      'Usar width, height, loading e formatos modernos visando estabilidade e performance.'
    ]
  ),
  plannedLesson(
    9,
    'aula-09-acessibilidade-html',
    'HTML acessível: recursos nativos antes de ARIA',
    'Acessibilidade',
    [
      'Priorizar elementos HTML nativos e semânticos.',
      'Criar navegação por teclado e ordem de leitura coerentes.',
      'Trabalhar idioma, headings, texto alternativo, labels e landmarks.',
      'Entender quando ARIA é necessário e quando não deve ser usado.'
    ]
  ),
  plannedLesson(
    10,
    'aula-10-seo-metadados',
    'HTML: SEO, metadados e compartilhamento',
    'SEO e metadados',
    [
      'Configurar title, description, canonical e robots.',
      'Preparar Open Graph e metadados de compartilhamento.',
      'Relacionar semântica, headings, links e imagens com rastreabilidade.',
      'Introduzir dados estruturados com schema.org e JSON-LD.'
    ]
  ),
  plannedLesson(
    11,
    'aula-11-html-moderno',
    'HTML moderno: recursos nativos para aplicações',
    'HTML moderno',
    [
      'Usar details e summary para conteúdo expansível.',
      'Compreender dialog, popover, progress e meter.',
      'Trabalhar template, data-* e hidden como base para comportamento posterior.',
      'Preparar a transição conceitual para JavaScript sem recriar recursos nativos desnecessariamente.'
    ]
  ),
  plannedLesson(
    12,
    'aula-12-projeto-final',
    'Projeto final HTML: site multipágina completo',
    'Projeto final',
    [
      'Planejar a arquitetura de conteúdo de um pequeno site.',
      'Construir múltiplas páginas conectadas semanticamente.',
      'Integrar acessibilidade, formulários, mídia, imagens responsivas e metadados.',
      'Validar HTML e apresentar decisões técnicas do projeto.'
    ]
  )
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
