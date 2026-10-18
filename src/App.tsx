import { ArrowLeft, ArrowRight, BookOpen, Clock3, Github, GitPullRequest, Layers3, Play, Search, Waypoints, X } from 'lucide-react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { searchCourseCatalog } from './lib/courseSearch';
import { catalog, findLesson, getCourseLessonNavigation, technologyCourseGroups, technologyCourses } from './content/catalog';
import { DeckPlayer } from './components/deck/DeckPlayer';
import vlimapAvatar from './brand/vlimap-avatar.png';
import { getTechnologyIcon } from './brand/technologyIcons';
import { SeoManager } from './seo/SeoManager';
import { RoadmapPage } from './components/roadmap/RoadmapPage';
import { FirstVisitRoadmapGuide } from './components/onboarding/FirstVisitRoadmapGuide';

const allCourses = [...catalog, ...technologyCourses];

function BrandHeader({ dark = false }: { dark?: boolean }) {
  return (
    <header className={'site-header' + (dark ? ' site-header-dark' : '')}>
      <Link className="site-brand" to="/" aria-label="Material de Aulas - início">
        <img src={vlimapAvatar} alt="" />
        <div><strong>Material de Aulas</strong><small>por Val Lima</small></div>
      </Link>
      <nav className="site-actions" aria-label="Links do projeto">
        <a className="site-action" href="https://github.com/vlimap/materialdeaulas" target="_blank" rel="noreferrer" aria-label="Abrir projeto no GitHub" title="Projeto no GitHub">
          <Github size={18} aria-hidden="true" /><span>Projeto</span>
        </a>
        <Link className="site-action" to="/roadmap" aria-label="Abrir roadmap de aprendizagem" title="Roadmap de aprendizagem">
          <Waypoints size={18} aria-hidden="true" /><span>Roadmap</span>
        </Link>
        <a className="site-action" href="https://github.com/vlimap/materialdeaulas/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer" aria-label="Ver como contribuir com o projeto" title="Como contribuir">
          <GitPullRequest size={18} aria-hidden="true" /><span>Contribuir</span>
        </a>
      </nav>
    </header>
  );
}

function CourseVisual() {
  return (
    <div className="course-visual" aria-hidden="true">
      <img src={vlimapAvatar} alt="" />
      <span className="course-visual-label">web · código · produto</span>
    </div>
  );
}

function CatalogPage() {
  const [courseQuery, setCourseQuery] = useState('');
  const searching = courseQuery.trim().length > 0;
  const results = useMemo(
    () => searchCourseCatalog(allCourses, courseQuery, 24),
    [courseQuery]
  );
  const courses = results.filter(result => result.kind === 'course');
  const lessons = results.filter(result => result.kind === 'lesson');

  return (
    <div className="home-shell">
      <BrandHeader dark />
      <main id="main-content" className="excalidraw-home">
        <section className="excalidraw-board" aria-label="Tecnologias disponíveis">
        <div className="technology-groups">
          <div className="course-search" role="search">
            <Search size={21} aria-hidden="true" />
            <input
              type="search"
              value={courseQuery}
              onChange={(event) => setCourseQuery(event.target.value)}
              placeholder="Buscar cursos, aulas ou assuntos (ex.: merge sort)"
              aria-label="Buscar cursos, aulas e assuntos"
              autoComplete="off"
            />
            {courseQuery && (
              <button
                type="button"
                className="course-search-clear"
                onClick={() => setCourseQuery('')}
                aria-label="Limpar busca"
                title="Limpar busca"
              >
                <X size={18} aria-hidden="true" />
              </button>
            )}
          </div>

          {searching ? (
            <div className="catalog-search-results" role="region" aria-label="Resultados da pesquisa">
              <p className="catalog-search-summary" role="status" aria-live="polite">
                {results.length > 0
                  ? results.length + (results.length === 24 ? ' ou mais resultados' : ' resultados') +
                    ' para “' + courseQuery.trim() + '”'
                  : 'Nenhum curso, aula ou assunto encontrado para “' + courseQuery.trim() + '”.'}
              </p>
              {courses.length > 0 && (
                <section className="catalog-results-section" aria-labelledby="search-course-title">
                  <h2 id="search-course-title">Cursos</h2>
                  <div className="catalog-result-list">
                    {courses.map(result => (
                      <Link className="catalog-result" key={result.href} to={result.href}>
                        <span className="catalog-result-kind">Curso</span>
                        <strong>{result.title}</strong>
                        <small>{result.detail}</small>
                        <ArrowRight size={17} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}
              {lessons.length > 0 && (
                <section className="catalog-results-section" aria-labelledby="search-lesson-title">
                  <h2 id="search-lesson-title">Aulas e assuntos</h2>
                  <div className="catalog-result-list">
                    {lessons.map(result => (
                      <Link className="catalog-result" key={result.href} to={result.href}>
                        <span className="catalog-result-kind">Aula · {result.courseTitle}</span>
                        <strong>{result.title}</strong>
                        <small>{result.detail}</small>
                        <ArrowRight size={17} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}
              {results.length === 0 && (
                <div className="course-search-empty">
                  Experimente o nome de um curso, uma técnica ou um assunto, como
                  “JavaScript”, “recursão”, “merge sort” ou “tabela verdade”.
                </div>
              )}
            </div>
          ) : (
            technologyCourseGroups.map(({ category, courses }) => <section
              className="technology-group"
              id={'group-' + category.toLocaleLowerCase('pt-BR').normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
              key={category}
            >
              <h2>{category}</h2>
              <div className="technology-badges">
                {courses.map(technology => (
                  <Link
                    className="technology-badge"
                    key={technology.slug}
                    to={'/curso/' + technology.slug}
                    aria-label={'Abrir curso de ' + technology.title}
                  >
                    {getTechnologyIcon(technology.slug)
                      ? <img src={getTechnologyIcon(technology.slug)} alt="" aria-hidden="true" />
                      : <Layers3 size={20} aria-hidden="true" />}
                    <span>{technology.title}</span>
                  </Link>
                ))}
              </div>
            </section>)
          )}
        </div>
        </section>
      </main>
    </div>
  );
}

function CoursePage() {
  const { courseSlug = '' } = useParams();
  const course = allCourses.find((item) => item.slug === courseSlug);

  if (!course) {
    return (
      <main id="main-content" className="not-found">
        <h1>Trilha não encontrada</h1>
        <Link to="/">Voltar ao início</Link>
      </main>
    );
  }

  const lessons = course.ucs.flatMap((uc) =>
    uc.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({
        lesson,
        ucSlug: uc.slug,
      }))
    )
  );

  const tone = (slug: string) =>
    slug.includes('react')
      ? 'react'
      : slug.includes('express')
        ? 'express'
        : slug.includes('python')
          ? 'python'
          : 'default';

  return (
    <div className="home-shell">
      <BrandHeader dark />
      <main id="main-content" className="excalidraw-home">
        <section className="excalidraw-board" aria-label={'Aulas de ' + course.title}>
          <div className="excalidraw-lessons">
            <Link
              className={'excalidraw-selected-tech tech-' + tone(course.slug)}
              to="/"
              aria-label="Voltar para todas as tecnologias"
              title="Voltar para todas as tecnologias"
            >
              {getTechnologyIcon(course.slug) && (
                <img src={getTechnologyIcon(course.slug)} alt="" aria-hidden="true" />
              )}
            </Link>

            <strong className="excalidraw-selected-label">{course.title}</strong>

            <div className="excalidraw-lesson-list">
              {lessons.length === 0 ? (
                <div className="excalidraw-lesson excalidraw-lesson-planned" aria-disabled="true">
                  <span>Aulas em preparação</span>
                  <span>Em breve</span>
                </div>
              ) : (
                lessons.map(({ lesson, ucSlug }) => {
                  const published = lesson.status !== 'planned' && lesson.slides.length > 0;
                  const label =
                    'Aula ' +
                    String(lesson.number).padStart(2, '0') +
                    ' · ' +
                    lesson.shortTitle;

                  if (!published) {
                    return (
                      <div
                        className="excalidraw-lesson excalidraw-lesson-planned"
                        key={lesson.id}
                        aria-disabled="true"
                      >
                        <span>{label}</span>
                        <span>Em breve</span>
                      </div>
                    );
                  }

                  return (
                    <Link
                      className="excalidraw-lesson"
                      key={lesson.id}
                      to={'/curso/' + course.slug + '/uc/' + ucSlug + '/aula/' + lesson.slug}
                    >
                      <span>{label}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function LessonRoute() {
  const { courseSlug = '', ucSlug = '', lessonSlug = '' } = useParams();
  const result = findLesson(courseSlug, ucSlug, lessonSlug);

  if (!result) {
    return (
      <main id="main-content" className="not-found">
        <h1>Material não encontrado</h1>
        <Link to="/">Voltar ao catálogo</Link>
      </main>
    );
  }

  return (
    <DeckPlayer
      lesson={result.lesson}
      courseTitle={result.course.title}
      courseHref={'/curso/' + result.course.slug}
      lessonNavigation={getCourseLessonNavigation(result.course.slug)}
    />
  );
}

export default function App() {
  return (
    <>
      <SeoManager />
      <FirstVisitRoadmapGuide />
      <a className="skip-link" href="#main-content">Pular para o conteúdo principal</a>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/roadmap" element={<div className="home-shell"><BrandHeader dark /><RoadmapPage /></div>} />
        <Route path="/curso/:courseSlug" element={<CoursePage />} />
        <Route path="/curso/:courseSlug/uc/:ucSlug/aula/:lessonSlug" element={<LessonRoute />} />
        <Route path="*" element={<CatalogPage />} />
      </Routes>
    </>
  );
}
