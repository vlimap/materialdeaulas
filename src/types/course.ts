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
      visual: 'web-internet' | 'request-flow' | 'html-css-js' | 'document-tree' | 'box-model' | 'before-after';
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
      kind: 'references';
      items: ReferenceItem[];
    });

export type LessonDefinition = {
  id: string;
  slug: string;
  number: number;
  title: string;
  shortTitle: string;
  durationMinutes: number;
  audience: string;
  ucSlug: string;
  objectives: string[];
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
