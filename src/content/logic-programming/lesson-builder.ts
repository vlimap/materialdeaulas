import type { CardItem, LessonDefinition, ReferenceItem, Slide } from '../../types/course';

export type LogicTopic = {
  title: string;
  lead: string;
  detail: string;
  keywords: string[];
};

export type LogicQuiz = {
  title: string;
  prompt: string;
  options: [string, string, string];
  answer: 0 | 1 | 2;
  explanation: string;
  exampleCode?: string;
  testInput?: string;
};

export type LogicPractice = {
  title: string;
  challenge: string;
  steps: [string, string, string, string];
  success: [string, string, string];
  minutes: 20 | 25 | 30 | 35 | 40 | 45;
};

export type LogicLessonConfig = {
  number: number;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  objectives: [string, string, string, string];
  context: LogicTopic;
  concepts: [LogicTopic, LogicTopic, LogicTopic];
  cards: [CardItem[], CardItem[]];
  quizzes: [LogicQuiz, LogicQuiz, LogicQuiz, LogicQuiz];
  scenario: Extract<Slide, { kind: 'algorithm-lab' }>['scenario'];
  practice: [LogicPractice, LogicPractice, LogicPractice];
  synthesis: LogicTopic;
  checklist: [string, string, string, string, string];
  sources: ReferenceItem[];
};

export function buildLogicLesson(def: LogicLessonConfig): LessonDefinition {
  const prefix = 'logic-' + String(def.number).padStart(2, '0');
  const statement = (id: string, topic: LogicTopic, eyebrow: string): Slide => ({
    id: prefix + '-' + id,
    kind: 'statement',
    eyebrow,
    title: topic.title,
    lead: topic.lead,
    detail: topic.detail,
    chips: topic.keywords
  });
  const quiz = (id: string, question: LogicQuiz): Slide => ({
    id: prefix + '-' + id,
    kind: 'challenge',
    eyebrow: 'Verifique sua compreensão',
    title: question.title,
    prompt: question.prompt,
    ...(question.exampleCode ? { exampleCode: question.exampleCode } : {}),
    ...(question.testInput ? { testInput: question.testInput } : {}),
    options: question.options.map(label => ({ label })),
    answerIndex: question.answer,
    explanation: question.explanation
  });
  const cards = (id: string, title: string, items: CardItem[]): Slide => ({
    id: prefix + '-' + id, kind: 'cards', eyebrow: 'Entenda os conceitos', title, items
  });
  const exercise = (id: string, practice: LogicPractice): Slide => ({
    id: prefix + '-' + id, kind: 'exercise', eyebrow: 'Prática · ' + practice.minutes + ' minutos',
    title: practice.title, challenge: practice.challenge,
    steps: [...practice.steps], success: [...practice.success], timebox: practice.minutes + ' minutos'
  });
  const slides: Slide[] = [
    {
      id: prefix + '-capa', kind: 'cover', eyebrow: 'Lógica de Programação · Aula ' + String(def.number).padStart(2, '0'),
      title: def.shortTitle, subtitle: def.subtitle, badge: 'Lógica de Programação', duration: '4 horas'
    },
    statement('contexto', def.context, 'Problema da aula'),
    quiz('sondagem', def.quizzes[0]),
    statement('conceito-a', def.concepts[0], 'Conceito 01'),
    cards('mapa-a', 'Três pontos importantes', def.cards[0]),
    quiz('fixacao-a', def.quizzes[1]),
    statement('conceito-b', def.concepts[1], 'Conceito 02'),
    {
      id: prefix + '-laboratorio', kind: 'algorithm-lab', eyebrow: 'Simulação interativa',
      title: 'Execute e acompanhe cada etapa',
      subtitle: 'Altere a entrada e use Executar passo. O pseudocódigo é apenas para leitura.',
      scenario: def.scenario
    },
    quiz('leitura-algoritmo', def.quizzes[2]),
    exercise('pratica-guiada', def.practice[0]),
    statement('conceito-c', def.concepts[2], 'Conceito 03'),
    cards('mapa-b', 'Compare os resultados', def.cards[1]),
    quiz('verificacao', def.quizzes[3]),
    exercise('pratica-autonoma', def.practice[1]),
    statement('sintese', def.synthesis, 'Síntese da aula'),
    exercise('desafio-final', def.practice[2]),
    {
      id: prefix + '-checklist', kind: 'checklist', eyebrow: 'Autoavaliação',
      title: 'Confira o que você aprendeu',
      items: [...def.checklist],
      prompt: 'Revise o laboratório e teste pelo menos duas entradas diferentes antes de avançar.'
    },
    {
      id: prefix + '-referencias', kind: 'references', eyebrow: 'Leitura complementar',
      title: 'Continue praticando', items: def.sources
    }
  ];
  return {
    id: 'logic-aula-' + String(def.number).padStart(2, '0'),
    status: 'published',
    number: def.number,
    slug: def.slug,
    title: def.title,
    shortTitle: def.shortTitle,
    durationMinutes: 240,
    audience: 'Iniciantes em programação',
    ucSlug: 'fundamentos-logic-programming',
    objectives: [...def.objectives],
    visualPlan: [
      'Conceitos em blocos curtos, sem elementos informativos que pareçam botões.',
      'Simulação de algoritmo com mudança de entrada e execução controlada.',
      'Código estruturado, feedback imediato e atividades de aplicação.'
    ],
    sources: def.sources.map(source => ({ label: source.label, note: source.url })),
    slides
  };
}
