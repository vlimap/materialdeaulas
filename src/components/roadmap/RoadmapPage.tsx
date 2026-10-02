import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MarkerType,
  MiniMap,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ArrowRight, BookOpen, CheckCircle2, Compass, Database, Server, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { getTechnologyIcon } from '../../brand/technologyIcons';
import '../../styles/roadmap.css';

type TrackId = 'frontend' | 'backend' | 'fullstack' | 'database' | 'devops';

type RoadmapNodeData = {
  title: string;
  subtitle: string;
  slug?: string;
  group: 'foundation' | 'frontend' | 'backend' | 'database' | 'devops' | 'goal';
  tracks: TrackId[];
  active?: boolean;
};

type RoadmapNode = Node<RoadmapNodeData>;
type RoadmapEdge = Edge<{ tracks: TrackId[] }>;

const tracks: Array<{
  id: TrackId;
  label: string;
  description: string;
}> = [
  { id: 'frontend', label: 'Frontend', description: 'Interfaces, browser, React e aplicações web modernas.' },
  { id: 'backend', label: 'Backend', description: 'APIs, autenticação, persistência e serviços.' },
  { id: 'fullstack', label: 'Full Stack', description: 'Caminho integrado do navegador ao deploy.' },
  { id: 'database', label: 'Banco de Dados', description: 'Modelagem, SQL, bancos relacionais e NoSQL.' },
  { id: 'devops', label: 'DevOps & Cloud', description: 'Linux, containers, proxy, cloud e infraestrutura.' },
];

const node = (
  id: string,
  title: string,
  subtitle: string,
  x: number,
  y: number,
  group: RoadmapNodeData['group'],
  tracksForNode: TrackId[],
  slug?: string,
): RoadmapNode => ({
  id,
  type: 'roadmap',
  position: { x, y },
  data: { title, subtitle, group, tracks: tracksForNode, slug },
  sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
});

const baseNodes: RoadmapNode[] = [
  node('start', 'Base da Web', 'Como a web funciona, terminal e lógica', 440, 0, 'foundation', ['frontend', 'backend', 'fullstack', 'database', 'devops']),
  node('html', 'HTML5', 'Estrutura e semântica', 0, 150, 'frontend', ['frontend', 'fullstack'], 'html5'),
  node('css', 'CSS3', 'Layout, responsividade e estilos', 0, 290, 'frontend', ['frontend', 'fullstack'], 'css3'),
  node('js', 'JavaScript', 'Linguagem da web', 0, 430, 'frontend', ['frontend', 'backend', 'fullstack'], 'javascript'),
  node('ts', 'TypeScript', 'Tipagem e contratos', 0, 570, 'frontend', ['frontend', 'backend', 'fullstack'], 'typescript'),
  node('react', 'React', 'Componentes e estado', 0, 710, 'frontend', ['frontend', 'fullstack'], 'react'),
  node('vite', 'Vite', 'Tooling e build', 0, 850, 'frontend', ['frontend'], 'vite'),
  node('tailwind', 'Tailwind CSS', 'Design utilitário', 0, 990, 'frontend', ['frontend'], 'tailwind-css'),
  node('axios', 'Axios', 'Consumo de APIs', 0, 1130, 'frontend', ['frontend'], 'axios'),
  node('next', 'Next.js', 'Aplicações React full stack', 0, 1270, 'frontend', ['frontend', 'fullstack'], 'next-js'),

  node('node', 'Node.js', 'JavaScript no servidor', 360, 710, 'backend', ['backend', 'fullstack'], 'node-js'),
  node('express', 'Express', 'Servidor HTTP e rotas', 360, 850, 'backend', ['backend', 'fullstack'], 'express'),
  node('rest', 'REST API', 'Recursos, verbos e contratos', 360, 990, 'backend', ['backend', 'fullstack'], 'rest-api'),
  node('jwt', 'JWT', 'Autenticação baseada em token', 360, 1130, 'backend', ['backend', 'fullstack'], 'jwt'),
  node('swagger', 'Swagger', 'Documentação de API', 360, 1270, 'backend', ['backend'], 'swagger'),
  node('java', 'Java', 'Backend tipado e ecossistema JVM', 720, 430, 'backend', ['backend'], 'java'),
  node('spring', 'Spring Boot', 'APIs e serviços Java', 720, 570, 'backend', ['backend'], 'spring-boot'),
  node('python', 'Python', 'Automação e backend', 720, 710, 'backend', ['backend'], 'python'),

  node('sql', 'SQL', 'Consulta e manipulação de dados', 720, 850, 'database', ['database', 'backend', 'fullstack'], 'sql'),
  node('postgres', 'PostgreSQL', 'Banco relacional principal', 720, 990, 'database', ['database', 'backend', 'fullstack'], 'postgresql'),
  node('prisma', 'Prisma', 'ORM tipado', 720, 1130, 'database', ['database', 'backend', 'fullstack'], 'prisma'),
  node('sequelize', 'Sequelize', 'ORM para Node.js', 720, 1270, 'database', ['database', 'backend'], 'sequelize'),
  node('mysql', 'MySQL', 'Banco relacional', 1040, 990, 'database', ['database'], 'mysql'),
  node('sqlserver', 'SQL Server', 'Banco relacional Microsoft', 1040, 1130, 'database', ['database'], 'sql-server'),
  node('mongo', 'MongoDB', 'Banco orientado a documentos', 1040, 1270, 'database', ['database'], 'mongodb'),
  node('redis', 'Redis', 'Cache e estruturas em memória', 1040, 1410, 'database', ['database'], 'redis'),
  node('dbeaver', 'DBeaver', 'Cliente universal de banco', 720, 1410, 'database', ['database'], 'dbeaver'),

  node('bash', 'Bash', 'Automação no terminal', 1360, 150, 'devops', ['devops'], 'bash'),
  node('linux', 'Linux', 'Fundamentos do sistema', 1360, 290, 'devops', ['devops'], 'linux'),
  node('ubuntu', 'Ubuntu', 'Administração prática', 1360, 430, 'devops', ['devops'], 'ubuntu'),
  node('github', 'GitHub', 'Versionamento e colaboração', 1360, 570, 'devops', ['devops', 'frontend', 'backend', 'fullstack'], 'github'),
  node('docker', 'Docker', 'Containers e ambientes', 1360, 710, 'devops', ['devops', 'backend', 'fullstack'], 'docker'),
  node('nginx', 'Nginx', 'Proxy reverso e entrega web', 1360, 850, 'devops', ['devops', 'fullstack'], 'nginx'),
  node('azure', 'Azure', 'Cloud e serviços', 1360, 990, 'devops', ['devops'], 'azure'),
  node('terraform', 'Terraform', 'Infraestrutura como código', 1360, 1130, 'devops', ['devops'], 'terraform'),

  node('frontend-goal', 'Frontend pronto', 'Construa interfaces completas e integradas', 0, 1470, 'goal', ['frontend']),
  node('backend-goal', 'Backend pronto', 'APIs seguras, documentadas e persistentes', 360, 1470, 'goal', ['backend']),
  node('fullstack-goal', 'Full Stack', 'Do HTML ao deploy de uma aplicação completa', 360, 1610, 'goal', ['fullstack']),
  node('database-goal', 'Dados dominados', 'Modelagem, consulta e operação de bancos', 880, 1550, 'goal', ['database']),
  node('devops-goal', 'Deploy e infraestrutura', 'Publique e opere aplicações com segurança', 1360, 1270, 'goal', ['devops']),
];

const edge = (id: string, source: string, target: string, tracksForEdge: TrackId[]): RoadmapEdge => ({
  id,
  source,
  target,
  type: 'smoothstep',
  markerEnd: { type: MarkerType.ArrowClosed },
  data: { tracks: tracksForEdge },
});

const baseEdges: RoadmapEdge[] = [
  edge('e-start-html', 'start', 'html', ['frontend', 'fullstack']),
  edge('e-html-css', 'html', 'css', ['frontend', 'fullstack']),
  edge('e-css-js', 'css', 'js', ['frontend', 'fullstack']),
  edge('e-start-js', 'start', 'js', ['backend']),
  edge('e-js-ts', 'js', 'ts', ['frontend', 'backend', 'fullstack']),
  edge('e-ts-react', 'ts', 'react', ['frontend', 'fullstack']),
  edge('e-react-vite', 'react', 'vite', ['frontend']),
  edge('e-vite-tailwind', 'vite', 'tailwind', ['frontend']),
  edge('e-tailwind-axios', 'tailwind', 'axios', ['frontend']),
  edge('e-axios-next', 'axios', 'next', ['frontend']),
  edge('e-react-next', 'react', 'next', ['fullstack']),
  edge('e-next-frontend-goal', 'next', 'frontend-goal', ['frontend']),

  edge('e-ts-node', 'ts', 'node', ['backend', 'fullstack']),
  edge('e-node-express', 'node', 'express', ['backend', 'fullstack']),
  edge('e-express-rest', 'express', 'rest', ['backend', 'fullstack']),
  edge('e-rest-jwt', 'rest', 'jwt', ['backend', 'fullstack']),
  edge('e-jwt-swagger', 'jwt', 'swagger', ['backend']),
  edge('e-swagger-backend-goal', 'swagger', 'backend-goal', ['backend']),

  edge('e-start-java', 'start', 'java', ['backend']),
  edge('e-java-spring', 'java', 'spring', ['backend']),
  edge('e-spring-rest', 'spring', 'rest', ['backend']),
  edge('e-start-python', 'start', 'python', ['backend']),
  edge('e-python-rest', 'python', 'rest', ['backend']),

  edge('e-start-sql', 'start', 'sql', ['database']),
  edge('e-rest-sql', 'rest', 'sql', ['backend', 'fullstack']),
  edge('e-sql-postgres', 'sql', 'postgres', ['database', 'backend', 'fullstack']),
  edge('e-postgres-prisma', 'postgres', 'prisma', ['database', 'backend', 'fullstack']),
  edge('e-prisma-sequelize', 'prisma', 'sequelize', ['database']),
  edge('e-postgres-mysql', 'postgres', 'mysql', ['database']),
  edge('e-mysql-sqlserver', 'mysql', 'sqlserver', ['database']),
  edge('e-sqlserver-mongo', 'sqlserver', 'mongo', ['database']),
  edge('e-mongo-redis', 'mongo', 'redis', ['database']),
  edge('e-sequelize-dbeaver', 'sequelize', 'dbeaver', ['database']),
  edge('e-redis-database-goal', 'redis', 'database-goal', ['database']),
  edge('e-dbeaver-database-goal', 'dbeaver', 'database-goal', ['database']),

  edge('e-start-bash', 'start', 'bash', ['devops']),
  edge('e-bash-linux', 'bash', 'linux', ['devops']),
  edge('e-linux-ubuntu', 'linux', 'ubuntu', ['devops']),
  edge('e-ubuntu-github', 'ubuntu', 'github', ['devops']),
  edge('e-github-docker', 'github', 'docker', ['devops']),
  edge('e-docker-nginx', 'docker', 'nginx', ['devops', 'fullstack']),
  edge('e-nginx-azure', 'nginx', 'azure', ['devops']),
  edge('e-azure-terraform', 'azure', 'terraform', ['devops']),
  edge('e-terraform-devops-goal', 'terraform', 'devops-goal', ['devops']),

  edge('e-prisma-docker', 'prisma', 'docker', ['fullstack']),
  edge('e-nginx-fullstack-goal', 'nginx', 'fullstack-goal', ['fullstack']),
];

function RoadmapNodeCard({ data }: NodeProps) {
  const nodeData = data as RoadmapNodeData;
  const icon = nodeData.slug ? getTechnologyIcon('curso-' + nodeData.slug) || getTechnologyIcon(nodeData.slug) : '';
  const content = (
    <>
      <div className="roadmap-node-icon" aria-hidden="true">
        {icon ? <img src={icon} alt="" /> : nodeData.group === 'goal' ? <CheckCircle2 size={22} /> : <BookOpen size={22} />}
      </div>
      <div className="roadmap-node-copy">
        <strong>{nodeData.title}</strong>
        <span>{nodeData.subtitle}</span>
      </div>
      {nodeData.slug && <ArrowRight size={16} className="roadmap-node-arrow" aria-hidden="true" />}
    </>
  );

  return (
    <div className={'roadmap-node-card group-' + nodeData.group + (nodeData.active ? ' is-active' : ' is-muted')}>
      <Handle type="target" position={Position.Top} className="roadmap-handle" />
      {nodeData.slug ? (
        <Link
          className="roadmap-node-link nodrag nopan"
          to={'/curso/curso-' + nodeData.slug}
          aria-label={'Abrir curso de ' + nodeData.title}
        >
          {content}
        </Link>
      ) : (
        <div className="roadmap-node-static">{content}</div>
      )}
      <Handle type="source" position={Position.Bottom} className="roadmap-handle" />
    </div>
  );
}

const nodeTypes = { roadmap: RoadmapNodeCard };

function TrackIcon({ id }: { id: TrackId }) {
  if (id === 'frontend') return <Compass size={18} />;
  if (id === 'backend') return <Server size={18} />;
  if (id === 'database') return <Database size={18} />;
  if (id === 'devops') return <Wrench size={18} />;
  return <CheckCircle2 size={18} />;
}

export function RoadmapPage() {
  const [selectedTrack, setSelectedTrack] = useState<TrackId>('fullstack');
  const selected = tracks.find((track) => track.id === selectedTrack)!;

  const nodes = useMemo(
    () =>
      baseNodes.map((item) => ({
        ...item,
        data: {
          ...item.data,
          active: item.data.tracks.includes(selectedTrack),
        },
        zIndex: item.data.tracks.includes(selectedTrack) ? 3 : 1,
      })),
    [selectedTrack],
  );

  const edges = useMemo(
    () =>
      baseEdges.map((item) => {
        const active = item.data?.tracks.includes(selectedTrack) ?? false;
        return {
          ...item,
          animated: active,
          zIndex: active ? 2 : 0,
          style: {
            stroke: active ? '#F2C53D' : '#33404f',
            strokeWidth: active ? 3.2 : 1.4,
            opacity: active ? 1 : 0.28,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: active ? '#F2C53D' : '#33404f',
            width: active ? 20 : 14,
            height: active ? 20 : 14,
          },
        };
      }),
    [selectedTrack],
  );

  return (
    <main id="main-content" className="roadmap-page">
      <section className="roadmap-hero">
        <div>
          <p className="roadmap-kicker">Roteiro de aprendizagem</p>
          <h1>Escolha uma direção. Veja o caminho inteiro.</h1>
          <p>
            Cada rota destaca, em ordem, as tecnologias recomendadas. Os nós com curso disponível levam diretamente
            para o respectivo conteúdo.
          </p>
        </div>
        <div className="roadmap-hero-badge" aria-hidden="true">
          <Compass size={30} />
          <span>Roadmap interativo</span>
        </div>
      </section>

      <section className="roadmap-track-selector" aria-label="Selecionar trilha de aprendizagem">
        {tracks.map((track) => (
          <button
            type="button"
            key={track.id}
            className={track.id === selectedTrack ? 'is-selected' : ''}
            onClick={() => setSelectedTrack(track.id)}
            aria-pressed={track.id === selectedTrack}
          >
            <TrackIcon id={track.id} />
            <span>{track.label}</span>
          </button>
        ))}
      </section>

      <section className="roadmap-current-track">
        <div>
          <span>Trilha selecionada</span>
          <strong>{selected.label}</strong>
          <p>{selected.description}</p>
        </div>
        <div className="roadmap-legend" aria-label="Legenda do roadmap">
          <span><i className="legend-active" /> caminho recomendado</span>
          <span><i className="legend-muted" /> outras possibilidades</span>
        </div>
      </section>

      <section className="roadmap-flow-shell" aria-label={'Roadmap de ' + selected.label}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.12 }}
          minZoom={0.38}
          maxZoom={1.35}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background variant={BackgroundVariant.Dots} gap={24} size={1.2} color="#29323d" />
          <MiniMap
            pannable
            zoomable
            nodeColor={(item) => {
              const data = item.data as RoadmapNodeData;
              return data.active ? '#F2C53D' : '#263241';
            }}
            maskColor="rgba(5, 9, 14, .76)"
          />
          <Controls showInteractive={false} />
        </ReactFlow>
      </section>

      <p className="roadmap-help">
        O roadmap é uma orientação, não uma regra rígida. Você pode abrir qualquer tecnologia a qualquer momento.
      </p>
    </main>
  );
}
