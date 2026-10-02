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

function Visual({ name }: { name: Extract<Slide, { kind: 'visual' }>['visual'] }) {
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
