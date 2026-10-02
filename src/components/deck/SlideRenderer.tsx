import { useState } from 'react';
import { ExternalLink, RotateCcw } from 'lucide-react';
import type { Slide } from '../../types/course';
import vlimapAvatar from '../../brand/vlimap-avatar.png';

function Brand() {
  return (
    <div className="slide-brand" aria-hidden="true">
      <img src={vlimapAvatar} alt="" />
    </div>
  );
}

function Header({ slide }: { slide: Slide }) {
  return (
    <header className="slide-header">
      <div>
        {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
        <h2>{slide.title}</h2>
        {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
      </div>
    </header>
  );
}

const VSCODE_WEB_REPO = 'https://vscode.dev/github/vlimap/materialdeaulas';

function vscodeWebUrl(path?: string) {
  if (!path) return VSCODE_WEB_REPO;
  return VSCODE_WEB_REPO + '/blob/main/' + path.replace(/^\/+/, '');
}

function LiveLab({ slide }: { slide: Extract<Slide, { kind: 'lab' }> }) {
  const [code, setCode] = useState(slide.starterCode);

  const stopStoryGesture = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className="live-lab"
      onPointerDown={stopStoryGesture}
      onPointerUp={stopStoryGesture}
      onClick={stopStoryGesture}
    >
      <div className="live-lab-editor">
        <div className="live-lab-toolbar">
          <span>{slide.language}</span>
          <div>
            <button
              type="button"
              onClick={() => setCode(slide.starterCode)}
              title="Restaurar código inicial"
              aria-label="Restaurar código inicial"
            >
              <RotateCcw size={15} />
              <span>Restaurar</span>
            </button>
            <a
              href={vscodeWebUrl(slide.editorPath)}
              target="_blank"
              rel="noreferrer"
              title="Abrir código no VS Code para Web"
            >
              <ExternalLink size={15} />
              <span>VS Code Web</span>
            </a>
          </div>
        </div>
        <textarea
          value={code}
          onChange={(event) => setCode(event.target.value)}
          spellCheck={false}
          aria-label="Editor de código HTML"
        />
      </div>

      <div className="live-lab-preview">
        <div className="live-lab-preview-bar">
          <i /><i /><i />
          <span>prévia</span>
        </div>
        <iframe
          title="Prévia do código"
          srcDoc={code}
          sandbox={slide.language === 'javascript' ? 'allow-scripts' : ''}
        />
      </div>

      <aside className="live-lab-instructions">
        <strong>Faça agora</strong>
        <ol>
          {slide.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ol>
      </aside>
    </div>
  );
}

function Visual({ name }: { name: Extract<Slide, { kind: 'visual' }>['visual'] }) {
  if (name === 'hypertext-map') {
    return (
      <div className="hypertext-map" aria-label="Mapa animado de documentos conectados por hiperlinks">
        <svg viewBox="0 0 900 430" role="img" aria-hidden="true">
          <path className="hyper-link link-a" d="M225 120 C350 35 535 40 675 115" />
          <path className="hyper-link link-b" d="M225 120 C350 190 330 310 455 325" />
          <path className="hyper-link link-c" d="M675 115 C650 235 580 280 455 325" />
          <path className="hyper-link link-d" d="M455 325 C300 365 190 315 135 245" />
          <circle className="hyper-pulse pulse-a" cx="225" cy="120" r="8" />
          <circle className="hyper-pulse pulse-b" cx="675" cy="115" r="8" />
          <circle className="hyper-pulse pulse-c" cx="455" cy="325" r="8" />
        </svg>
        <div className="hyper-doc doc-a"><span>Documento A</span><small>uma ideia</small></div>
        <div className="hyper-doc doc-b"><span>Documento B</span><small>outra fonte</small></div>
        <div className="hyper-doc doc-c"><span>Documento C</span><small>referência</small></div>
        <div className="hyper-doc doc-d"><span>Documento D</span><small>novo caminho</small></div>
        <div className="hyper-cursor">↗</div>
      </div>
    );
  }

  if (name === 'semantic-page') {
    return (
      <div className="semantic-page-visual" aria-label="Estrutura semântica de uma página HTML">
        <div className="semantic-browser-bar"><i /><i /><i /><span>pagina.html</span></div>
        <div className="semantic-region semantic-header">&lt;header&gt;<small>identidade e introdução</small></div>
        <div className="semantic-region semantic-nav">&lt;nav&gt;<small>navegação</small></div>
        <div className="semantic-main">
          <div className="semantic-region semantic-main-label">&lt;main&gt;</div>
          <div className="semantic-region semantic-section-one">&lt;section&gt;<small>sobre</small></div>
          <div className="semantic-region semantic-section-two">&lt;section&gt;<small>conteúdo</small></div>
        </div>
        <div className="semantic-region semantic-footer">&lt;footer&gt;<small>encerramento</small></div>
      </div>
    );
  }

  if (name === 'web-internet') {
    return (
      <div className="visual-network">
        <div className="network-core">Internet<div>infraestrutura</div></div>
        <div className="network-service service-web">Web<div>HTTP + páginas</div></div>
        <div className="network-service service-email">E-mail<div>outro serviço</div></div>
        <div className="network-service service-other">Outros<div>jogos, APIs...</div></div>
      </div>
    );
  }

  if (name === 'request-flow') {
    const items = [
      ['1', 'Navegador', 'pede um recurso'],
      ['2', 'Internet', 'transporta dados'],
      ['3', 'Servidor', 'processa o pedido'],
      ['4', 'Resposta', 'HTML, CSS, imagens...'],
      ['5', 'Renderização', 'a página aparece']
    ];

    return (
      <div className="request-flow">
        {items.map(([n, title, detail], index) => (
          <div className="flow-wrap" key={title}>
            <div className="flow-card">
              <span>{n}</span>
              <strong>{title}</strong>
              <small>{detail}</small>
            </div>
            {index < items.length - 1 && <div className="flow-arrow">→</div>}
          </div>
        ))}
      </div>
    );
  }

  if (name === 'html-css-js') {
    return (
      <div className="technology-triad">
        <div className="tech-card html">
          <span>HTML</span>
          <strong>estrutura</strong>
          <p>O que existe e qual é o significado.</p>
        </div>
        <div className="tech-card css">
          <span>CSS</span>
          <strong>apresentação</strong>
          <p>Como o conteúdo é apresentado.</p>
        </div>
        <div className="tech-card js">
          <span>JS</span>
          <strong>comportamento</strong>
          <p>Como a interface reage e executa lógica.</p>
        </div>
      </div>
    );
  }

  if (name === 'document-tree') {
    return (
      <div className="tree">
        <div className="tree-root">&lt;html&gt;</div>
        <div className="tree-branches">
          <div className="tree-node">
            <strong>&lt;head&gt;</strong>
            <span>title</span>
            <span>meta</span>
            <span>link</span>
          </div>
          <div className="tree-node active">
            <strong>&lt;body&gt;</strong>
            <span>h1</span>
            <span>p</span>
            <span>a</span>
          </div>
        </div>
      </div>
    );
  }

  if (name === 'box-model') {
    return (
      <div className="box-model">
        <div className="box margin">
          margin
          <div className="box border">
            border
            <div className="box padding">
              padding
              <div className="box content">content</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="before-after">
      <div className="browser-mini before">
        <div className="browser-bar"><i /><i /><i /></div>
        <div className="browser-content">
          <h3>Meu negócio</h3>
          <p>Atendimento de segunda a sexta.</p>
          <a>Saiba mais</a>
        </div>
      </div>
      <div className="before-after-arrow">→</div>
      <div className="browser-mini after">
        <div className="browser-bar"><i /><i /><i /></div>
        <div className="browser-content">
          <span className="mini-label">NOVO</span>
          <h3>Meu negócio</h3>
          <p>Atendimento de segunda a sexta.</p>
          <a>Saiba mais</a>
        </div>
      </div>
    </div>
  );
}

export function SlideRenderer({ slide }: { slide: Slide }) {
  if (slide.kind === 'cover') {
    return (
      <article className="slide-canvas cover-slide">
        <div className="cover-grid" />
        <Brand />
        <div className="cover-content">
          <div className="cover-badge">{slide.badge} · {slide.duration}</div>
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          <p>{slide.subtitle}</p>
        </div>
        <div className="cover-code">&lt;html&gt;<br />&nbsp;&nbsp;&lt;body&gt;<br />&nbsp;&nbsp;&lt;/body&gt;<br />&lt;/html&gt;</div>
      </article>
    );
  }

  return (
    <article className={'slide-canvas slide-' + slide.kind}>
      <Brand />
      <Header slide={slide} />

      <div className="slide-body">
        {slide.kind === 'statement' && (
          <div className="statement-layout">
            <p className="statement-lead">{slide.lead}</p>
            <p className="statement-detail">{slide.detail}</p>
            {slide.chips && (
              <div className="chip-row">
                {slide.chips.map((chip) => <span key={chip}>{chip}</span>)}
              </div>
            )}
          </div>
        )}

        {slide.kind === 'timeline' && (
          <div className="timeline">
            {slide.items.map((item) => (
              <div className="timeline-item" key={item.year}>
                <div className="timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        )}

        {slide.kind === 'visual' && (
          <div className="visual-layout">
            <Visual name={slide.visual} />
            {slide.caption && <p className="visual-caption">{slide.caption}</p>}
          </div>
        )}

        {slide.kind === 'cards' && (
          <div className="cards-grid">
            {slide.items.map((item) => (
              <div className={'info-card tone-' + (item.tone ?? 'neutral')} key={item.title}>
                {item.kicker && <span className="card-kicker">{item.kicker}</span>}
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        )}

        {slide.kind === 'code' && (
          <div className="code-layout">
            <div className="code-window">
              <div className="code-topbar">
                <span /><span /><span />
                <b>{slide.language}</b>
              </div>
              <pre><code>{slide.code}</code></pre>
            </div>
            {slide.bullets && (
              <ul className="teaching-points">
                {slide.bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </div>
        )}

        {slide.kind === 'anatomy' && (
          <div className="anatomy-layout">
            <div className="anatomy-code">{slide.code}</div>
            <div className="anatomy-labels">
              {slide.labels.map((item) => (
                <div key={item.token}>
                  <code>{item.token}</code>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.kind === 'exercise' && (
          <div className="exercise-layout">
            <div className="exercise-main">
              <div className="timebox">{slide.timebox}</div>
              <h3>{slide.challenge}</h3>
              <ol>
                {slide.steps.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </div>
            <aside className="success-box">
              <span>Critérios de conclusão</span>
              <ul>
                {slide.success.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </aside>
          </div>
        )}

        {slide.kind === 'checklist' && (
          <div className="checklist-layout">
            <div className="checklist">
              {slide.items.map((item, index) => (
                <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>
              ))}
            </div>
            {slide.prompt && <p className="checkpoint-prompt">{slide.prompt}</p>}
          </div>
        )}

        {slide.kind === 'lab' && (
          <LiveLab slide={slide} />
        )}

        {slide.kind === 'references' && (
          <div className="references">
            {slide.items.map((item, index) => (
              <div key={item.url}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{item.label}</strong>
                  <small>{item.url}</small>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="slide-footer">
        <span>Val Lima · Material de Aulas</span>
        <span>{slide.id}</span>
      </footer>
    </article>
  );
}
