import { useState, type SyntheticEvent } from 'react';
import { ExternalLink, RotateCcw } from 'lucide-react';
import type { Slide } from '../../types/course';
import vlimapAvatar from '../../brand/vlimap-avatar.png';
import htmlContentHierarchyVisual from '../../assets/lessons/html/aula-02/content-hierarchy.svg';
import htmlLinksNetworkVisual from '../../assets/lessons/html/aula-02/links-network.svg';
import htmlAltFallbackVisual from '../../assets/lessons/html/aula-02/alt-fallback.svg';
import htmlTextSemanticsVisual from '../../assets/lessons/html/aula-02/text-semantics.svg';
import htmlArticleAnatomyVisual from '../../assets/lessons/html/aula-02/article-anatomy.svg';

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

function stopDeckGesture(event: SyntheticEvent) {
  event.stopPropagation();
}

function LiveLab({ slide }: { slide: Extract<Slide, { kind: 'lab' }> }) {
  const [code, setCode] = useState(slide.starterCode);

  return (
    <div
      className="live-lab"
      onPointerDown={stopDeckGesture}
      onPointerUp={stopDeckGesture}
      onClick={stopDeckGesture}
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

function Challenge({ slide }: { slide: Extract<Slide, { kind: 'challenge' }> }) {
  const [selected, setSelected] = useState<number | null>(null);
  const correct = selected === slide.answerIndex;

  return (
    <div
      className="micro-challenge"
      onPointerDown={stopDeckGesture}
      onPointerUp={stopDeckGesture}
      onClick={stopDeckGesture}
    >
      <p className="micro-challenge-prompt">{slide.prompt}</p>
      <div className="micro-challenge-options">
        {slide.options.map((option, index) => {
          const isSelected = selected === index;
          const isAnswer = selected !== null && index === slide.answerIndex;
          const stateClass = isAnswer ? ' is-correct' : isSelected ? ' is-wrong' : '';

          return (
            <button
              type="button"
              key={option.label + index}
              className={'micro-challenge-option' + stateClass}
              onClick={() => setSelected(index)}
              aria-pressed={isSelected}
            >
              <span className="micro-challenge-index">{String.fromCharCode(65 + index)}</span>
              <span>
                <strong>{option.label}</strong>
                {option.code && <code>{option.code}</code>}
              </span>
            </button>
          );
        })}
      </div>

      <div className={'micro-challenge-feedback' + (selected === null ? '' : ' is-visible')} role="status" aria-live="polite">
        {selected === null ? 'Escolha uma opção.' : (
          <>
            <strong>{correct ? 'Isso.' : 'Quase.'}</strong>
            <span>{slide.explanation}</span>
          </>
        )}
      </div>
    </div>
  );
}

function Missions({ slide }: { slide: Extract<Slide, { kind: 'missions' }> }) {
  const [selected, setSelected] = useState(0);

  return (
    <div
      className="missions-layout"
      onPointerDown={stopDeckGesture}
      onPointerUp={stopDeckGesture}
      onClick={stopDeckGesture}
    >
      <p className="missions-intro">{slide.intro}</p>
      <div className="mission-options" role="group" aria-label="Escolha uma missão">
        {slide.options.map((option, index) => (
          <button
            type="button"
            key={option.title}
            className={selected === index ? 'is-selected' : ''}
            onClick={() => setSelected(index)}
            aria-pressed={selected === index}
          >
            <span>Missão {String.fromCharCode(65 + index)}</span>
            <strong>{option.title}</strong>
            <small>{option.detail}</small>
            {option.twist && <em>{option.twist}</em>}
          </button>
        ))}
      </div>
      <aside className="mission-requirements">
        <span>Todos precisam entregar</span>
        <ul>
          {slide.requirements.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </aside>
    </div>
  );
}

function Visual({ name }: { name: Extract<Slide, { kind: 'visual' }>['visual'] }) {
  const [puzzleStep, setPuzzleStep] = useState(0);

  if (name === 'html-content-hierarchy-svg') {
    return (
      <div className="lesson-svg-visual">
        <img
          src={htmlContentHierarchyVisual}
          alt="Hierarquia visual com h1, seções h2 e subseções h3 organizadas como árvore de conteúdo"
        />
      </div>
    );
  }

  if (name === 'html-links-network-svg') {
    return (
      <div className="lesson-svg-visual">
        <img
          src={htmlLinksNetworkVisual}
          alt="Rede de documentos conectados por hiperlinks, com pulsos percorrendo diferentes caminhos"
        />
      </div>
    );
  }

  if (name === 'html-alt-fallback-svg') {
    return (
      <div className="lesson-svg-visual">
        <img
          src={htmlAltFallbackVisual}
          alt="Comparação entre imagem informativa, imagem indisponível com texto alternativo e imagem decorativa"
        />
      </div>
    );
  }

  if (name === 'html-text-semantics-svg') {
    return (
      <div className="lesson-svg-visual">
        <img
          src={htmlTextSemanticsVisual}
          alt="Mapa visual de elementos HTML de texto organizados por significado, como importância, ênfase, edição, notação e código"
        />
      </div>
    );
  }

  if (name === 'html-article-anatomy-svg') {
    return (
      <div className="lesson-svg-visual">
        <img
          src={htmlArticleAnatomyVisual}
          alt="Estrutura visual de um artigo HTML com título, parágrafos, citação e bloco de código"
        />
      </div>
    );
  }

  if (name === 'sdlc-four-activities') {
    const activities = [
      ['01', 'Especificação', 'o que e sob quais restrições'],
      ['02', 'Desenvolvimento', 'projetar e construir'],
      ['03', 'Validação', 'conferir e testar'],
      ['04', 'Evolução', 'mudar para continuar útil']
    ];

    return (
      <div className="sdlc-orbit" aria-label="Quatro atividades fundamentais do processo de software">
        <div className="sdlc-orbit-ring" aria-hidden="true"><span /></div>
        <div className="sdlc-orbit-center"><strong>SOFTWARE</strong><small>produto vivo</small></div>
        {activities.map(([number, title, detail], index) => (
          <div key={title} className={'sdlc-orbit-node node-' + (index + 1)}>
            <span>{number}</span>
            <strong>{title}</strong>
            <small>{detail}</small>
          </div>
        ))}
      </div>
    );
  }

  if (name === 'sdlc-waterfall') {
    const stages = [
      ['01', 'Requisitos'],
      ['02', 'Projeto'],
      ['03', 'Implementação'],
      ['04', 'Integração + testes'],
      ['05', 'Operação + manutenção']
    ];

    return (
      <div className="sdlc-waterfall" aria-label="Modelo em cascata redesenhado">
        <div className="sdlc-waterfall-path" aria-hidden="true"><span /></div>
        {stages.map(([number, label], index) => (
          <div
            key={label}
            className="sdlc-waterfall-step"
            style={{ '--sdlc-step': index } as React.CSSProperties}
          >
            <span>{number}</span>
            <strong>{label}</strong>
          </div>
        ))}
        <div className="sdlc-waterfall-feedback">feedback entre estágios ↶</div>
      </div>
    );
  }

  if (name === 'sdlc-incremental') {
    return (
      <div className="sdlc-incremental" aria-label="Desenvolvimento incremental com atividades intercaladas">
        <div className="sdlc-incremental-activities">
          <div><span>01</span><strong>Especificação</strong></div>
          <div><span>02</span><strong>Desenvolvimento</strong></div>
          <div><span>03</span><strong>Validação</strong></div>
        </div>
        <div className="sdlc-incremental-exchange" aria-hidden="true">
          <i /><i /><i />
        </div>
        <div className="sdlc-incremental-versions">
          <div><span>v1</span><strong>versão inicial</strong></div>
          <div><span>v2</span><strong>versão intermediária</strong></div>
          <div><span>v3</span><strong>versão útil ampliada</strong></div>
        </div>
      </div>
    );
  }

  if (name === 'sdlc-feedback') {
    const nodes = ['Especificar', 'Projetar', 'Construir', 'Validar', 'Operar'];
    return (
      <div className="sdlc-feedback" aria-label="Fluxo de desenvolvimento com retorno de feedback">
        <div className="sdlc-feedback-flow">
          {nodes.map((node, index) => (
            <div className="sdlc-feedback-wrap" key={node}>
              <div className="sdlc-feedback-node"><span>{String(index + 1).padStart(2, '0')}</span><strong>{node}</strong></div>
              {index < nodes.length - 1 && <b aria-hidden="true">→</b>}
            </div>
          ))}
        </div>
        <div className="sdlc-feedback-return" aria-hidden="true">
          <span>uso real · erros · novas necessidades · mudança</span>
          <i>← feedback ← feedback ← feedback ←</i>
        </div>
      </div>
    );
  }

  if (name === 'sdlc-artifacts') {
    const artifacts = [
      ['Necessidade', 'visão'],
      ['Requisitos', 'especificação'],
      ['Projeto', 'modelos'],
      ['Código', 'versão'],
      ['Teste', 'evidência'],
      ['Operação', 'feedback']
    ];

    return (
      <div className="sdlc-artifacts" aria-label="Rastreabilidade de artefatos ao longo do ciclo">
        {artifacts.map(([phase, artifact], index) => (
          <div className="sdlc-artifact-wrap" key={phase}>
            <div className="sdlc-artifact-card">
              <span>{phase}</span>
              <strong>{artifact}</strong>
            </div>
            {index < artifacts.length - 1 && <b aria-hidden="true">→</b>}
          </div>
        ))}
      </div>
    );
  }

  if (name === 'sdlc-models') {
    return (
      <div className="sdlc-models" aria-label="Comparação visual entre modelos de processo">
        <div className="sdlc-model-card">
          <span>CASCATA</span>
          <div className="mini-waterfall" aria-hidden="true"><i/><i/><i/><i/></div>
          <strong>estágios visíveis</strong>
          <small>bom quando requisitos são estáveis</small>
        </div>
        <div className="sdlc-model-card">
          <span>INCREMENTAL</span>
          <div className="mini-incremental" aria-hidden="true"><i/><i/><i/></div>
          <strong>versões + feedback</strong>
          <small>valor chega em partes</small>
        </div>
        <div className="sdlc-model-card">
          <span>RISCO / ITERAÇÃO</span>
          <div className="mini-spiral" aria-hidden="true"><i/></div>
          <strong>decisões por risco</strong>
          <small>processo adapta-se ao contexto</small>
        </div>
      </div>
    );
  }

  if (name === 'web-birth') {
    return (
      <div className="web-birth" aria-label="Documentos isolados passam a ser conectados por links e formam a Web">
        <div className="web-birth-doc doc-one">Documento A</div>
        <div className="web-birth-doc doc-two">Documento B</div>
        <div className="web-birth-doc doc-three">Documento C</div>
        <svg viewBox="0 0 900 420" aria-hidden="true">
          <path d="M210 145 C360 70 520 75 680 150" />
          <path d="M210 145 C350 255 495 300 650 280" />
          <path d="M680 150 C690 205 675 245 650 280" />
        </svg>
        <div className="web-birth-label">
          <span>documentos isolados</span>
          <strong>WEB</strong>
          <small>informação conectada</small>
        </div>
      </div>
    );
  }

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

  if (name === 'semantic-puzzle') {
    const regions = ['<header>', '<nav>', '<main>', '<section>', '<footer>'];
    return (
      <div
        className="semantic-puzzle"
        onPointerDown={stopDeckGesture}
        onPointerUp={stopDeckGesture}
        onClick={stopDeckGesture}
      >
        <div className="semantic-puzzle-page" aria-label="Página sendo montada com regiões semânticas">
          {regions.map((region, index) => (
            <div key={region} className={index < puzzleStep ? 'is-revealed' : ''}>
              <span>{index < puzzleStep ? region : '?'}</span>
            </div>
          ))}
        </div>
        <div className="semantic-puzzle-controls">
          <p>{puzzleStep === 0 ? 'Qual região vem primeiro?' : puzzleStep < regions.length ? 'E agora, qual é a próxima?' : 'Mapa lógico completo.'}</p>
          <button type="button" onClick={() => setPuzzleStep((current) => current >= regions.length ? 0 : current + 1)}>
            {puzzleStep >= regions.length ? 'Recomeçar' : 'Revelar próxima'}
          </button>
        </div>
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
      ['1', 'Navegador', 'GET /index.html'],
      ['2', 'Rede', 'transporta o pedido'],
      ['3', 'Servidor', 'localiza o recurso'],
      ['4', 'Resposta', '<h1>Olá!</h1>'],
      ['5', 'Tela', 'a página aparece']
    ];

    return (
      <div className="request-flow request-flow-animated">
        <div className="flow-packet" aria-hidden="true">&lt;h1&gt;</div>
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
      <div className="technology-stages" aria-label="A mesma página em HTML, depois com CSS e por fim com JavaScript">
        <div className="stage-browser stage-html">
          <div className="stage-browser-bar"><i /><i /><i /><span>HTML</span></div>
          <div className="stage-page">
            <h3>Minha página</h3>
            <p>Conteúdo organizado.</p>
            <button type="button" tabIndex={-1}>Abrir menu</button>
          </div>
          <strong>estrutura</strong>
          <small>Funciona. Bonita é outra conversa.</small>
        </div>
        <div className="stage-arrow">→</div>
        <div className="stage-browser stage-css">
          <div className="stage-browser-bar"><i /><i /><i /><span>+ CSS</span></div>
          <div className="stage-page">
            <h3>Minha página</h3>
            <p>Conteúdo organizado.</p>
            <button type="button" tabIndex={-1}>Abrir menu</button>
          </div>
          <strong>apresentação</strong>
          <small>Agora existe aparência.</small>
        </div>
        <div className="stage-arrow">→</div>
        <div className="stage-browser stage-js">
          <div className="stage-browser-bar"><i /><i /><i /><span>+ JS</span></div>
          <div className="stage-page">
            <h3>Minha página</h3>
            <p>Conteúdo organizado.</p>
            <button type="button" tabIndex={-1}>Menu aberto ✓</button>
          </div>
          <strong>comportamento</strong>
          <small>Agora a interface reage.</small>
        </div>
      </div>
    );
  }

  if (name === 'document-tree') {
    return (
      <div className="tree tree-growing">
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

  if (name === 'head-impact') {
    return (
      <div className="head-impact">
        <div className="head-impact-item">
          <code>&lt;title&gt;</code>
          <div className="mock-browser-tab">Minha primeira página ×</div>
          <span>nome na aba</span>
        </div>
        <div className="head-impact-item">
          <code>charset="UTF-8"</code>
          <div className="charset-demo"><del>ProgramaÃ§Ã£o</del><strong>Programação</strong></div>
          <span>caracteres corretos</span>
        </div>
        <div className="head-impact-item">
          <code>viewport</code>
          <div className="viewport-demo"><i className="viewport-bad">desktop espremido</i><i className="viewport-good">mobile</i></div>
          <span>largura adequada</span>
        </div>
        <div className="head-impact-item">
          <code>description</code>
          <div className="search-snippet"><strong>Minha página</strong><small>Uma apresentação curta e clara.</small></div>
          <span>resumo do documento</span>
        </div>
      </div>
    );
  }

  if (name === 'alt-demo') {
    return (
      <div className="alt-demo">
        <div className="alt-card">
          <div className="alt-picture" aria-hidden="true" />
          <code>alt="Cachorro caramelo sentado"</code>
          <span>imagem com significado</span>
        </div>
        <div className="alt-card">
          <div className="alt-broken" aria-hidden="true">imagem.jpg ✕</div>
          <code>alt="Cachorro caramelo sentado"</code>
          <span>o texto continua informando</span>
        </div>
        <div className="alt-card">
          <div className="alt-decoration" aria-hidden="true">✦ ✦ ✦</div>
          <code>alt=""</code>
          <span>decoração não precisa ser anunciada</span>
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

        {slide.kind === 'code' && (() => {
          const lineCount = slide.code.split('\n').length;
          const densityClass =
            lineCount >= 34 ? ' is-very-dense' : lineCount >= 20 ? ' is-dense' : '';

          return (
          <div className={'code-layout' + densityClass}>
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
          );
        })()}

        {slide.kind === 'anatomy' && (
          <div className="anatomy-layout anatomy-animated">
            <div className="anatomy-code">{slide.code}</div>
            <div className="anatomy-labels">
              {slide.labels.map((item, index) => (
                <div key={item.token} style={{ animationDelay: index * 180 + 'ms' }}>
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

        {slide.kind === 'lab' && <LiveLab slide={slide} />}

        {slide.kind === 'challenge' && <Challenge slide={slide} />}

        {slide.kind === 'missions' && <Missions slide={slide} />}

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
        <a
          className="slide-project-url"
          href="https://github.com/vlimap/materialdeaulas"
          target="_blank"
          rel="noreferrer"
        >
          github.com/vlimap/materialdeaulas
        </a>
        <span>{slide.id}</span>
      </footer>
    </article>
  );
}
