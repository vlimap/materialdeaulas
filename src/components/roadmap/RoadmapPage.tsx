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
import { ArrowRight, BookOpen, CheckCircle2, Database, Server, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { getTechnologyIcon } from '../../brand/technologyIcons';
import '../../styles/roadmap.css';

type TrackId = 'frontend' | 'backend' | 'fullstack' | 'database' | 'devops';

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
  icon: 'frontend' | 'backend' | 'fullstack' | 'database' | 'devops';
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
  return <CheckCircle2 size={17} />;
}

function createLayout(track: Track): { nodes: RoadmapNode[]; edges: RoadmapEdge[] } {
  const columns = 4;
  const columnGap = 290;
  const rowGap = 150;

  const nodes = track.steps.map((step, index) => {
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
        kind: 'normal',
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
      kind: 'goal',
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
    <div className={'roadmap-node-card' + (nodeData.kind === 'goal' ? ' is-goal' : '')}>
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
            proOptions={{ hideAttribution: true }}
          >
            <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#27313d" />
            <Controls showInteractive={false} />
          </ReactFlow>
        </section>
      </div>
    </main>
  );
}
