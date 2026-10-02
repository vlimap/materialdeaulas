import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Download, Expand, Home, LoaderCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LessonDefinition } from '../../types/course';
import { exportLessonPdf, exportLessonPptx } from '../../lib/exportDeck';
import { SlideRenderer } from './SlideRenderer';

export function DeckPlayer({ lesson }: { lesson: LessonDefinition }) {
  const [index, setIndex] = useState(0);
  const [exportState, setExportState] = useState<null | {
    kind: 'PDF' | 'PPTX';
    current: number;
    total: number;
  }>(null);

  const current = lesson.slides[index];
  const progress = useMemo(
    () => ((index + 1) / lesson.slides.length) * 100,
    [index, lesson.slides.length]
  );

  const go = (delta: number) => {
    setIndex((value) => Math.min(Math.max(value + delta, 0), lesson.slides.length - 1));
  };

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        go(1);
      }
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        go(-1);
      }
      if (event.key === 'Home') setIndex(0);
      if (event.key === 'End') setIndex(lesson.slides.length - 1);
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lesson.slides.length]);

  async function runExport(kind: 'PDF' | 'PPTX') {
    if (exportState) return;

    const update = (currentSlide: number, total: number) => {
      setExportState({ kind, current: currentSlide, total });
    };

    setExportState({ kind, current: 0, total: lesson.slides.length });

    try {
      if (kind === 'PDF') await exportLessonPdf(lesson, update);
      else await exportLessonPptx(lesson, update);
    } finally {
      setExportState(null);
    }
  }

  return (
    <main className="deck-page">
      <div className="deck-toolbar">
        <Link to="/" className="toolbar-button" title="Voltar ao catálogo">
          <Home size={18} />
          <span>Materiais</span>
        </Link>

        <div className="toolbar-title">
          <strong>Aula {String(lesson.number).padStart(2, '0')}</strong>
          <span>{lesson.shortTitle}</span>
        </div>

        <div className="toolbar-actions">
          <button className="toolbar-button" onClick={() => runExport('PDF')} disabled={!!exportState}>
            <Download size={18} />
            PDF
          </button>
          <button className="toolbar-button" onClick={() => runExport('PPTX')} disabled={!!exportState}>
            <Download size={18} />
            PPTX
          </button>
          <button
            className="toolbar-button icon-only"
            title="Tela cheia"
            onClick={() => document.documentElement.requestFullscreen?.()}
          >
            <Expand size={18} />
          </button>
        </div>
      </div>

      {exportState && (
        <div className="export-toast">
          <LoaderCircle className="spin" size={18} />
          Gerando {exportState.kind}: {exportState.current}/{exportState.total}
        </div>
      )}

      <section className="deck-stage" aria-label="Apresentação">
        <div className="deck-slide-frame" key={current.id}>
          <SlideRenderer slide={current} />
        </div>
      </section>

      <div className="deck-controls">
        <button onClick={() => go(-1)} disabled={index === 0} aria-label="Slide anterior">
          <ArrowLeft />
        </button>
        <div className="deck-counter">
          <strong>{String(index + 1).padStart(2, '0')}</strong>
          <span>/ {String(lesson.slides.length).padStart(2, '0')}</span>
        </div>
        <button onClick={() => go(1)} disabled={index === lesson.slides.length - 1} aria-label="Próximo slide">
          <ArrowRight />
        </button>
      </div>

      <div className="deck-progress" aria-hidden="true">
        <span style={{ width: progress + '%' }} />
      </div>

      <div className="export-stage" aria-hidden="true">
        {lesson.slides.map((slide) => (
          <div data-export-slide="true" key={slide.id}>
            <SlideRenderer slide={slide} />
          </div>
        ))}
      </div>
    </main>
  );
}
