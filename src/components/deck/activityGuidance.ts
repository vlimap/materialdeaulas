import type { LessonDefinition, Slide } from '../../types/course';

/**
 * Public activities never start cold: pair each interaction with an explanation
 * grounded in an actual concept from the same lesson.
 *
 * Keeping the guide inside the activity slide preserves navigation, exported
 * decks, lesson IDs and the 20-slide contracts used by existing courses.
 */
export type ActivityGuidance = {
  topic: string;
  explanation: string;
};

export const guidedKinds = [
  'challenge', 'exercise', 'missions', 'lab',
  'logic-playground', 'problem-playground', 'algorithm-lab',
  'algorithm-visualization', 'truth-table', 'javascript-console'
] as const;

export function needsActivityGuidance(slide: Slide): boolean {
  return (guidedKinds as readonly string[]).includes(slide.kind);
}

function isConcept(slide: Slide): slide is Extract<Slide, { kind: 'statement' }> {
  return slide.kind === 'statement' &&
    /conceito|fundamento|entenda|explica|aprenda|primeiro conceito|observe|atenção|síntese/i.test(slide.eyebrow ?? '');
}

function isExplanation(slide: Slide): slide is Extract<Slide, { kind: 'statement' }> {
  return slide.kind === 'statement' && !!slide.lead.trim() && !!slide.detail.trim();
}

export function getActivityGuidance(lesson: LessonDefinition, index: number): ActivityGuidance | null {
  const current = lesson.slides[index];
  if (!current || !needsActivityGuidance(current)) return null;
  const slides = lesson.slides;

  // An initial diagnostic often appears BEFORE the first teaching concept.
  // Show the first concept first rather than relying on the scenario prompt alone.
  const firstConcept = slides.findIndex(isConcept);
  const isEarlyDiagnostic = current.kind === 'challenge' && firstConcept > index;
  let source: Extract<Slide, { kind: 'statement' }> | undefined;

  if (isEarlyDiagnostic) {
    source = slides[firstConcept] as Extract<Slide, { kind: 'statement' }>;
  } else {
    for (let i = index - 1; i >= 0; i--) {
      if (isConcept(slides[i])) {
        source = slides[i] as Extract<Slide, { kind: 'statement' }>;
        break;
      }
    }
  }
  if (!source) {
    source = slides.slice(0, index).reverse().find(isExplanation)
      ?? slides.slice(index + 1).find(isConcept)
      ?? slides.slice(index + 1).find(isExplanation);
  }
  if (source) {
    return {
      topic: source.title,
      explanation: [source.lead.trim(), source.detail.trim()].filter(Boolean).join(' ')
    };
  }
  // A course can contain legacy isolated interactive slides. Never remove its
  // orientation entirely; include the lesson's subject and learning goal.
  return {
    topic: lesson.shortTitle,
    explanation: lesson.objectives[0] ?? lesson.title
  };
}
