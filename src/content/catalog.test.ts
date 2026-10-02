import { describe, expect, it } from 'vitest';
import { catalog, findLesson } from './catalog';

describe('catálogo de materiais', () => {
  it('mantém a Aula 01 com duração de 4 horas', () => {
    const lesson = findLesson(
      'programador-full-stack',
      'desenvolvimento-front-end',
      'aula-01-como-a-web-funciona'
    );

    expect(lesson?.lesson.durationMinutes).toBe(240);
  });

  it('não permite ids duplicados nos slides da Aula 01', () => {
    const lesson = catalog[0].ucs[0].modules[0].lessons[0];
    const ids = lesson.slides.map((slide) => slide.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it('mantém o material progressivo em HTML/CSS, JavaScript e React', () => {
    const modules = catalog[0].ucs[0].modules.map((module) => module.slug);

    expect(modules).toEqual(['html-css', 'javascript', 'react']);
  });
});
