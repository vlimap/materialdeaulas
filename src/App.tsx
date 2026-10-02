import { ArrowLeft, ArrowRight, BookOpen, Clock3, Github, GitPullRequest, Layers3, Play, Search, X } from 'lucide-react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useState } from 'react';
import { catalog, findLesson, technologyCourses } from './content/catalog';
import { DeckPlayer } from './components/deck/DeckPlayer';
import vlimapAvatar from './brand/vlimap-avatar.png';
import { getTechnologyIcon } from './brand/technologyIcons';

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
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const [courseQuery, setCourseQuery] = useState('');
  const technologies = technologyCourses;

  const normalizedQuery = courseQuery
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();

  const visibleTechnologies = normalizedQuery
    ? technologies.filter((technology) =>
        technology.title
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .includes(normalizedQuery)
      )
    : technologies;

  const selected = technologies.find((technology) => technology.slug === selectedTechnology);
    const selectedModule = selected?.ucs.flatMap((uc) => uc.modules)[0];
    const lessons = selectedModule?.lessons ?? [];
    const rows = lessons.length > 0
      ? lessons.map((lesson) => ({ label: 'Aula ' + String(lesson.number).padStart(2, '0') + ' · ' + lesson.shortTitle, href: '/curso/' + (selected?.slug ?? '') + '/uc/' + (selected?.ucs[0].slug ?? '') + '/aula/' + lesson.slug }))
      : [{ label: 'Aula 01 · Em preparação', href: '/curso/' + (selected?.slug ?? '') }, { label: 'Aula 02 · Em preparação', href: '/curso/' + (selected?.slug ?? '') }, { label: 'Aula 03 · Em preparação', href: '/curso/' + (selected?.slug ?? '') }];

  const tone = (slug: string) => slug.includes('react') ? 'react' : slug.includes('express') ? 'express' : slug.includes('python') ? 'python' : 'default';
  const groups = Array.from(new Set(visibleTechnologies.map((technology) => technology.description.split(' · ')[1])));

  return (
    <div className="home-shell">
      <BrandHeader dark />
      <main id="main-content" className="excalidraw-home">
        <section className="excalidraw-board" aria-label="Tecnologias disponíveis">
        {!selected ? <div className="technology-groups">
          <div className="course-search" role="search">
            <Search size={21} aria-hidden="true" />
            <input
              type="search"
              value={courseQuery}
              onChange={(event) => setCourseQuery(event.target.value)}
              placeholder="Buscar curso pelo nome"
              aria-label="Buscar curso pelo nome"
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

          {groups.map((group) => <section className="technology-group" id={'group-' + group.toLowerCase().replace(/[^a-z]+/g, '-')} key={group}>
            <h2>{group}</h2>
            <div className="technology-badges">
              {visibleTechnologies.filter((technology) => technology.description.endsWith(group)).map((technology) => (
                <button className="technology-badge" key={technology.slug} onClick={() => setSelectedTechnology(technology.slug)} aria-label={'Abrir curso de ' + technology.title} aria-pressed={selectedTechnology === technology.slug}>
                  {getTechnologyIcon(technology.slug) && <img src={getTechnologyIcon(technology.slug)} alt="" aria-hidden="true" />}<span>{technology.title}</span>
                </button>
              ))}
            </div>
          </section>)}

          {visibleTechnologies.length === 0 && (
            <div className="course-search-empty" role="status">
              Nenhum curso encontrado para <strong>“{courseQuery.trim()}”</strong>.
            </div>
          )}
        </div> : <div className="excalidraw-lessons">
          <button className={'excalidraw-selected-tech tech-' + tone(selected.slug)} onClick={() => setSelectedTechnology(null)} aria-label="Voltar para todas as tecnologias">
            {getTechnologyIcon(selected.slug) && <img src={getTechnologyIcon(selected.slug)} alt="" aria-hidden="true" />}
          </button>
          <strong className="excalidraw-selected-label">{selected.title}</strong>
          <div className="excalidraw-lesson-list">
            {rows.map((row) => <Link className="excalidraw-lesson" key={row.label} to={row.href}><span>{row.label}</span><span>→</span></Link>)}
          </div>
        </div>}
        </section>
      </main>
    </div>
  );
}

function CoursePage() {
  const { courseSlug = '' } = useParams();
  const course = allCourses.find((item) => item.slug === courseSlug);

  if (!course) return <main id="main-content" className="not-found"><h1>Trilha não encontrada</h1><Link to="/">Voltar ao início</Link></main>;

  return (
    <main id="main-content" className="catalog-page course-page">
      <BrandHeader />
      <section className="catalog-content course-content">
        <Link className="back-link" to="/"><ArrowLeft size={17} /> Todas as tecnologias</Link>
        <div className="course-page-heading">
          <div>
            <p className="eyebrow">Tecnologia</p>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
          </div>
          <Layers3 size={42} />
        </div>
        <div className="course-sections">
          {course.ucs.map((uc) => (
            <section className="course-section" key={uc.slug}>
              <div className="course-section-heading">
                <BookOpen size={20} />
                <div><span>Unidade curricular</span><h2>{uc.title}</h2></div>
              </div>
              <p>{uc.description}</p>
              {uc.modules.map((module) => (
                <div className="module-row" key={module.slug}>
                  <div className="module-row-heading">
                    <div><span>Módulo</span><h3>{module.title}</h3></div>
                    <span className={'status status-' + module.status}>{module.status === 'active' ? 'Disponível' : 'Em breve'}</span>
                  </div>
                  {module.lessons.length === 0 ? <p className="empty-module">Aulas desta trilha serão adicionadas em breve.</p> : module.lessons.map((lesson) => (
                    <Link className="lesson-link" key={lesson.id} to={'/curso/' + course.slug + '/uc/' + uc.slug + '/aula/' + lesson.slug}>
                      <div><span>Aula {String(lesson.number).padStart(2, '0')}</span><strong>{lesson.shortTitle}</strong><small><Clock3 size={14} /> {lesson.durationMinutes / 60}h · {lesson.audience}</small></div>
                      <span className="lesson-enter">Entrar <ArrowRight size={18} /></span>
                    </Link>
                  ))}
                </div>
              ))}
            </section>
          ))}
        </div>
      </section>
    </main>
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

  return <DeckPlayer lesson={result.lesson} />;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo principal</a>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/curso/:courseSlug" element={<CoursePage />} />
        <Route path="/curso/:courseSlug/uc/:ucSlug/aula/:lessonSlug" element={<LessonRoute />} />
        <Route path="*" element={<CatalogPage />} />
      </Routes>
    </>
  );
}
