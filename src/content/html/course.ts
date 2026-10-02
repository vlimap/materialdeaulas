import type { CourseDefinition, LessonDefinition } from '../../types/course';
import { aula01Html } from '../fullstack/aula-01-html';

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
  plannedLesson(
    2,
    'aula-02-textos-links-listas-caminhos',
    'HTML: textos, links, listas e caminhos',
    'Textos, links e caminhos',
    [
      'Criar hierarquia textual coerente com títulos e parágrafos.',
      'Construir links internos, externos, relativos e absolutos.',
      'Usar listas ordenadas, não ordenadas e de descrição.',
      'Organizar arquivos e compreender caminhos relativos.'
    ]
  ),
  plannedLesson(
    3,
    'aula-03-imagens-audio-video',
    'HTML: imagens, áudio, vídeo e mídia responsiva',
    'Imagens e mídia',
    [
      'Usar imagens com texto alternativo adequado.',
      'Aplicar figure e figcaption quando houver relação semântica.',
      'Criar imagens responsivas com picture e srcset.',
      'Incorporar áudio e vídeo com alternativas acessíveis.'
    ]
  ),
  plannedLesson(
    4,
    'aula-04-html-semantico',
    'HTML semântico: estrutura, landmarks e conteúdo',
    'HTML semântico',
    [
      'Organizar páginas com header, nav, main, section, article, aside e footer.',
      'Escolher elementos pelo significado e não pela aparência.',
      'Criar uma ordem de leitura lógica.',
      'Reconhecer quando div e span são apropriados.'
    ]
  ),
  plannedLesson(
    5,
    'aula-05-tabelas',
    'HTML: tabelas de dados acessíveis',
    'Tabelas',
    [
      'Modelar dados tabulares com table, thead, tbody e tfoot.',
      'Relacionar cabeçalhos e células corretamente.',
      'Usar caption e escopos de cabeçalho.',
      'Evitar tabelas para layout.'
    ]
  ),
  plannedLesson(
    6,
    'aula-06-formularios-fundamentos',
    'HTML: formulários — fundamentos',
    'Formulários I',
    [
      'Construir formulários com form, label, input, textarea e button.',
      'Relacionar labels e controles corretamente.',
      'Escolher tipos de input adequados.',
      'Compreender name, value, method e action.'
    ]
  ),
  plannedLesson(
    7,
    'aula-07-formularios-validacao',
    'HTML: formulários — validação e experiência do usuário',
    'Formulários II',
    [
      'Aplicar required, minlength, maxlength, min, max e pattern.',
      'Usar autocomplete de forma apropriada.',
      'Agrupar controles com fieldset e legend.',
      'Criar formulários mais acessíveis e amigáveis em dispositivos móveis.'
    ]
  ),
  plannedLesson(
    8,
    'aula-08-acessibilidade-html',
    'HTML acessível: recursos nativos antes de ARIA',
    'Acessibilidade',
    [
      'Priorizar elementos HTML nativos para acessibilidade.',
      'Criar navegação por teclado coerente.',
      'Trabalhar idioma, rótulos, nomes acessíveis e landmarks.',
      'Entender quando ARIA é necessário e quando não deve ser usado.'
    ]
  ),
  plannedLesson(
    9,
    'aula-09-head-metadados-seo',
    'HTML: head, metadados, SEO e compartilhamento',
    'Metadados e SEO',
    [
      'Configurar title, description, canonical e robots.',
      'Preparar Open Graph e Twitter Cards.',
      'Adicionar favicons e informações de idioma.',
      'Introduzir dados estruturados com JSON-LD.'
    ]
  ),
  plannedLesson(
    10,
    'aula-10-html-moderno',
    'HTML moderno: details, dialog, popover, template e embeds',
    'HTML moderno',
    [
      'Usar details e summary para conteúdo expansível.',
      'Compreender dialog e popover em interfaces modernas.',
      'Trabalhar template como estrutura inerte.',
      'Incorporar conteúdo externo com iframe de forma segura.'
    ]
  ),
  plannedLesson(
    11,
    'aula-11-performance-recursos',
    'HTML: carregamento de recursos e performance',
    'Performance HTML',
    [
      'Aplicar loading e decoding em imagens quando adequado.',
      'Compreender preload, preconnect e outras resource hints.',
      'Entender defer, async e module na inclusão de scripts.',
      'Evitar decisões de marcação que prejudiquem Core Web Vitals.'
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
      'Integrar acessibilidade, formulários, mídia e metadados.',
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
