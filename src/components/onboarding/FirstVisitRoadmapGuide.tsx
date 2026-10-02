import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Map, Route, Sparkles, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const STORAGE_KEY = 'materialdeaulas:roadmap-onboarding:v1';

export function FirstVisitRoadmapGuide() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === '/roadmap') {
      try {
        window.localStorage.setItem(STORAGE_KEY, 'seen');
      } catch {
        // The guide still works even when persistent storage is unavailable.
      }
      setOpen(false);
      return;
    }

    try {
      const seen = window.localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        const timer = window.setTimeout(() => setOpen(true), 450);
        return () => window.clearTimeout(timer);
      }
    } catch {
      const timer = window.setTimeout(() => setOpen(true), 450);
      return () => window.clearTimeout(timer);
    }
  }, [location.pathname]);

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'seen');
    } catch {
      // No-op: dismissal still applies to the current session.
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="roadmap-onboarding-backdrop" role="presentation">
      <section
        className="roadmap-onboarding"
        role="dialog"
        aria-modal="true"
        aria-labelledby="roadmap-onboarding-title"
        aria-describedby="roadmap-onboarding-description"
      >
        <button
          type="button"
          className="roadmap-onboarding-close"
          onClick={dismiss}
          aria-label="Fechar orientação inicial"
          title="Fechar"
        >
          <X size={19} />
        </button>

        <div className="roadmap-onboarding-copy">
          <span className="roadmap-onboarding-kicker">
            <Sparkles size={15} aria-hidden="true" />
            Primeira vez por aqui?
          </span>

          <h2 id="roadmap-onboarding-title">Veja o caminho antes de começar.</h2>

          <p id="roadmap-onboarding-description">
            O Roadmap mostra a sequência recomendada de estudos. Assim você entende
            o que vem antes, o que vem depois e onde cada tecnologia entra.
          </p>
        </div>

        <div className="roadmap-onboarding-path" aria-hidden="true">
          <div className="roadmap-onboarding-line">
            <span />
          </div>

          <div className="roadmap-onboarding-step is-active">
            <i><Map size={18} /></i>
            <strong>Escolha a trilha</strong>
            <small>Frontend, Backend, Full Stack...</small>
          </div>

          <div className="roadmap-onboarding-step">
            <i><Route size={18} /></i>
            <strong>Siga a sequência</strong>
            <small>Veja a ordem recomendada.</small>
          </div>

          <div className="roadmap-onboarding-step">
            <i><CheckCircle2 size={18} /></i>
            <strong>Abra a tecnologia</strong>
            <small>Entre no curso quando estiver pronto.</small>
          </div>
        </div>

        <div className="roadmap-onboarding-actions">
          <Link
            to="/roadmap"
            className="roadmap-onboarding-primary"
            onClick={dismiss}
          >
            Abrir Roadmap
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="roadmap-onboarding-secondary"
            onClick={dismiss}
          >
            Explorar por conta própria
          </button>
        </div>

        <p className="roadmap-onboarding-note">
          Você pode acessar o Roadmap novamente pelo menu superior.
        </p>
      </section>
    </div>
  );
}
