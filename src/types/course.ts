export type Tone = 'blue' | 'orange' | 'innovation' | 'green' | 'neutral';

export type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};

export type CardItem = {
  title: string;
  detail: string;
  kicker?: string;
  tone?: Tone;
};

export type ReferenceItem = {
  label: string;
  url: string;
};

export type LessonSource = {
  label: string;
  author?: string;
  edition?: string;
  chapters?: string[];
  pages?: string;
  note?: string;
};

type BaseSlide = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  note?: string;
};

export type Slide =
  | (BaseSlide & {
      kind: 'cover';
      badge: string;
      duration: string;
    })
  | (BaseSlide & {
      kind: 'statement';
      lead: string;
      detail: string;
      chips?: string[];
    })
  | (BaseSlide & {
      kind: 'timeline';
      items: TimelineItem[];
    })
  | (BaseSlide & {
      kind: 'visual';
      visual:
        | 'web-internet'
        | 'request-flow'
        | 'html-css-js'
        | 'document-tree'
        | 'box-model'
        | 'before-after'
        | 'hypertext-map'
        | 'semantic-page'
        | 'web-birth'
        | 'head-impact'
        | 'alt-demo'
        | 'html-content-hierarchy-svg'
        | 'html-links-network-svg'
        | 'html-alt-fallback-svg'
        | 'html-text-semantics-svg'
        | 'html-article-anatomy-svg'
        | 'semantic-puzzle'
        | 'sdlc-four-activities'
        | 'sdlc-waterfall'
        | 'sdlc-incremental'
        | 'sdlc-feedback'
        | 'sdlc-artifacts'
        | 'sdlc-models';
      caption?: string;
    })
  | (BaseSlide & {
      kind: 'cards';
      items: CardItem[];
    })
  | (BaseSlide & {
      kind: 'code';
      language: 'html' | 'css';
      code: string;
      bullets?: string[];
    })
  | (BaseSlide & {
      kind: 'anatomy';
      code: string;
      labels: Array<{ token: string; label: string }>;
    })
  | (BaseSlide & {
      kind: 'exercise';
      challenge: string;
      steps: string[];
      success: string[];
      timebox: string;
    })
  | (BaseSlide & {
      kind: 'checklist';
      items: string[];
      prompt?: string;
    })
  | (BaseSlide & {
      kind: 'lab';
      language: 'html' | 'css' | 'javascript';
      starterCode: string;
      instructions: string[];
      editorPath?: string;
    })
  | (BaseSlide & {
      kind: 'challenge';
      prompt: string;
      options: Array<{ label: string; code?: string }>;
      answerIndex: number;
      explanation: string;
    })
  | (BaseSlide & {
      kind: 'missions';
      intro: string;
      options: Array<{ title: string; detail: string; twist?: string }>;
      requirements: string[];
    })
  | (BaseSlide & {
      kind: 'references';
      items: ReferenceItem[];
    });

export type LessonDefinition = {
  id: string;
  status?: 'published' | 'planned';
  slug: string;
  number: number;
  title: string;
  shortTitle: string;
  durationMinutes: number;
  audience: string;
  ucSlug: string;
  objectives: string[];
  sources?: LessonSource[];
  visualPlan?: string[];
  lab?: {
    workspacePath: string;
    editorLabel?: string;
  };
  slides: Slide[];
};

export type ModuleDefinition = {
  slug: string;
  title: string;
  description: string;
  status: 'active' | 'planned';
  lessons: LessonDefinition[];
};

export type UcDefinition = {
  slug: string;
  title: string;
  description: string;
  modules: ModuleDefinition[];
};

export type CourseDefinition = {
  slug: string;
  title: string;
  description: string;
  ucs: UcDefinition[];
};
