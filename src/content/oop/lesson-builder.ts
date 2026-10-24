import type { CardItem, CourseDefinition, LessonDefinition, ReferenceItem, Slide } from '../../types/course';

export type OopTopic = { title: string; lead: string; detail: string };
export type OopPoint = { title: string; detail: string };
export type OopQuiz = { prompt: string; choices: [string, string, string]; answer: 0 | 1 | 2; why: string };
export type OopExercise = {
  title: string; goal: string;
  steps: [string, string, string, string];
  success: [string, string, string]; minutes: 30 | 35 | 40 | 45;
};
export type OopSpec = {
  number: number; slug: string; title: string; short: string; subtitle: string;
  problem: OopTopic;
  concepts: [OopTopic, OopTopic, OopTopic, OopTopic];
  elements: [OopPoint, OopPoint, OopPoint];
  decisions: [OopPoint, OopPoint, OopPoint];
  pitfalls: [OopPoint, OopPoint, OopPoint];
  quizzes: [OopQuiz, OopQuiz, OopQuiz];
  starterCode: string; expected: string; distractors: [string, string];
  labTask: string; explanation: string;
  exercises: [OopExercise, OopExercise, OopExercise];
  review: [string, string, string, string, string];
  references: ReferenceItem[];
};

const tones = ['blue', 'green', 'orange'] as const;
const MDN = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects';

export function buildOopLesson(d: OopSpec): LessonDefinition {
  const n = String(d.number).padStart(2, '0');
  const prefix = 'oop-' + n;
  const statement = (id: string, item: OopTopic, label: string): Slide => ({
    id: prefix + '-' + id, kind: 'statement', eyebrow: label,
    title: item.title, lead: item.lead, detail: item.detail
  });
  const cards = (id: string, title: string, items: OopPoint[]): Slide => ({
    id: prefix + '-' + id, kind: 'cards', eyebrow: 'Pontos de decisão',
    title, items: items.map((item, index): CardItem => ({
      title: item.title, detail: item.detail, tone: tones[index]
    }))
  });
  const quiz = (id: string, item: OopQuiz): Slide => ({
    id: prefix + '-' + id, kind: 'challenge', eyebrow: 'Verifique seu entendimento',
    title: 'Escolha a alternativa correta', prompt: item.prompt,
    options: item.choices.map(label => ({ label })),
    answerIndex: item.answer, explanation: item.why
  });
  const exercise = (id: string, item: OopExercise): Slide => ({
    id: prefix + '-' + id, kind: 'exercise', eyebrow: 'Prática aplicada',
    title: item.title, challenge: item.goal, steps: item.steps,
    success: item.success, timebox: item.minutes + ' minutos'
  });

  const slides: Slide[] = [
    { id: prefix + '-cover', kind: 'cover', eyebrow: 'POO com JavaScript · Aula ' + n,
      title: d.short, subtitle: d.subtitle, badge: 'Orientação a Objetos', duration: '4 horas' },
    statement('problem', d.problem, 'Situação-problema'),
    quiz('diagnostic', d.quizzes[0]),
    statement('concept-1', d.concepts[0], 'Conceito 1'),
    cards('elements', 'Entenda os componentes', d.elements),
    quiz('concept-check', d.quizzes[1]),
    statement('concept-2', d.concepts[1], 'Conceito 2'),
    { id: prefix + '-lab', kind: 'javascript-console', eyebrow: 'Editor JavaScript isolado',
      title: 'Experimente a implementação', subtitle: 'Altere os parâmetros e execute para conferir os efeitos.',
      starterCode: d.starterCode, task: d.labTask, explanation: d.explanation },
    { id: prefix + '-output', kind: 'challenge', eyebrow: 'Leitura de código',
      title: 'Preveja a saída', prompt: 'Qual saída o programa apresentado realmente produz?',
      exampleCode: d.starterCode, codeLanguage: 'javascript',
      options: [d.expected, ...d.distractors].map(label => ({ label })),
      answerIndex: 0, explanation: d.explanation },
    exercise('practice-a', d.exercises[0]),
    statement('concept-3', d.concepts[2], 'Conceito 3'),
    cards('decisions', 'Escolhas de projeto', d.decisions),
    quiz('application-check', d.quizzes[2]),
    exercise('practice-b', d.exercises[1]),
    statement('concept-4', d.concepts[3], 'Conceito 4'),
    cards('pitfalls', 'Antipadrões e cuidados', d.pitfalls),
    exercise('challenge', d.exercises[2]),
    statement('summary', {
      title: 'Leve o conceito para seu projeto',
      lead: d.concepts[1].lead, detail: d.concepts[3].detail
    }, 'Síntese e transferência'),
    { id: prefix + '-review', kind: 'checklist', eyebrow: 'Autoavaliação',
      title: 'Critérios de aprendizagem', items: d.review,
      prompt: 'Execute novamente com outra entrada e explique o contrato de cada método.' },
    { id: prefix + '-references', kind: 'references', eyebrow: 'Fontes e aprofundamento',
      title: 'Documentação e leitura', items: [
        { label: 'MDN · Trabalhando com objetos', url: MDN }, ...d.references
      ] }
  ];
  return {
    id: 'oop-aula-' + n, slug: d.slug, number: d.number, title: d.title,
    shortTitle: d.short, status: 'published', durationMinutes: 240,
    audience: 'Estudantes com noções de algoritmos, estruturas de dados e JavaScript.',
    ucSlug: 'fundamentos-oop',
    objectives: [
      d.concepts[0].title, d.concepts[1].title,
      'Construir e testar a implementação no JavaScript.',
      'Justificar decisões e reconhecer os casos-limite do problema.'
    ],
    sources: d.references.map(item => ({ label: item.label, note: item.url })),
    visualPlan: [
      'Uma ideia por slide; no máximo três pontos por comparação.',
      'Experiência com JavaScript real no editor isolado do navegador.',
      'Quatro questões com feedback, incluindo previsão da saída real.',
      'Três práticas por aula com critérios claros de verificação.',
      'Conteúdo acessível e responsivo, sem rolagem interna no modo Stories.'
    ],
    slides
  };
}

export function buildOopCourse(lessons: LessonDefinition[]): CourseDefinition {
  return {
    slug: 'curso-oop', title: 'Programação Orientada a Objetos',
    description: 'Curso completo de POO com JavaScript · 12 aulas · 48 horas',
    ucs: [{
      slug: 'fundamentos-oop',
      title: 'Modelagem e programação orientada a objetos com JavaScript',
      description: 'Classes, objetos, encapsulamento, protótipos, composição, herança, polimorfismo, princípios de projeto e testes.',
      modules: [{
        slug: 'oop', title: 'Orientação a Objetos na Prática',
        description: 'Do domínio e das classes ao projeto final com testes e documentação.',
        status: 'active', lessons
      }]
    }]
  };
}
