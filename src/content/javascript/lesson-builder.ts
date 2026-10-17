import type { CardItem, LessonDefinition, Slide } from '../../types/course';

export type JsConcept = { title: string; lead: string; detail: string };
export type JsPoint = { title: string; detail: string };
export type JsQuestion = {
  prompt: string;
  choices: [string, string, string];
  answer: 0 | 1 | 2;
  why: string;
};
export type JsPractice = { title: string; goal: string; action: string; verify: string };
export type JsLessonSpec = {
  number: number; slug: string; title: string; short: string; subtitle: string;
  problem: string;
  context: string;
  concepts: [JsConcept, JsConcept, JsConcept];
  terms: [JsPoint, JsPoint, JsPoint];
  contrasts: [JsPoint, JsPoint, JsPoint];
  starterCode: string;
  task: string; output: string; incorrectOutputs: [string, string]; explanation: string;
  questions: [JsQuestion, JsQuestion, JsQuestion];
  practices: [JsPractice, JsPractice, JsPractice];
  docs?: string;
  runtime?: 'browser' | 'node' | 'both';
};

const MDN = 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript';
const NODE = 'https://nodejs.org/api/';
const TONES = ['blue', 'green', 'orange'] as const;

export function buildJsLesson(def: JsLessonSpec): LessonDefinition {
  const number = String(def.number).padStart(2, '0');
  const prefix = 'js-' + number;
  const statement = (suffix: string, title: string, lead: string, detail: string, tags: string[]): Slide => ({
    kind: 'statement', id: prefix + '-' + suffix, eyebrow: 'JavaScript · Conceito',
    title, lead, detail, chips: tags
  });
  const cards = (suffix: string, title: string, points: JsPoint[]): Slide => ({
    kind: 'cards', id: prefix + '-' + suffix, eyebrow: 'Entenda as diferenças', title,
    items: points.map((item, index): CardItem =>
      ({ title: item.title, detail: item.detail, tone: TONES[index] }))
  });
  const quiz = (suffix: string, question: JsQuestion): Slide => ({
    kind: 'challenge', id: prefix + '-' + suffix, eyebrow: 'Verifique sua compreensão',
    title: 'Qual alternativa está correta?', prompt: question.prompt,
    options: question.choices.map(label => ({ label })), answerIndex: question.answer,
    explanation: question.why
  });
  const exercise = (suffix: string, p: JsPractice, minutes: number): Slide => ({
    kind: 'exercise', id: prefix + '-' + suffix,
    eyebrow: 'Prática · ' + minutes + ' minutos', title: p.title, challenge: p.goal,
    timebox: minutes + ' minutos',
    steps: [
      'Identifique os valores, instruções e o resultado esperado.',
      p.action,
      'Execute o exemplo, observe a saída e teste uma segunda entrada.',
      p.verify
    ],
    success: [
      'Código executado sem erro não previsto',
      'Resultado observado e interpretado',
      'Comparação com o comportamento esperado'
    ]
  });
  const objectives = def.concepts.map(item => item.title);
  objectives.push('Aplicar e testar ' + def.short.toLocaleLowerCase('pt-BR') + '.');
  const slides: Slide[] = [
    { kind: 'cover', id: prefix + '-cover', eyebrow: 'JavaScript · Aula ' + number,
      title: def.short, subtitle: def.subtitle, badge: 'JavaScript', duration: '4 horas' },
    statement('context', 'Problema da aula', def.problem, def.context, ['problema', 'entrada', 'resultado']),
    quiz('diagnostic', def.questions[0]),
    statement('concept-a', def.concepts[0].title, def.concepts[0].lead, def.concepts[0].detail, [def.terms[0].title]),
    cards('terms', 'Termos essenciais', def.terms),
    quiz('concept-check', def.questions[1]),
    statement('concept-b', def.concepts[1].title, def.concepts[1].lead, def.concepts[1].detail, [def.terms[1].title]),
    { kind: 'javascript-console', id: prefix + '-console', eyebrow: 'Laboratório interativo · Código real',
      title: 'Modifique e execute JavaScript',
      subtitle: 'Edite o código e pressione Executar. Confira a saída.',
      task: def.task, starterCode: def.starterCode, explanation: def.explanation },
    { kind: 'challenge', id: prefix + '-output-check',
      eyebrow: 'Leitura de código', title: 'Preveja a saída do JavaScript',
      prompt: 'Qual saída o código abaixo produz, conforme escrito?',
      exampleCode: def.starterCode, codeLanguage: 'javascript',
      options: [def.output, ...def.incorrectOutputs].map(label => ({ label })),
      answerIndex: 0, explanation: def.explanation },
    exercise('practice-a', def.practices[0], 25),
    statement('concept-c', def.concepts[2].title, def.concepts[2].lead, def.concepts[2].detail, [def.terms[2].title]),
    cards('contrast', 'Evite estas confusões', def.contrasts),
    quiz('application-check', def.questions[2]),
    exercise('practice-b', def.practices[1], 35),
    statement('summary', 'O que você aprendeu?', def.concepts[0].lead, def.concepts[2].detail,
      def.concepts.map(item => item.title)),
    exercise('project', def.practices[2], 45),
    { kind: 'checklist', id: prefix + '-checklist', eyebrow: 'Autoavaliação',
      title: 'Confira seus conhecimentos', items: [
        ...def.concepts.map(item => item.title),
        'Executo e interpreto o exemplo em JavaScript.',
        'Reconheço o contexto de execução: ' + (def.runtime === 'node' ? 'Node.js' : def.runtime === 'both' ? 'navegador e Node.js' : 'navegador') + '.'
      ], prompt: 'Altere uma entrada, execute novamente e explique a diferença entre as saídas.' },
    { kind: 'references', id: prefix + '-references', eyebrow: 'Documentação oficial',
      title: 'Aprofunde os conceitos', items: [
        { label: 'MDN · JavaScript', url: MDN },
        { label: def.runtime === 'node' ? 'Node.js · API' : 'MDN · Guia de JavaScript',
          url: def.runtime === 'node' ? NODE : MDN + '/Guide' },
        ...(def.docs ? [{ label: 'Referência específica', url: def.docs }] : [])
      ] }
  ];
  return {
    id: 'js-aula-' + number, slug: def.slug, number: def.number, title: def.title,
    shortTitle: def.short, durationMinutes: 240, status: 'published',
    audience: 'Do nível iniciante ao avançado em JavaScript.',
    ucSlug: 'fundamentos-javascript',
    objectives, slides,
    sources: [{ label: 'MDN · JavaScript', note: MDN },
      { label: 'Node.js · documentação oficial', note: NODE }],
    visualPlan: [
      'Progressão baseada em exemplo real e execução observável.',
      'Questões autocorrigidas, código multilinha e prática aplicada.',
      'Editor de JavaScript isolado no navegador; distinguir APIs de Node.js.',
      'Modo Stories adaptado ao celular sem rolagem interna.'
    ]
  };
}
