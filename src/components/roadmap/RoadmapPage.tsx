import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ArrowRight, BookOpen, Boxes, CheckCircle2, Database, ShieldCheck, Smartphone, Server, Wrench } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { getTechnologyIcon } from '../../brand/technologyIcons';
import '../../styles/roadmap.css';

type TrackId =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'engineering'
  | 'qa'
  | 'architecture'
  | 'security'
  | 'mobile'
  | 'database'
  | 'devops';

type RoadmapNodeData = {
  title: string;
  subtitle: string;
  slug?: string;
  kind?: 'goal' | 'normal';
};

type RoadmapNode = Node<RoadmapNodeData>;
type RoadmapEdge = Edge;

type Step = {
  id: string;
  title: string;
  subtitle: string;
  slug?: string;
};

type Track = {
  id: TrackId;
  label: string;
  icon: TrackId;
  steps: Step[];
};

const tracks: Track[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'frontend',
    steps: [
      { id: 'web', title: 'Base da Web', subtitle: 'Como a web funciona' },
      { id: 'html', title: 'HTML5', subtitle: 'Estrutura e semântica', slug: 'html5' },
      { id: 'css', title: 'CSS3', subtitle: 'Layout e responsividade', slug: 'css3' },
      { id: 'js', title: 'JavaScript', subtitle: 'Fundamentos da linguagem', slug: 'javascript' },
      { id: 'ts', title: 'TypeScript', subtitle: 'Tipagem e contratos', slug: 'typescript' },
      { id: 'react', title: 'React', subtitle: 'Componentes e estado', slug: 'react' },
      { id: 'vite', title: 'Vite', subtitle: 'Tooling e build', slug: 'vite' },
      { id: 'tailwind', title: 'Tailwind CSS', subtitle: 'Estilização utilitária', slug: 'tailwind-css' },
      { id: 'axios', title: 'Axios', subtitle: 'Consumo de APIs', slug: 'axios' },
      { id: 'next', title: 'Next.js', subtitle: 'Aplicações React modernas', slug: 'next-js' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'backend',
    steps: [
      { id: 'logic', title: 'Lógica + Terminal', subtitle: 'Base para desenvolvimento' },
      { id: 'js', title: 'JavaScript', subtitle: 'Fundamentos da linguagem', slug: 'javascript' },
      { id: 'ts', title: 'TypeScript', subtitle: 'Tipagem e contratos', slug: 'typescript' },
      { id: 'node', title: 'Node.js', subtitle: 'JavaScript no servidor', slug: 'node-js' },
      { id: 'express', title: 'Express', subtitle: 'Servidor HTTP e rotas', slug: 'express' },
      { id: 'rest', title: 'REST API', subtitle: 'Recursos e contratos', slug: 'rest-api' },
      { id: 'jwt', title: 'JWT', subtitle: 'Autenticação', slug: 'jwt' },
      { id: 'sql', title: 'SQL', subtitle: 'Consultas e dados', slug: 'sql' },
      { id: 'postgres', title: 'PostgreSQL', subtitle: 'Banco relacional', slug: 'postgresql' },
      { id: 'prisma', title: 'Prisma', subtitle: 'ORM tipado', slug: 'prisma' },
      { id: 'docker', title: 'Docker', subtitle: 'Ambiente e deploy', slug: 'docker' },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full Stack',
    icon: 'fullstack',
    steps: [
      { id: 'web', title: 'Base da Web', subtitle: 'Browser, HTTP e terminal' },
      { id: 'html', title: 'HTML5', subtitle: 'Estrutura e semântica', slug: 'html5' },
      { id: 'css', title: 'CSS3', subtitle: 'Layout e responsividade', slug: 'css3' },
      { id: 'js', title: 'JavaScript', subtitle: 'Fundamentos da linguagem', slug: 'javascript' },
      { id: 'ts', title: 'TypeScript', subtitle: 'Tipagem e contratos', slug: 'typescript' },
      { id: 'react', title: 'React', subtitle: 'Componentes e estado', slug: 'react' },
      { id: 'next', title: 'Next.js', subtitle: 'Aplicação web moderna', slug: 'next-js' },
      { id: 'node', title: 'Node.js', subtitle: 'JavaScript no servidor', slug: 'node-js' },
      { id: 'express', title: 'Express', subtitle: 'Servidor HTTP e rotas', slug: 'express' },
      { id: 'rest', title: 'REST API', subtitle: 'Integração frontend/backend', slug: 'rest-api' },
      { id: 'jwt', title: 'JWT', subtitle: 'Autenticação', slug: 'jwt' },
      { id: 'sql', title: 'SQL', subtitle: 'Consulta e manipulação', slug: 'sql' },
      { id: 'postgres', title: 'PostgreSQL', subtitle: 'Banco relacional', slug: 'postgresql' },
      { id: 'prisma', title: 'Prisma', subtitle: 'ORM tipado', slug: 'prisma' },
      { id: 'docker', title: 'Docker', subtitle: 'Containers', slug: 'docker' },
      { id: 'nginx', title: 'Nginx', subtitle: 'Proxy e publicação', slug: 'nginx' },
    ],
  },
  {
    id: 'engineering',
    label: 'Engenharia de Software',
    icon: 'engineering',
    steps: [
      { id: 'sdlc', title: 'SDLC', subtitle: 'Entender o ciclo completo do software', slug: 'sdlc' },
      { id: 'logic', title: 'Lógica de Programação', subtitle: 'Base para resolver problemas', slug: 'logic-programming' },
      { id: 'brd', title: 'BRD', subtitle: 'Problema, objetivos e escopo', slug: 'brd' },
      { id: 'srs', title: 'SRS', subtitle: 'Especificação dos requisitos', slug: 'srs' },
      { id: 'iso', title: 'ISO/IEC/IEEE 29148', subtitle: 'Referência para engenharia de requisitos', slug: 'iso-29148' },
      { id: 'requirements', title: 'Engenharia de Requisitos', subtitle: 'Elicitar, analisar e validar', slug: 'requirements-engineering' },
      { id: 'uml', title: 'UML', subtitle: 'Modelar o sistema', slug: 'uml' },
      { id: 'ux', title: 'UX/UI', subtitle: 'Fluxos e experiência', slug: 'ux-ui' },
      { id: 'architecture', title: 'Arquitetura de Software', subtitle: 'Estruturar a solução', slug: 'software-architecture' },
      { id: 'git', title: 'Git', subtitle: 'Versionar e colaborar', slug: 'git' },
      { id: 'api', title: 'REST API', subtitle: 'Contratos e integrações', slug: 'rest-api' },
      { id: 'db', title: 'Modelagem de Banco', subtitle: 'Dados e relacionamentos', slug: 'database-modeling' },
      { id: 'tests', title: 'Estratégia de Testes', subtitle: 'Qualidade desde o início', slug: 'test-strategy' },
      { id: 'security', title: 'OWASP Top 10', subtitle: 'Riscos comuns da aplicação', slug: 'owasp-top-10' },
      { id: 'cicd', title: 'CI/CD', subtitle: 'Automatizar validação e entrega', slug: 'ci-cd' },
      { id: 'deploy', title: 'Estratégias de Deploy', subtitle: 'Publicar com controle', slug: 'deployment-strategies' },
      { id: 'telemetry', title: 'OpenTelemetry', subtitle: 'Métricas, logs e traces', slug: 'opentelemetry' },
      { id: 'incident', title: 'Gestão de Incidentes', subtitle: 'Responder a falhas em produção', slug: 'incident-management' },
      { id: 'maintenance', title: 'Manutenção de Software', subtitle: 'Evoluir com segurança', slug: 'maintenance' },
    ],
  },
  {
    id: 'qa',
    label: 'Qualidade / QA',
    icon: 'qa',
    steps: [
      { id: 'requirements', title: 'Engenharia de Requisitos', subtitle: 'Entender o que deve ser validado', slug: 'requirements-engineering' },
      { id: 'acceptance', title: 'Critérios de Aceitação', subtitle: 'Definir condições verificáveis', slug: 'acceptance-criteria' },
      { id: 'strategy', title: 'Estratégia de Testes', subtitle: 'Planejar níveis e riscos', slug: 'test-strategy' },
      { id: 'unit', title: 'Testes Unitários', subtitle: 'Validar unidades isoladas', slug: 'unit-testing' },
      { id: 'integration', title: 'Testes de Integração', subtitle: 'Validar componentes integrados', slug: 'integration-testing' },
      { id: 'e2e', title: 'Testes E2E', subtitle: 'Validar jornadas completas', slug: 'e2e-testing' },
      { id: 'postman', title: 'Postman', subtitle: 'Testar APIs', slug: 'postman' },
      { id: 'playwright', title: 'Playwright', subtitle: 'Automação de interface', slug: 'playwright' },
      { id: 'a11y', title: 'Testes de Acessibilidade', subtitle: 'Validar acesso inclusivo', slug: 'accessibility-testing' },
      { id: 'load', title: 'Teste de Carga', subtitle: 'Validar capacidade', slug: 'load-testing' },
      { id: 'gates', title: 'Quality Gates', subtitle: 'Bloquear regressões', slug: 'quality-gates' },
    ],
  },
  {
    id: 'architecture',
    label: 'Arquitetura',
    icon: 'architecture',
    steps: [
      { id: 'architecture', title: 'Arquitetura de Software', subtitle: 'Princípios e decisões', slug: 'software-architecture' },
      { id: 'c4', title: 'C4 Model', subtitle: 'Visualizar contexto e componentes', slug: 'c4-model' },
      { id: 'mvc', title: 'MVC', subtitle: 'Separação de responsabilidades', slug: 'mvc' },
      { id: 'layers', title: 'Arquitetura em Camadas', subtitle: 'Organização por responsabilidades', slug: 'layered-architecture' },
      { id: 'clean', title: 'Clean Architecture', subtitle: 'Dependências orientadas ao domínio', slug: 'clean-architecture' },
      { id: 'hexagonal', title: 'Arquitetura Hexagonal', subtitle: 'Ports & adapters', slug: 'hexagonal-architecture' },
      { id: 'ddd', title: 'Domain-Driven Design', subtitle: 'Modelagem orientada ao domínio', slug: 'ddd' },
      { id: 'solid', title: 'SOLID', subtitle: 'Princípios de design', slug: 'solid' },
      { id: 'patterns', title: 'Design Patterns', subtitle: 'Soluções recorrentes', slug: 'design-patterns' },
      { id: 'refactoring', title: 'Refatoração', subtitle: 'Evoluir sem mudar comportamento', slug: 'refactoring' },
      { id: 'modular', title: 'Monólito Modular', subtitle: 'Modularidade antes da distribuição', slug: 'modular-monolith' },
      { id: 'distributed', title: 'Sistemas Distribuídos', subtitle: 'Consistência, latência e falhas', slug: 'distributed-systems' },
      { id: 'microservices', title: 'Microservices', subtitle: 'Serviços independentes', slug: 'microservices' },
    ],
  },
  {
    id: 'security',
    label: 'Segurança',
    icon: 'security',
    steps: [
      { id: 'secure-coding', title: 'Secure Coding', subtitle: 'Codificar com segurança por padrão', slug: 'secure-coding' },
      { id: 'owasp', title: 'OWASP Top 10', subtitle: 'Riscos recorrentes', slug: 'owasp-top-10' },
      { id: 'authn', title: 'Autenticação', subtitle: 'Confirmar identidade', slug: 'authentication' },
      { id: 'authz', title: 'Autorização', subtitle: 'Controlar permissões', slug: 'authorization' },
      { id: 'oauth', title: 'OAuth 2.0 & OIDC', subtitle: 'Delegação e identidade', slug: 'oauth2-oidc' },
      { id: 'threat', title: 'Threat Modeling', subtitle: 'Antecipar ameaças', slug: 'threat-modeling' },
      { id: 'secrets', title: 'Gestão de Segredos', subtitle: 'Proteger credenciais', slug: 'secrets-management' },
      { id: 'deps', title: 'Segurança de Dependências', subtitle: 'Reduzir risco da cadeia', slug: 'dependency-security' },
      { id: 'headers', title: 'Security Headers', subtitle: 'Endurecer aplicações web', slug: 'security-headers' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: 'mobile',
    steps: [
      { id: 'logic', title: 'Lógica de Programação', subtitle: 'Base para aplicações', slug: 'logic-programming' },
      { id: 'git', title: 'Git', subtitle: 'Versionamento', slug: 'git' },
      { id: 'js', title: 'JavaScript', subtitle: 'Fundamentos da linguagem', slug: 'javascript' },
      { id: 'ts', title: 'TypeScript', subtitle: 'Tipagem e contratos', slug: 'typescript' },
      { id: 'mobile-architecture', title: 'Arquitetura Mobile', subtitle: 'Estrutura do aplicativo', slug: 'mobile-architecture' },
      { id: 'react-native', title: 'React Native', subtitle: 'Aplicações nativas com React', slug: 'react-native' },
      { id: 'api', title: 'REST API', subtitle: 'Integração com backend', slug: 'rest-api' },
      { id: 'storage', title: 'Persistência Mobile', subtitle: 'Dados locais e sincronização', slug: 'mobile-storage' },
      { id: 'tests', title: 'Testes E2E', subtitle: 'Validar jornadas críticas', slug: 'e2e-testing' },
      { id: 'release', title: 'Publicação de Apps', subtitle: 'Build, loja e versão', slug: 'mobile-release' },
    ],
  },
  {
    id: 'database',
    label: 'Banco de Dados',
    icon: 'database',
    steps: [
      { id: 'model', title: 'Modelagem', subtitle: 'Entidades e relacionamentos' },
      { id: 'sql', title: 'SQL', subtitle: 'DDL, DML e consultas', slug: 'sql' },
      { id: 'postgres', title: 'PostgreSQL', subtitle: 'Banco relacional', slug: 'postgresql' },
      { id: 'mysql', title: 'MySQL', subtitle: 'Banco relacional', slug: 'mysql' },
      { id: 'sqlserver', title: 'SQL Server', subtitle: 'Ecossistema Microsoft', slug: 'sql-server' },
      { id: 'mongo', title: 'MongoDB', subtitle: 'Banco documental', slug: 'mongodb' },
      { id: 'redis', title: 'Redis', subtitle: 'Cache e memória', slug: 'redis' },
      { id: 'dbeaver', title: 'DBeaver', subtitle: 'Administração de bancos', slug: 'dbeaver' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    icon: 'devops',
    steps: [
      { id: 'bash', title: 'Bash', subtitle: 'Terminal e automação', slug: 'bash' },
      { id: 'linux', title: 'Linux', subtitle: 'Fundamentos do sistema', slug: 'linux' },
      { id: 'ubuntu', title: 'Ubuntu', subtitle: 'Administração prática', slug: 'ubuntu' },
      { id: 'github', title: 'GitHub', subtitle: 'Versionamento e colaboração', slug: 'github' },
      { id: 'docker', title: 'Docker', subtitle: 'Containers', slug: 'docker' },
      { id: 'nginx', title: 'Nginx', subtitle: 'Proxy reverso', slug: 'nginx' },
      { id: 'azure', title: 'Azure', subtitle: 'Serviços em cloud', slug: 'azure' },
      { id: 'terraform', title: 'Terraform', subtitle: 'Infraestrutura como código', slug: 'terraform' },
    ],
  },
];

function trackIcon(track: TrackId) {
  if (track === 'backend') return <Server size={17} />;
  if (track === 'database') return <Database size={17} />;
  if (track === 'devops') return <Wrench size={17} />;
  if (track === 'architecture') return <Boxes size={17} />;
  if (track === 'security') return <ShieldCheck size={17} />;
  if (track === 'mobile') return <Smartphone size={17} />;
  if (track === 'engineering') return <BookOpen size={17} />;
  return <CheckCircle2 size={17} />;
}

function createLayout(track: Track): { nodes: RoadmapNode[]; edges: RoadmapEdge[] } {
  const columns = 4;
  const columnGap = 290;
  const rowGap = 150;

  const nodes: RoadmapNode[] = track.steps.map((step, index): RoadmapNode => {
    const row = Math.floor(index / columns);
    const columnInRow = index % columns;
    const oddRow = row % 2 === 1;
    const column = oddRow ? columns - 1 - columnInRow : columnInRow;

    return {
      id: step.id + '-' + index,
      type: 'roadmap',
      position: { x: column * columnGap, y: row * rowGap },
      data: {
        title: step.title,
        subtitle: step.subtitle,
        slug: step.slug,
        kind: 'normal' as const,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    };
  });

  nodes.push({
    id: 'goal',
    type: 'roadmap',
    position: {
      x: ((track.steps.length % columns) || columns) * columnGap - columnGap,
      y: Math.ceil(track.steps.length / columns) * rowGap,
    },
    data: {
      title: 'Próximo passo',
      subtitle: 'Construa um projeto completo',
      kind: 'goal' as const,
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  });

  const edges = nodes.slice(0, -1).map((current, index) => ({
    id: 'edge-' + index,
    source: current.id,
    target: nodes[index + 1].id,
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#F2C53D',
      width: 18,
      height: 18,
    },
    style: {
      stroke: '#F2C53D',
      strokeWidth: 2.4,
    },
  }));

  return { nodes, edges };
}

function RoadmapNodeCard({ data }: NodeProps) {
  const nodeData = data as RoadmapNodeData;
  const icon = nodeData.slug ? getTechnologyIcon(nodeData.slug) : '';

  const body = (
    <>
      <div className="roadmap-node-icon" aria-hidden="true">
        {icon ? <img src={icon} alt="" /> : nodeData.kind === 'goal' ? <CheckCircle2 size={20} /> : <BookOpen size={20} />}
      </div>
      <div className="roadmap-node-copy">
        <strong>{nodeData.title}</strong>
        <span>{nodeData.subtitle}</span>
      </div>
      {nodeData.slug && <ArrowRight size={15} className="roadmap-node-arrow" aria-hidden="true" />}
    </>
  );

  return (
    <div
      className={
        'roadmap-node-card' +
        (nodeData.kind === 'goal' ? ' is-goal' : '') +
        (nodeData.slug ? ' is-clickable' : '')
      }
    >
      <Handle type="target" position={Position.Left} className="roadmap-handle" />
      {nodeData.slug ? (
        <Link
          className="roadmap-node-link nodrag nopan"
          to={'/curso/curso-' + nodeData.slug}
          aria-label={'Abrir curso de ' + nodeData.title}
        >
          {body}
        </Link>
      ) : (
        <div className="roadmap-node-static">{body}</div>
      )}
      <Handle type="source" position={Position.Right} className="roadmap-handle" />
    </div>
  );
}

const nodeTypes = { roadmap: RoadmapNodeCard };

export function RoadmapPage() {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState<TrackId>('frontend');
  const track = tracks.find((item) => item.id === selectedTrack)!;
  const graph = useMemo(() => createLayout(track), [track]);

  return (
    <main id="main-content" className="roadmap-page">
      <div className="roadmap-shell">
        <header className="roadmap-heading">
          <div>
            <span>Roadmap</span>
            <h1>{track.label}</h1>
          </div>
          <p>Selecione uma trilha e siga a sequência. Clique em uma tecnologia para abrir o curso.</p>
        </header>

        <nav className="roadmap-track-selector" aria-label="Trilhas de aprendizagem">
          {tracks.map((item) => (
            <button
              type="button"
              key={item.id}
              className={item.id === selectedTrack ? 'is-selected' : ''}
              onClick={() => setSelectedTrack(item.id)}
              aria-pressed={item.id === selectedTrack}
            >
              {trackIcon(item.id)}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="roadmap-mobile-track-picker">
          <label htmlFor="roadmap-track">Escolha a trilha</label>
          <select
            id="roadmap-track"
            value={selectedTrack}
            onChange={(event) => setSelectedTrack(event.target.value as TrackId)}
          >
            {tracks.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </div>

        <p className="roadmap-live-status" role="status" aria-live="polite">
          Trilha selecionada: {track.label}. {track.steps.length} etapas.
        </p>

        <section className="roadmap-flow-shell" aria-label={'Roadmap de ' + track.label}>
          <ReactFlow
            key={track.id}
            nodes={graph.nodes}
            edges={graph.edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.08, maxZoom: 1 }}
            minZoom={0.5}
            maxZoom={1.25}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            onNodeClick={(_, node) => {
              const nodeData = node.data as RoadmapNodeData;
              if (nodeData.slug) navigate('/curso/curso-' + nodeData.slug);
            }}
            proOptions={{ hideAttribution: true }}
          >
            <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#27313d" />
            <Controls showInteractive={false} />
          </ReactFlow>
        </section>

        <section className="roadmap-mobile-sequence" aria-labelledby="roadmap-mobile-title">
          <h2 id="roadmap-mobile-title">Sequência de {track.label}</h2>
          <ol className="roadmap-mobile-list">
            {track.steps.map((step, index) => {
              const icon = step.slug ? getTechnologyIcon(step.slug) : '';

              const body = (
                <>
                  <span className="roadmap-mobile-number" aria-hidden="true">{index + 1}</span>
                  <span className="roadmap-mobile-icon" aria-hidden="true">
                    {icon ? <img src={icon} alt="" /> : <BookOpen size={22} />}
                  </span>
                  <span className="roadmap-mobile-copy">
                    <strong>{step.title}</strong>
                    <span>{step.subtitle}</span>
                  </span>
                  {step.slug && <ArrowRight size={18} aria-hidden="true" />}
                </>
              );

              return (
                <li key={step.id + '-' + index}>
                  {step.slug ? (
                    <Link
                      className="roadmap-mobile-step"
                      to={'/curso/curso-' + step.slug}
                      aria-label={'Etapa ' + (index + 1) + ' de ' + track.steps.length + ': ' + step.title + '. Abrir curso.'}
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="roadmap-mobile-step roadmap-mobile-step-static">
                      {body}
                    </div>
                  )}
                </li>
              );
            })}
            <li>
              <div className="roadmap-mobile-step roadmap-mobile-goal">
                <span className="roadmap-mobile-number" aria-hidden="true">{track.steps.length + 1}</span>
                <span className="roadmap-mobile-icon" aria-hidden="true"><CheckCircle2 size={22} /></span>
                <span className="roadmap-mobile-copy">
                  <strong>Próximo passo</strong>
                  <span>Construa um projeto completo</span>
                </span>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
