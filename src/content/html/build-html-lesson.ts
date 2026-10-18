import type { LessonDefinition, Slide } from '../../types/course';

/** Material autocontido: uma ideia por slide, exemplo executável e prática verificável. */
export type HtmlTopic = {
  title: string;
  lead: string;
  detail: string;
  example: string;
  bullets: string[];
  question: string;
  options: [string, string, string];
  correct: 0 | 1 | 2;
  feedback: string;
};
export type HtmlLessonPlan = {
  number: number;
  slug: string;
  title: string;
  shortTitle: string;
  purpose: string;
  context: string;
  objectives: [string, string, string, string];
  topics: [HtmlTopic, HtmlTopic, HtmlTopic, HtmlTopic];
  labTitle: string;
  starterCode: string;
  labSteps: string[];
  guidedSteps: string[];
  individualSteps: string[];
  success: string[];
  extraSources?: Array<{ label: string; url: string }>;
};

export function buildHtmlLesson(plan: HtmlLessonPlan): LessonDefinition {
  const num = String(plan.number).padStart(2, '0');
  const laboratory = 'labs/html/aula-' + num + '/index.html';
  const slides: Slide[] = [
    {
      id: 'capa', kind: 'cover', eyebrow: 'HTML5 · Aula ' + num,
      title: plan.shortTitle, subtitle: plan.purpose, badge: 'Aula ' + num,
      duration: '4 horas'
    },
    {
      id: 'objetivos', kind: 'cards', eyebrow: 'Resultado de aprendizagem',
      title: 'O que você conseguirá fazer?',
      items: plan.objectives.map((item, index) => ({
        kicker: 'Objetivo ' + (index + 1), title: 'Competência ' + (index + 1), detail: item
      }))
    },
    {
      id: 'agenda', kind: 'cards', eyebrow: '240 minutos',
      title: 'Roteiro de estudo e prática',
      items: [
        { kicker: '20 min', title: 'Retomada', detail: 'Revisar e contextualizar o problema.' },
        { kicker: '4 × 30 min', title: 'Conceitos e exemplos', detail: 'Explicar, testar e responder questões.' },
        { kicker: '15 min', title: 'Intervalo', detail: 'Pausa planejada.' },
        { kicker: '55 min', title: 'Laboratório', detail: 'Construir uma solução pequena e verificável.' },
        { kicker: '30 min', title: 'Revisão', detail: 'Validar, melhorar e registrar o aprendizado.' }
      ]
    },
    {
      id: 'contexto', kind: 'statement', eyebrow: 'Problema real',
      title: plan.title, lead: plan.purpose, detail: plan.context,
      chips: ['documento HTML', 'significado', 'navegador']
    },
    ...plan.topics.flatMap((topic, index): Slide[] => [
      {
        id: 'conceito-' + (index + 1), kind: 'statement',
        eyebrow: 'Conceito ' + (index + 1) + ' de 4',
        title: topic.title, lead: topic.lead, detail: topic.detail,
        chips: topic.bullets.slice(0, 4).map(text => text.slice(0, 40))
      },
      {
        id: 'codigo-' + (index + 1), kind: 'code',
        eyebrow: 'Exemplo para observar no navegador',
        title: topic.title,
        language: 'html', code: topic.example,
        bullets: topic.bullets
      },
      {
        id: 'questao-' + (index + 1), kind: 'challenge',
        eyebrow: 'Verifique sua compreensão',
        title: 'Escolha a alternativa correta',
        prompt: topic.question,
        options: topic.options.map(label => ({ label })),
        answerIndex: topic.correct,
        explanation: topic.feedback
      }
    ]),
    {
      id: 'pratica-guiada', kind: 'exercise',
      eyebrow: 'Prática guiada', title: 'Construa uma primeira versão',
      challenge: plan.labTitle, steps: plan.guidedSteps,
      success: plan.success.slice(0, 3), timebox: '25 minutos'
    },
    {
      id: 'pratica-autonoma', kind: 'exercise',
      eyebrow: 'Aplicação individual', title: 'Evolua e justifique as escolhas',
      challenge: 'Revise a solução sem copiar os exemplos.',
      steps: plan.individualSteps, success: plan.success,
      timebox: '30 minutos'
    },
    {
      id: 'editor', kind: 'lab', eyebrow: 'Laboratório HTML',
      title: plan.labTitle, language: 'html',
      starterCode: plan.starterCode, instructions: plan.labSteps,
      editorPath: laboratory
    },
    {
      id: 'criterios', kind: 'checklist', eyebrow: 'Autoverificação',
      title: 'Critérios para concluir a aula', items: plan.success,
      prompt: 'Execute a página localmente, navegue pelo teclado e confira os critérios.'
    },
    {
      id: 'referencias', kind: 'references', eyebrow: 'Documentação técnica',
      title: 'Confira as fontes oficiais',
      items: [
        { label: 'WHATWG — HTML Living Standard', url: 'https://html.spec.whatwg.org/multipage/' },
        { label: 'MDN — HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
        { label: 'W3C WAI — Tutoriais de acessibilidade', url: 'https://www.w3.org/WAI/tutorials/' },
        ...(plan.extraSources ?? [])
      ]
    }
  ];
  return {
    id: 'html-aula-' + num, status: 'published', slug: plan.slug,
    number: plan.number, title: plan.title, shortTitle: plan.shortTitle,
    durationMinutes: 240, audience: 'Iniciantes em desenvolvimento web',
    ucSlug: 'fundamentos-html5', objectives: plan.objectives,
    sources: [
      { label: 'HTML Living Standard', author: 'WHATWG', note: 'Norma de HTML em evolução contínua.' },
      { label: 'HTML — MDN Web Docs', author: 'Mozilla', note: 'Explicações e exemplos.' },
      { label: 'WAI Tutorials', author: 'W3C', note: 'Padrões de acesso inclusivo.' }
    ],
    lab: { workspacePath: laboratory, editorLabel: 'Abrir laboratório da Aula ' + num + ' no VS Code Web' },
    slides
  };
}
