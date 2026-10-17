import type { CardItem, CourseDefinition, LessonDefinition, ReferenceItem, Slide } from '../../types/course';
import type { AlgorithmScenario } from '../../components/deck/algorithm-visualization-engine';

export type AlgorithmTopic = { title: string; lead: string; detail: string; keywords: string[] };
export type AlgorithmQuiz = {
  title: string; prompt: string; answers: [string, string, string]; correct: 0 | 1 | 2;
  explanation: string; code?: string; input?: string;
};
export type AlgorithmPractice = {
  title: string; problem: string; steps: [string, string, string, string];
  success: [string, string, string]; minutes: 25 | 30 | 35 | 40 | 45;
};
export type AlgorithmLessonConfig = {
  number: number; slug: string; title: string; short: string; subtitle: string;
  objectives: [string, string, string, string]; opening: AlgorithmTopic;
  concepts: [AlgorithmTopic, AlgorithmTopic, AlgorithmTopic]; cards: [CardItem[], CardItem[]];
  quiz: [AlgorithmQuiz, AlgorithmQuiz, AlgorithmQuiz, AlgorithmQuiz];
  primary: AlgorithmScenario; secondary?: AlgorithmScenario;
  practice: [AlgorithmPractice, AlgorithmPractice, AlgorithmPractice];
  summary: AlgorithmTopic; checklist: [string, string, string, string, string];
  references: ReferenceItem[];
};

export function makeAlgorithmLesson(d: AlgorithmLessonConfig): LessonDefinition {
  const prefix = 'alg-' + String(d.number).padStart(2, '0');
  const topic = (id: string, value: AlgorithmTopic, eyebrow: string): Slide => ({
    id: prefix + '-' + id, kind: 'statement', eyebrow, title: value.title,
    lead: value.lead, detail: value.detail, chips: value.keywords
  });
  const question = (id: string, quiz: AlgorithmQuiz): Slide => ({
    id: prefix + '-' + id, kind: 'challenge', eyebrow: 'Verifique a compreensão',
    title: quiz.title, prompt: quiz.prompt, options: quiz.answers.map(label => ({ label })),
    answerIndex: quiz.correct, explanation: quiz.explanation,
    ...(quiz.code ? { exampleCode: quiz.code } : {}),
    ...(quiz.input ? { testInput: quiz.input } : {})
  });
  const cards = (id: string, title: string, items: CardItem[]): Slide => ({
    id: prefix + '-' + id, kind: 'cards', eyebrow: 'Conceitos essenciais',
    title, items
  });
  const lab = (id: string, scenario: AlgorithmScenario): Slide => ({
    id: prefix + '-' + id, kind: 'algorithm-visualization',
    eyebrow: 'Laboratório interativo',
    title: 'Execute o algoritmo por etapas',
    subtitle: 'Altere a entrada e acompanhe o pseudocódigo e o estado em cada passo.',
    scenario
  });
  const practice = (id: string, p: AlgorithmPractice): Slide => ({
    id: prefix + '-' + id, kind: 'exercise',
    eyebrow: 'Prática · ' + p.minutes + ' minutos', title: p.title, challenge: p.problem,
    steps: p.steps, success: p.success, timebox: p.minutes + ' minutos'
  });
  const slides: Slide[] = [
    { id: prefix + '-cover', kind: 'cover', eyebrow: 'Algoritmos · Aula ' + String(d.number).padStart(2, '0'),
      title: d.short, subtitle: d.subtitle, badge: 'Algoritmos', duration: '4 horas' },
    topic('context', d.opening, 'Situação-problema'),
    question('diagnostic', d.quiz[0]),
    topic('concept-1', d.concepts[0], 'Primeiro conceito'),
    cards('cards-1', 'Como funciona?', d.cards[0]),
    question('check-1', d.quiz[1]),
    topic('concept-2', d.concepts[1], 'Observe a execução'),
    lab('visualization', d.primary),
    question('check-2', d.quiz[2]),
    practice('practice-1', d.practice[0]),
    topic('concept-3', d.concepts[2], 'Atenção aos detalhes'),
    cards('cards-2', 'Compare as abordagens', d.cards[1]),
    ...(d.secondary ? [lab('visualization-2', d.secondary)] : []),
    question('check-3', d.quiz[3]),
    practice('practice-2', d.practice[1]),
    topic('summary', d.summary, 'Síntese'),
    practice('challenge', d.practice[2]),
    { id: prefix + '-review', kind: 'checklist', eyebrow: 'Autoavaliação',
      title: 'Confira as aprendizagens', items: d.checklist,
      prompt: 'Experimente no laboratório duas entradas diferentes e compare os estados.' },
    { id: prefix + '-references', kind: 'references', eyebrow: 'Leituras complementares',
      title: 'Continue estudando', items: d.references }
  ];
  return {
    id: 'algorithms-aula-' + String(d.number).padStart(2, '0'),
    status: 'published', slug: d.slug, number: d.number, title: d.title,
    shortTitle: d.short, durationMinutes: 240,
    audience: 'Estudantes que já conhecem sequência, condições, laços e listas.',
    ucSlug: 'fundamentos-algorithms',
    objectives: d.objectives,
    sources: d.references.map(item => ({ label: item.label, note: item.url })),
    visualPlan: ['Um conceito por tela e instruções diretamente ao estudante.',
      'Simulação com valores, índices e pseudocódigo realçado.',
      'Exercícios com verificação e complexidade descrita.', 'Mobile sem rolagem interna.'],
    slides
  };
}

export function makeAlgorithmsCourse(lessons: LessonDefinition[]): CourseDefinition {
  return {
    slug: 'curso-algorithms', title: 'Algoritmos',
    description: 'Curso completo de Algoritmos · Fundamentos de Software',
    ucs: [{
      slug: 'fundamentos-algorithms',
      title: 'Fundamentos, análise e técnicas de algoritmos',
      description: 'Busca, ordenação, recursão, grafos, complexidade e resolução de problemas.',
      modules: [{
        slug: 'algorithms', title: 'Algoritmos na prática',
        description: '12 aulas de 4 horas com laboratórios executáveis em etapas.',
        status: 'active', lessons
      }]
    }]
  };
}
