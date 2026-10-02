import { BookOpen, Clock3, Layers3, Play, Sparkles } from 'lucide-react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { catalog, findLesson } from './content/catalog';
import { DeckPlayer } from './components/deck/DeckPlayer';

function CatalogPage() {
  return (
    <main className="catalog-page">
      <header className="catalog-hero">
        <div className="catalog-brand">
          <div className="brand-mark">&lt;CODE/&gt;</div>
          <span>Senac Labs</span>
        </div>
        <p className="eyebrow">Material didático escalável</p>
        <h1>Curso → UC → módulo → aula</h1>
        <p>
          Aulas de 4 horas com navegação web e exportação direta para PDF e PPTX.
          O conteúdo nasce uma vez e é reutilizado nos três formatos.
        </p>
      </header>

      <section className="catalog-content">
        {catalog.map((course) => (
          <article className="course-card" key={course.slug}>
            <div className="course-heading">
              <div>
                <span className="course-kicker">Curso</span>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>
              <Layers3 size={36} />
            </div>

            <div className="uc-grid">
              {course.ucs.map((uc) => (
                <section className="uc-card" key={uc.slug}>
                  <div className="uc-heading">
                    <BookOpen size={20} />
                    <div>
                      <span>Unidade curricular</span>
                      <h3>{uc.title}</h3>
                    </div>
                  </div>
                  <p>{uc.description}</p>

                  <div className="module-list">
                    {uc.modules.map((module) => (
                      <div className="module-card" key={module.slug}>
                        <div className="module-meta">
                          <strong>{module.title}</strong>
                          <span className={'status status-' + module.status}>
                            {module.status === 'active' ? 'Em produção' : 'Planejado'}
                          </span>
                        </div>
                        <p>{module.description}</p>

                        {module.lessons.map((lesson) => (
                          <Link
                            className="lesson-link"
                            key={lesson.id}
                            to={
                              '/curso/' + course.slug +
                              '/uc/' + uc.slug +
                              '/aula/' + lesson.slug
                            }
                          >
                            <div>
                              <span>Aula {String(lesson.number).padStart(2, '0')}</span>
                              <strong>{lesson.shortTitle}</strong>
                              <small><Clock3 size={14} /> {lesson.durationMinutes / 60}h</small>
                            </div>
                            <Play size={20} fill="currentColor" />
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
      </section>

      <footer className="catalog-footer">
        <Sparkles size={16} />
        Identidade baseada no Design System Senac RN: Rubik, Azul Senac e paleta Senac Labs.
      </footer>
    </main>
  );
}

function LessonRoute() {
  const { courseSlug = '', ucSlug = '', lessonSlug = '' } = useParams();
  const result = findLesson(courseSlug, ucSlug, lessonSlug);

  if (!result) {
    return (
      <main className="not-found">
        <h1>Material não encontrado</h1>
        <Link to="/">Voltar ao catálogo</Link>
      </main>
    );
  }

  return <DeckPlayer lesson={result.lesson} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/curso/:courseSlug/uc/:ucSlug/aula/:lessonSlug" element={<LessonRoute />} />
      <Route path="*" element={<CatalogPage />} />
    </Routes>
  );
}
