import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent
} from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock3,
  Code2,
  Download,
  Expand,
  Home,
  List,
  LoaderCircle,
  Pause,
  Play,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CourseLessonNavigationItem } from '../../content/catalog';
import type { LessonDefinition, Slide } from '../../types/course';
import { exportLessonPdf, exportLessonPptx } from '../../lib/exportDeck';
import { SlideRenderer } from './SlideRenderer';

const STORY_BREAKPOINT = 620;
const DESKTOP_PLAYLIST_BREAKPOINT = 1180;

function storyDuration(slide: Slide) {
  switch (slide.kind) {
    case 'cover':
      return 9000;
    case 'statement':
      return 13000;
    case 'visual':
      return 15000;
    case 'timeline':
    case 'cards':
      return 18000;
    case 'anatomy':
      return 17000;
    case 'code':
      return 22000;
    case 'exercise':
    case 'checklist':
      return 24000;
    case 'references':
      return 18000;
    default:
      return 15000;
  }
}

type DeckPlayerProps = {
  lesson: LessonDefinition;
  courseTitle: string;
  courseHref: string;
  lessonNavigation: CourseLessonNavigationItem[];
};

export function DeckPlayer({
  lesson,
  courseTitle,
  courseHref,
  lessonNavigation
}: DeckPlayerProps) {
  const [index, setIndex] = useState(0);
  const [isStoryMode, setIsStoryMode] = useState(false);
  const [storyAutoPlay, setStoryAutoPlay] = useState(true);
  const [holdingStory, setHoldingStory] = useState(false);
  const [storyElapsed, setStoryElapsed] = useState(0);
  const [playlistOpen, setPlaylistOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [exportState, setExportState] = useState<null | {
    kind: 'PDF' | 'PPTX';
    current: number;
    total: number;
  }>(null);

  const pointerStart = useRef<{ x: number; y: number; at: number } | null>(null);
  const elapsedRef = useRef(0);
  const current = lesson.slides[index];
  const currentStoryDuration = storyDuration(current);

  const lessonPosition = lessonNavigation.findIndex((item) => item.id === lesson.id);
  const previousLesson =
    lessonPosition > 0 ? lessonNavigation[lessonPosition - 1] : null;
  const nextLesson =
    lessonPosition >= 0 && lessonPosition < lessonNavigation.length - 1
      ? lessonNavigation[lessonPosition + 1]
      : null;

  const progress = useMemo(
    () => ((index + 1) / lesson.slides.length) * 100,
    [index, lesson.slides.length]
  );

  const goTo = (nextIndex: number) => {
    const bounded = Math.min(Math.max(nextIndex, 0), lesson.slides.length - 1);
    setIndex(bounded);
    setStoryElapsed(0);
    elapsedRef.current = 0;
  };

  const go = (delta: number) => goTo(index + delta);

  useEffect(() => {
    setIndex(0);
    setStoryElapsed(0);
    elapsedRef.current = 0;
    setStoryAutoPlay(true);
    setPlaylistOpen(
      window.innerWidth >= DESKTOP_PLAYLIST_BREAKPOINT &&
        !document.fullscreenElement
    );
  }, [lesson.id]);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${STORY_BREAKPOINT}px)`);

    const syncMode = () => {
      setIsStoryMode(media.matches);
      if (media.matches) setPlaylistOpen(false);
    };

    syncMode();
    media.addEventListener('change', syncMode);

    return () => media.removeEventListener('change', syncMode);
  }, []);

  useEffect(() => {
    const syncFullscreen = () => {
      const active = Boolean(document.fullscreenElement);
      setIsFullscreen(active);
      if (active) setPlaylistOpen(false);
    };

    document.addEventListener('fullscreenchange', syncFullscreen);
    return () => document.removeEventListener('fullscreenchange', syncFullscreen);
  }, []);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches('input, textarea, select, [contenteditable="true"]')) return;

      if (event.key === 'Escape' && playlistOpen) {
        setPlaylistOpen(false);
        return;
      }

      if (event.key.toLowerCase() === 'l') {
        event.preventDefault();
        setPlaylistOpen((value) => !value);
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        goTo(index + 1);
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        goTo(index - 1);
      }

      if (event.key === 'Home') goTo(0);
      if (event.key === 'End') goTo(lesson.slides.length - 1);

      if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        if (document.fullscreenElement) document.exitFullscreen?.();
        else document.documentElement.requestFullscreen?.();
      }

      if (event.key.toLowerCase() === 'p' && isStoryMode) {
        event.preventDefault();
        setStoryAutoPlay((value) => !value);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [index, isStoryMode, lesson.slides.length, playlistOpen]);

  useEffect(() => {
    if (
      !isStoryMode ||
      !storyAutoPlay ||
      holdingStory ||
      playlistOpen ||
      current.kind === 'lab'
    ) {
      return;
    }

    let animationFrame = 0;
    const startedAt = performance.now() - elapsedRef.current;

    const tick = (now: number) => {
      const elapsed = Math.min(now - startedAt, currentStoryDuration);
      elapsedRef.current = elapsed;
      setStoryElapsed(elapsed);

      if (elapsed >= currentStoryDuration) {
        if (index < lesson.slides.length - 1) goTo(index + 1);
        else setStoryAutoPlay(false);
        return;
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [
    current.kind,
    currentStoryDuration,
    holdingStory,
    index,
    isStoryMode,
    lesson.slides.length,
    playlistOpen,
    storyAutoPlay
  ]);

  const storyProgress = Math.min((storyElapsed / currentStoryDuration) * 100, 100);

  const onStoryPointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (!isStoryMode || playlistOpen || event.button !== 0) return;

    pointerStart.current = {
      x: event.clientX,
      y: event.clientY,
      at: performance.now()
    };
    setHoldingStory(true);
  };

  const onStoryPointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    if (!isStoryMode || playlistOpen || !pointerStart.current) return;

    const started = pointerStart.current;
    pointerStart.current = null;
    setHoldingStory(false);

    const deltaX = event.clientX - started.x;
    const deltaY = event.clientY - started.y;
    const heldFor = performance.now() - started.at;

    if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY)) {
      go(deltaX < 0 ? 1 : -1);
      return;
    }

    if (Math.abs(deltaY) > 30 || heldFor >= 450) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const position = event.clientX - bounds.left;

    if (position < bounds.width * 0.34) go(-1);
    else go(1);
  };

  const cancelStoryPointer = () => {
    pointerStart.current = null;
    setHoldingStory(false);
  };

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

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.();
  };

  const closePlaylistAfterNavigation = () => {
    if (isStoryMode || window.innerWidth < DESKTOP_PLAYLIST_BREAKPOINT) {
      setPlaylistOpen(false);
    }
  };

  return (
    <main
      id="main-content"
      className={
        'deck-page' +
        (isStoryMode ? ' story-mode' : '') +
        (holdingStory ? ' story-holding' : '') +
        (playlistOpen ? ' lesson-playlist-open' : '') +
        (isFullscreen ? ' deck-fullscreen' : '')
      }
    >
      <div className="deck-toolbar">
        <Link
          to="/"
          className="toolbar-button"
          title="Voltar ao catálogo"
          aria-label="Voltar ao catálogo de materiais"
        >
          <Home size={18} />
          <span>Materiais</span>
        </Link>

        <div className="toolbar-title">
          <strong>{courseTitle}</strong>
          <span>
            Aula {String(lesson.number).padStart(2, '0')} · {lesson.shortTitle}
          </span>
        </div>

        <div className="toolbar-actions">
          <button
            className={'toolbar-button' + (playlistOpen ? ' is-active' : '')}
            onClick={() => setPlaylistOpen((value) => !value)}
            aria-expanded={playlistOpen}
            aria-controls="lesson-playlist"
            title="Abrir lista de aulas (L)"
            aria-label="Abrir lista de aulas"
          >
            <List size={18} />
            <span>Aulas</span>
          </button>

          {lesson.lab && (
            <a
              className="toolbar-button"
              href={'https://vscode.dev/github/vlimap/materialdeaulas/blob/main/' + lesson.lab.workspacePath}
              target="_blank"
              rel="noreferrer"
              aria-label={lesson.lab.editorLabel ?? 'Abrir atividade no VS Code Web'}
              title={lesson.lab.editorLabel ?? 'Abrir atividade no VS Code Web'}
            >
              <Code2 size={18} />
              <span>VS Code</span>
            </a>
          )}

          {isStoryMode && (
            <button
              className="toolbar-button icon-only story-autoplay-button"
              onClick={() => setStoryAutoPlay((value) => !value)}
              aria-label={storyAutoPlay ? 'Pausar avanço automático' : 'Retomar avanço automático'}
              title={storyAutoPlay ? 'Pausar Stories' : 'Reproduzir Stories'}
            >
              {storyAutoPlay ? <Pause size={18} /> : <Play size={18} />}
            </button>
          )}

          <button
            className="toolbar-button"
            onClick={() => runExport('PDF')}
            disabled={!!exportState}
            aria-label="Baixar aula em PDF"
          >
            <Download size={18} />
            <span>PDF</span>
          </button>

          <button
            className="toolbar-button"
            onClick={() => runExport('PPTX')}
            disabled={!!exportState}
            aria-label="Baixar aula em PowerPoint"
          >
            <Download size={18} />
            <span>PPTX</span>
          </button>

          <button
            className="toolbar-button icon-only"
            title="Alternar tela cheia (F)"
            aria-label="Alternar tela cheia"
            onClick={toggleFullscreen}
          >
            <Expand size={18} />
          </button>
        </div>
      </div>

      {isStoryMode && (
        <div className="story-progress" aria-hidden="true">
          {lesson.slides.map((slide, slideIndex) => {
            const width =
              slideIndex < index ? 100 : slideIndex === index ? storyProgress : 0;

            return (
              <span key={slide.id}>
                <i style={{ width: width + '%' }} />
              </span>
            );
          })}
        </div>
      )}

      {exportState && (
        <div className="export-toast" role="status" aria-live="polite">
          <LoaderCircle className="spin" size={18} />
          Gerando {exportState.kind}: {exportState.current}/{exportState.total}
        </div>
      )}

      <section
        className="deck-stage"
        aria-label="Apresentação"
        onPointerDown={onStoryPointerDown}
        onPointerUp={onStoryPointerUp}
        onPointerCancel={cancelStoryPointer}
        onPointerLeave={() => {
          if (holdingStory) cancelStoryPointer();
        }}
      >
        <div className="deck-slide-frame" key={current.id}>
          <SlideRenderer slide={current} />
        </div>
      </section>

      <div className="deck-controls">
        <button onClick={() => go(-1)} disabled={index === 0} aria-label="Slide anterior">
          <ArrowLeft />
        </button>
        <div className="deck-counter" aria-live="polite">
          <strong>{String(index + 1).padStart(2, '0')}</strong>
          <span>/ {String(lesson.slides.length).padStart(2, '0')}</span>
        </div>
        <button
          onClick={() => go(1)}
          disabled={index === lesson.slides.length - 1}
          aria-label="Próximo slide"
        >
          <ArrowRight />
        </button>
      </div>

      {playlistOpen && (
        <button
          type="button"
          className="lesson-playlist-backdrop"
          aria-label="Fechar lista de aulas"
          onClick={() => setPlaylistOpen(false)}
        />
      )}

      <aside
        id="lesson-playlist"
        className={'lesson-playlist' + (playlistOpen ? ' is-open' : '')}
        aria-label={'Aulas de ' + courseTitle}
        aria-hidden={!playlistOpen}
      >
        <header className="lesson-playlist-header">
          <div>
            <span>Curso</span>
            <strong>{courseTitle}</strong>
            <small>
              Aula {lessonPosition + 1} de {lessonNavigation.length}
            </small>
          </div>
          <button
            type="button"
            onClick={() => setPlaylistOpen(false)}
            aria-label="Fechar lista de aulas"
            title="Fechar lista"
          >
            <X size={19} />
          </button>
        </header>

        <Link className="lesson-playlist-course-link" to={courseHref}>
          <BookOpen size={17} />
          <span>Ver visão geral do curso</span>
          <ArrowRight size={16} />
        </Link>

        <div className="lesson-playlist-items">
          {lessonNavigation.map((item, itemIndex) => {
            const currentLesson = item.id === lesson.id;
            const number = String(item.number).padStart(2, '0');

            const body = (
              <>
                <span className="lesson-playlist-number">{number}</span>
                <span className="lesson-playlist-copy">
                  <strong>{item.shortTitle}</strong>
                  <small>
                    <Clock3 size={13} />
                    {item.durationMinutes / 60}h
                    {!item.published && <em>Em breve</em>}
                  </small>
                </span>
                {currentLesson && <span className="lesson-playlist-current">Atual</span>}
              </>
            );

            if (!item.published || currentLesson) {
              return (
                <div
                  className={
                    'lesson-playlist-item' +
                    (currentLesson ? ' is-current' : ' is-planned')
                  }
                  key={item.id}
                  aria-current={currentLesson ? 'page' : undefined}
                  aria-disabled={!item.published || undefined}
                >
                  {body}
                </div>
              );
            }

            return (
              <Link
                className="lesson-playlist-item"
                key={item.id}
                to={item.href}
                onClick={closePlaylistAfterNavigation}
                aria-label={
                  'Abrir Aula ' + number + ': ' + item.title +
                  ', posição ' + (itemIndex + 1) + ' de ' + lessonNavigation.length
                }
              >
                {body}
              </Link>
            );
          })}
        </div>

        <footer className="lesson-playlist-footer">
          <div className="lesson-sequence-status">
            <span>Próxima aula</span>
            {nextLesson ? (
              <>
                <strong>
                  {String(nextLesson.number).padStart(2, '0')} · {nextLesson.shortTitle}
                </strong>
                <small>{nextLesson.published ? 'Disponível' : 'Em breve'}</small>
              </>
            ) : (
              <strong>Fim da trilha</strong>
            )}
          </div>

          <div className="lesson-sequence-actions">
            {previousLesson?.published ? (
              <Link
                to={previousLesson.href}
                onClick={closePlaylistAfterNavigation}
                aria-label="Abrir aula anterior"
              >
                <ArrowLeft size={17} />
                Anterior
              </Link>
            ) : (
              <span className="is-disabled">
                <ArrowLeft size={17} />
                Anterior
              </span>
            )}

            {nextLesson?.published ? (
              <Link
                to={nextLesson.href}
                onClick={closePlaylistAfterNavigation}
                aria-label="Abrir próxima aula"
              >
                Próxima
                <ArrowRight size={17} />
              </Link>
            ) : (
              <span className="is-disabled">
                Próxima
                <ArrowRight size={17} />
              </span>
            )}
          </div>
        </footer>
      </aside>

      {isStoryMode && (
        <div className="story-hint" aria-hidden="true">
          <span>toque: avançar</span>
          <span>segure: pausar</span>
          <span>arraste: navegar</span>
        </div>
      )}

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
