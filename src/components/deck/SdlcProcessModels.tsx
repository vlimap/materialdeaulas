import './SdlcProcessModels.css';

export type SdlcProcessModel =
  | 'sdlc-waterfall'
  | 'sdlc-incremental'
  | 'sdlc-v-model'
  | 'sdlc-spiral'
  | 'sdlc-prototyping'
  | 'sdlc-agile'
  | 'sdlc-models';

const waterfall = [
  { id: '01', title: 'Requisitos', detail: 'O que será construído' },
  { id: '02', title: 'Projeto', detail: 'Como será organizado' },
  { id: '03', title: 'Implementação', detail: 'Construir o software' },
  { id: '04', title: 'Integração e testes', detail: 'Conferir o sistema' },
  { id: '05', title: 'Operação e manutenção', detail: 'Usar e evoluir' }
];

function Stage({ number, title, description, className = '' }: {
  number: string; title: string; description: string; className?: string;
}) {
  return (
    <div className={'pm-stage ' + className}>
      <span className="pm-stage-number">{number}</span>
      <strong>{title}</strong>
      <small>{description}</small>
    </div>
  );
}

function WaterfallModelVisual() {
  return (
    <div className="process-model pm-waterfall" aria-label="Cascata: cinco fases ligadas por setas curtas, em sequência">
      <div className="pm-waterfall-track">
        {waterfall.map((stage, index) => (
          <div className="pm-waterfall-item" key={stage.id}>
            <Stage number={stage.id} title={stage.title} description={stage.detail} />
            {index < waterfall.length - 1 && <span className="pm-waterfall-arrow" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <p className="pm-note"><span aria-hidden="true">↶</span> O fluxo principal é sequencial; revisões podem exigir voltar a uma etapa anterior.</p>
    </div>
  );
}

function IncrementalModelVisual() {
  const versions = [
    { id: '01', title: 'Versão inicial', features: ['Cadastro'], note: 'Primeira entrega utilizável' },
    { id: '02', title: 'Versão ampliada', features: ['Cadastro', 'Reservas'], note: 'Novas funções + feedback' },
    { id: '03', title: 'Versão evoluída', features: ['Cadastro', 'Reservas', 'Relatórios'], note: 'Produto cresce gradualmente' }
  ];
  return (
    <div className="process-model pm-incremental" aria-label="Três incrementos, cada qual passa por especificar, construir e validar, acumulando funcionalidades">
      <div className="pm-increment-list">
        {versions.map(version => (
          <div className="pm-increment" key={version.id}>
            <div className="pm-increment-number"><span>INCREMENTO {version.id}</span><strong>{version.title}</strong></div>
            <div className="pm-increment-cycle" aria-label="Especificação, desenvolvimento e validação">
              <span>Especificar</span><b aria-hidden="true">›</b><span>Construir</span><b aria-hidden="true">›</b><span>Validar</span>
            </div>
            <div className="pm-increment-result">
              <div className="pm-increment-features">
                {version.features.map(feature => <span key={feature}>{feature}</span>)}
              </div>
              <small>{version.note}</small>
            </div>
          </div>
        ))}
      </div>
      <p className="pm-note"><span aria-hidden="true">↺</span> A cada entrega, o uso e os testes orientam o próximo incremento.</p>
    </div>
  );
}

function VModelVisual() {
  const pairs = [
    { left: ['Requisitos', 'Definir necessidades'], right: ['Testes de aceitação', 'Validar necessidades'] },
    { left: ['Projeto do sistema', 'Definir arquitetura'], right: ['Testes de sistema', 'Validar o sistema completo'] },
    { left: ['Projeto detalhado', 'Definir componentes'], right: ['Testes de integração', 'Validar componentes juntos'] }
  ];
  return (
    <div className="process-model pm-v-model" aria-label="Modelo V: requisitos ligados a testes de aceitação, projeto do sistema a testes de sistema e projeto detalhado a integração; implementação fica na base, com testes unitários">
      <div className="pm-v-layout">
        <svg className="pm-v-path" viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true">
          <path d="M145 30 L270 130 L385 235 L500 380 L615 235 L730 130 L855 30" className="pm-v-main-path" />
          <path d="M160 46 H840 M275 144 H725 M392 249 H608" className="pm-v-pair-path" />
        </svg>
        {pairs.map((pair, index) => (
          <div className={'pm-v-row pm-v-row-' + index} key={pair.left[0]}>
            <Stage number={'0' + (index + 1)} title={pair.left[0]} description={pair.left[1]} />
            <span className="pm-v-pair-label">relaciona-se a</span>
            <Stage number={'0' + (7 - index)} title={pair.right[0]} description={pair.right[1]} />
          </div>
        ))}
        <div className="pm-v-base">
          <Stage number="04" title="Implementação" description="Código e testes unitários" className="pm-v-code" />
        </div>
      </div>
      <p className="pm-note">À esquerda, definição e projeto; à direita, os testes correspondentes. A implementação une os lados do V.</p>
    </div>
  );
}

const spiralPoints = Array.from({ length: 220 }, (_, index) => {
  const progress = index / 219;
  const angle = -Math.PI / 2 + progress * Math.PI * 5;
  const radius = 8 + progress * 141;
  return [280 + Math.cos(angle) * radius, 177 + Math.sin(angle) * radius * .98];
});
const spiralPath = spiralPoints.map(([x, y], index) =>
  (index === 0 ? 'M ' : 'L ') + x.toFixed(1) + ' ' + y.toFixed(1)
).join(' ');
const spiralEnd = spiralPoints[spiralPoints.length - 1];

function SpiralModelVisual() {
  const quadrants = [
    ['01', 'Definir objetivos', 'O que este ciclo precisa alcançar?'],
    ['02', 'Analisar riscos', 'Quais incertezas devem ser reduzidas?'],
    ['03', 'Desenvolver e validar', 'Criar e testar a solução escolhida'],
    ['04', 'Avaliar e planejar', 'Usar evidências no próximo ciclo']
  ];
  return (
    <div className="process-model pm-spiral" aria-label="Espiral crescente representando ciclos sucessivos de objetivos, análise de riscos, desenvolvimento, avaliação e planejamento">
      <div className="pm-spiral-layout">
        <svg className="pm-spiral-image" viewBox="0 0 600 355" role="img" aria-label="Trajeto espiral cresce do centro para fora, mostrando sucessivos ciclos de aprendizado">
          <circle cx="280" cy="177" r="155" className="pm-spiral-ring" />
          <circle cx="280" cy="177" r="106" className="pm-spiral-ring" />
          <circle cx="280" cy="177" r="55" className="pm-spiral-ring" />
          <path d="M280 12 V340 M120 177 H440" className="pm-spiral-axes" />
          <path d={spiralPath} className="pm-spiral-curve" />
          <circle cx="280" cy="177" r="8" className="pm-spiral-origin" />
          <circle cx={spiralEnd[0]} cy={spiralEnd[1]} r="7" className="pm-spiral-tip" />
          <text x="280" y="345" textAnchor="middle" className="pm-spiral-svg-caption">Cada volta: mais informação e menor incerteza</text>
        </svg>
        <div className="pm-spiral-stages">
          {quadrants.map(q => (
            <div key={q[0]} className="pm-spiral-stage">
              <span>{q[0]}</span><div><strong>{q[1]}</strong><small>{q[2]}</small></div>
            </div>
          ))}
        </div>
      </div>
      <p className="pm-note"><span aria-hidden="true">◎</span> O risco orienta as decisões: não se trata apenas de repetir as mesmas fases.</p>
    </div>
  );
}

function PrototypingModelVisual() {
  const nodes = [
    ['01', 'Entender a ideia', 'Hipótese e público'],
    ['02', 'Criar protótipo', 'Tela ou fluxo simples'],
    ['03', 'Testar com usuários', 'Observar dificuldades'],
    ['04', 'Ajustar e repetir', 'Refinar a solução']
  ];
  return (
    <div className="process-model pm-prototyping" aria-label="Ciclo de prototipação: ideia, protótipo, teste com usuários, ajustes e retorno">
      <div className="pm-loop-track">
        {nodes.map((node, index) => (
          <div className="pm-loop-item" key={node[0]}>
            <Stage number={node[0]} title={node[1]} description={node[2]} />
            {index !== nodes.length - 1 && <span aria-hidden="true" className="pm-loop-arrow">→</span>}
          </div>
        ))}
      </div>
      <div className="pm-loop-return" aria-label="O feedback retorna à ideia e gera uma nova versão">
        <span aria-hidden="true">↶</span>
        <strong>Feedback → nova versão</strong>
        <small>O protótipo serve para aprender antes de investir na solução completa.</small>
      </div>
    </div>
  );
}

function AgileModelVisual() {
  const sprint = [
    ['01', 'Planejar', 'Selecionar valor'],
    ['02', 'Construir', 'Desenvolver'],
    ['03', 'Testar', 'Validar'],
    ['04', 'Revisar', 'Aprender']
  ];
  return (
    <div className="process-model pm-agile" aria-label="Iteração ágil: backlog alimenta sprint com planejamento, desenvolvimento, testes e revisão; entrega gera feedback">
      <div className="pm-agile-track">
        <div className="pm-agile-side">
          <span className="pm-tag">ENTRADA</span>
          <strong>Backlog</strong>
          <small>Necessidades ordenadas por valor</small>
        </div>
        <span className="pm-agile-link" aria-hidden="true">→</span>
        <div className="pm-agile-sprint">
          <div className="pm-agile-sprint-heading"><strong>SPRINT</strong><span>↻</span></div>
          <div className="pm-agile-steps">
            {sprint.map(item => (
              <div key={item[0]}><span>{item[0]}</span><strong>{item[1]}</strong><small>{item[2]}</small></div>
            ))}
          </div>
        </div>
        <span className="pm-agile-link" aria-hidden="true">→</span>
        <div className="pm-agile-side pm-agile-output">
          <span className="pm-tag">SAÍDA</span>
          <strong>Incremento</strong>
          <small>Software testado e potencialmente entregável</small>
        </div>
      </div>
      <p className="pm-note"><span aria-hidden="true">↶</span> Revisão e retrospectiva geram aprendizagem para o próximo sprint.</p>
    </div>
  );
}

type ComparisonModelId =
  | 'waterfall' | 'v-model' | 'incremental' | 'spiral' | 'prototype' | 'agile';

const comparisons: Array<{
  id: ComparisonModelId; title: string; core: string; bestFor: string; caution: string;
}> = [
  {
    id: 'waterfall', title: 'Cascata', core: 'Etapas em sequência',
    bestFor: 'Requisitos relativamente estáveis',
    caution: 'Mudanças tardias podem exigir retrabalho'
  },
  {
    id: 'v-model', title: 'Modelo V', core: 'Projeto ligado a testes',
    bestFor: 'Verificação e rastreabilidade',
    caution: 'Exige planejamento dos testes'
  },
  {
    id: 'incremental', title: 'Incremental', core: 'Produto cresce por entregas',
    bestFor: 'Valor e feedback desde cedo',
    caution: 'Arquitetura precisa evoluir'
  },
  {
    id: 'spiral', title: 'Espiral', core: 'Ciclos orientados por risco',
    bestFor: 'Projetos incertos ou críticos',
    caution: 'Análise de risco tem custo'
  },
  {
    id: 'prototype', title: 'Prototipação', core: 'Hipóteses testadas com usuários',
    bestFor: 'Requisitos ainda pouco claros',
    caution: 'Protótipo não é produto pronto'
  },
  {
    id: 'agile', title: 'Ágil / iterativo', core: 'Ciclos curtos de aprendizagem',
    bestFor: 'Prioridades que mudam',
    caution: 'Exige colaboração constante'
  }
];

const comparisonSpiralPath = Array.from({ length: 115 }, (_, index) => {
  const t = index / 114;
  const angle = -Math.PI / 2 + 5 * Math.PI * t;
  const radius = 2 + 42 * t;
  const x = 110 + radius * Math.cos(angle);
  const y = 49 + radius * Math.sin(angle);
  return (index === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1);
}).join(' ');

function ComparisonMiniature({ model }: { model: ComparisonModelId }) {
  switch (model) {
    case 'waterfall':
      return (
        <div className="pm-mini pm-mini-waterfall"
          role="img" aria-label="Requisitos seguem para projeto, desenvolvimento e testes">
          {['Req.', 'Proj.', 'Dev.', 'Teste'].map((label, index) => (
            <div className="pm-mini-sequence-item" key={label}>
              <span>{label}</span>
              {index < 3 && <b aria-hidden="true">→</b>}
            </div>
          ))}
        </div>
      );
    case 'v-model':
      return (
        <svg className="pm-mini pm-mini-v" viewBox="0 0 220 98" role="img"
          aria-label="Ramo de definição e ramo de testes se encontram na implementação">
          <path d="M28 17 L110 83 L192 17" className="pm-mini-v-main" />
          <path d="M43 29 L177 29 M73 53 L147 53" className="pm-mini-v-pairs" />
          <circle cx="28" cy="17" r="5" /><circle cx="192" cy="17" r="5" />
          <circle cx="110" cy="83" r="5" />
          <text x="12" y="10">Definir</text><text x="166" y="10">Testar</text>
          <text x="110" y="96" textAnchor="middle">Código</text>
        </svg>
      );
    case 'incremental':
      return (
        <div className="pm-mini pm-mini-incremental" role="img"
          aria-label="Versão 1 possui uma função, versão 2 tem duas e versão 3 tem três">
          {[1, 2, 3].map(count => (
            <div className="pm-mini-release" key={count}>
              <div className="pm-mini-features">
                {Array.from({ length: count }, (_, i) => <i key={i} />)}
              </div>
              <span>v{count}</span>
            </div>
          ))}
        </div>
      );
    case 'spiral':
      return (
        <svg className="pm-mini pm-mini-spiral" viewBox="0 0 220 98" role="img"
          aria-label="Curva espiral contínua cresce do centro para fora, representando ciclos sucessivos de análise de riscos">
          <circle cx="110" cy="49" r="28" className="pm-mini-spiral-guide" />
          <circle cx="110" cy="49" r="44" className="pm-mini-spiral-guide" />
          <path d={comparisonSpiralPath} className="pm-mini-spiral-path" />
          <circle cx="110" cy="49" r="3" className="pm-mini-spiral-origin" />
          <text x="166" y="88">Risco ↗</text>
        </svg>
      );
    case 'prototype':
      return (
        <div className="pm-mini pm-mini-loop" role="img"
          aria-label="Ideia segue para protótipo e teste; feedback retorna à ideia">
          <div className="pm-mini-loop-track">
            <span>Ideia</span><b aria-hidden="true">→</b>
            <span>Protótipo</span><b aria-hidden="true">→</b><span>Teste</span>
          </div>
          <div className="pm-mini-loop-feedback"><b aria-hidden="true">↶</b> Ajustar a partir do feedback</div>
        </div>
      );
    case 'agile':
      return (
        <div className="pm-mini pm-mini-loop pm-mini-agile" role="img"
          aria-label="Backlog alimenta sprint, que entrega incremento; a revisão orienta o próximo ciclo">
          <div className="pm-mini-loop-track">
            <span>Backlog</span><b aria-hidden="true">→</b>
            <span>Sprint</span><b aria-hidden="true">→</b><span>Entrega</span>
          </div>
          <div className="pm-mini-loop-feedback"><b aria-hidden="true">↶</b> Revisar e melhorar</div>
        </div>
      );
  }
}

function ModelsComparisonVisual() {
  return (
    <div className="process-model pm-comparison"
      aria-label="Comparação de seis modelos de processo, com diagramas estáticos, aplicações e cuidados">
      <div className="pm-comparison-grid">
        {comparisons.map((item, index) => (
          <section className={'pm-comparison-card pm-comparison-' + item.id} key={item.id}
            aria-label={item.title}>
            <div className="pm-comparison-heading">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.title}</strong>
            </div>
            <ComparisonMiniature model={item.id} />
            <p className="pm-comparison-core">{item.core}</p>
            <div className="pm-comparison-foot">
              <p><b>Indicado:</b> {item.bestFor}</p>
              <p><b>Atenção:</b> {item.caution}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function SdlcProcessModels({ model }: { model: SdlcProcessModel }) {
  switch (model) {
    case 'sdlc-waterfall': return <WaterfallModelVisual />;
    case 'sdlc-incremental': return <IncrementalModelVisual />;
    case 'sdlc-v-model': return <VModelVisual />;
    case 'sdlc-spiral': return <SpiralModelVisual />;
    case 'sdlc-prototyping': return <PrototypingModelVisual />;
    case 'sdlc-agile': return <AgileModelVisual />;
    case 'sdlc-models': return <ModelsComparisonVisual />;
  }
}
