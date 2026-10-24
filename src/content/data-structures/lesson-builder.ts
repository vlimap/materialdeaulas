import type { CardItem, CourseDefinition, LessonDefinition, ReferenceItem, Slide } from '../../types/course';

export type DataTopic = { title: string; lead: string; detail: string };
export type DataPoint = { title: string; detail: string };
export type DataQuestion = {
  prompt: string; choices: [string, string, string];
  answer: 0 | 1 | 2; why: string; exampleCode?: string;
};
export type DataExercise = {
  title: string; problem: string;
  steps: [string, string, string, string];
  success: [string, string, string]; minutes: 30 | 35 | 40 | 45;
};
export type DataLessonSpec = {
  number: number; slug: string; title: string; short: string; subtitle: string;
  opening: DataTopic;
  concepts: [DataTopic, DataTopic, DataTopic, DataTopic];
  contrasts: [DataPoint, DataPoint, DataPoint];
  costs: [DataPoint, DataPoint, DataPoint];
  pitfalls: [DataPoint, DataPoint, DataPoint];
  questions: [DataQuestion, DataQuestion, DataQuestion];
  starterCode: string; expected: string; incorrect: [string, string];
  codeTask: string; codeExplanation: string;
  exercises: [DataExercise, DataExercise, DataExercise];
  checklist: [string, string, string, string, string];
  references: ReferenceItem[];
};

const MDN = 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript';
const tones = ['blue', 'green', 'orange'] as const;

export function buildDataLesson(d: DataLessonSpec): LessonDefinition {
  const prefix = 'ed-' + String(d.number).padStart(2, '0');
  const topic = (id: string, item: DataTopic, label: string): Slide => ({
    id: prefix + '-' + id, kind: 'statement', eyebrow: label,
    title: item.title, lead: item.lead, detail: item.detail
  });
  const cards = (id: string, title: string, items: DataPoint[]): Slide => ({
    id: prefix + '-' + id, kind: 'cards', eyebrow: 'Compare e compreenda',
    title, items: items.map((item, i): CardItem => ({
      title: item.title, detail: item.detail, tone: tones[i]
    }))
  });
  const quiz = (id: string, question: DataQuestion): Slide => ({
    id: prefix + '-' + id, kind: 'challenge',
    eyebrow: 'Atividade autocorrigida', title: 'Aplique o conceito',
    prompt: question.prompt, options: question.choices.map(label => ({ label })),
    answerIndex: question.answer, explanation: question.why,
    ...(question.exampleCode ? { exampleCode: question.exampleCode, codeLanguage: 'javascript' as const } : {})
  });
  const exercise = (id: string, item: DataExercise): Slide => ({
    id: prefix + '-' + id, kind: 'exercise', eyebrow: 'Prática guiada',
    title: item.title, challenge: item.problem,
    steps: item.steps, success: item.success, timebox: item.minutes + ' minutos'
  });
  const slides: Slide[] = [
    { id: prefix + '-cover', kind: 'cover', eyebrow: 'Estruturas de Dados · Aula ' + String(d.number).padStart(2, '0'),
      title: d.short, subtitle: d.subtitle, badge: 'Estruturas de Dados', duration: '4 horas' },
    topic('context', d.opening, 'Situação-problema'),
    quiz('diagnostic', d.questions[0]),
    topic('concept-1', d.concepts[0], 'Conceito 1 de 4'),
    cards('contrasts', 'Reconheça os elementos', d.contrasts),
    quiz('check-1', d.questions[1]),
    topic('concept-2', d.concepts[1], 'Conceito 2 de 4'),
    { id: prefix + '-console', kind: 'javascript-console', eyebrow: 'Laboratório interativo · Código real',
      title: 'Execute e altere a estrutura', subtitle: 'Teste entradas diferentes e observe a saída.',
      starterCode: d.starterCode, task: d.codeTask, explanation: d.codeExplanation },
    { id: prefix + '-output', kind: 'challenge', eyebrow: 'Preveja antes de executar',
      title: 'Qual saída é produzida?', prompt: 'Com o código exatamente como está, o que aparece no console?',
      exampleCode: d.starterCode, codeLanguage: 'javascript',
      options: [d.expected, ...d.incorrect].map(label => ({ label })),
      answerIndex: 0, explanation: d.codeExplanation },
    exercise('practice-1', d.exercises[0]),
    topic('concept-3', d.concepts[2], 'Conceito 3 de 4'),
    cards('costs', 'Custos e garantias', d.costs),
    quiz('check-2', d.questions[2]),
    exercise('practice-2', d.exercises[1]),
    topic('concept-4', d.concepts[3], 'Conceito 4 de 4'),
    cards('pitfalls', 'Erros comuns e limites', d.pitfalls),
    exercise('practice-3', d.exercises[2]),
    topic('summary', { title: 'Escolha pela operação necessária',
      lead: d.concepts[0].lead, detail: d.concepts[3].detail }, 'Síntese'),
    { id: prefix + '-review', kind: 'checklist', eyebrow: 'Autoavaliação',
      title: 'Confirme o aprendizado', items: d.checklist,
      prompt: 'Edite o laboratório, explique a saída e justifique o custo da operação.' },
    { id: prefix + '-references', kind: 'references', eyebrow: 'Fontes confiáveis',
      title: 'Aprofunde os conceitos', items: [
        { label: 'MDN · JavaScript', url: MDN },
        ...d.references
      ] }
  ];
  return {
    id: 'data-structures-aula-' + String(d.number).padStart(2, '0'),
    status: 'published', slug: d.slug, number: d.number,
    title: d.title, shortTitle: d.short, durationMinutes: 240,
    audience: 'Estudantes com fundamentos de JavaScript e algoritmos.',
    ucSlug: 'fundamentos-data-structures',
    objectives: [
      'Descrever ' + d.concepts[0].title.toLowerCase() + '.',
      'Demonstrar a operação usando JavaScript executável.',
      'Comparar custos, comportamentos e casos-limite.',
      'Resolver os três exercícios com entradas distintas.'
    ],
    sources: d.references.map(r => ({ label: r.label, note: r.url })),
    visualPlan: [
      'Uma ideia principal por slide com exemplos concretos.',
      'Laboratório JavaScript executado em iframe isolado.',
      'Previsão de saída e três questões com feedback.',
      'Três práticas com critérios de conclusão e referências acessíveis.',
      'Interface do player responsiva e navegável por teclado.'
    ],
    slides
  };
}

export function buildDataCourse(lessons: LessonDefinition[]): CourseDefinition {
  return {
    slug: 'curso-data-structures', title: 'Estruturas de Dados',
    description: 'Curso completo de Estruturas de Dados · 48 horas · JavaScript',
    ucs: [{
      slug: 'fundamentos-data-structures',
      title: 'Estruturas de dados e implementação em JavaScript',
      description: 'Vetores, pilhas, filas, listas, hashing, árvores, heaps, grafos e seleção de estruturas.',
      modules: [{
        slug: 'data-structures', title: 'Estruturas de Dados na Prática',
        description: '12 aulas de 4 horas, código executável, exercícios e projeto integrador.',
        status: 'active', lessons
      }]
    }]
  };
}
