import type { CourseDefinition } from '../types/course';
import { aula01HtmlCss } from './fullstack/aula-01-html-css';

export const catalog: CourseDefinition[] = [
  {
    slug: 'programador-full-stack',
    title: 'Programador Full Stack',
    description: 'Materiais progressivos organizados por unidade curricular, módulo e aula de 4 horas.',
    ucs: [
      {
        slug: 'desenvolvimento-front-end',
        title: 'Desenvolvimento Front-End',
        description: 'Estrutura, apresentação e comportamento no navegador.',
        modules: [
          {
            slug: 'html-css',
            title: 'HTML e CSS',
            description: 'Fundamentos da Web, HTML semântico, CSS, responsividade e acessibilidade.',
            status: 'active',
            lessons: [aula01HtmlCss]
          },
          {
            slug: 'javascript',
            title: 'JavaScript',
            description: 'Lógica, linguagem, DOM, eventos, APIs e modularização.',
            status: 'planned',
            lessons: []
          },
          {
            slug: 'react',
            title: 'React',
            description: 'Componentes, estado, efeitos, roteamento, formulários e consumo de APIs.',
            status: 'planned',
            lessons: []
          }
        ]
      },
      {
        slug: 'desenvolvimento-back-end',
        title: 'Desenvolvimento Back-End',
        description: 'Node.js, APIs, persistência, autenticação e arquitetura.',
        modules: [
          {
            slug: 'node-api',
            title: 'Node.js e APIs',
            description: 'Conteúdo será incorporado após a trilha Front-End.',
            status: 'planned',
            lessons: []
          }
        ]
      },
      {
        slug: 'projeto-integrador',
        title: 'Projeto Integrador em Programador Full Stack',
        description: 'Aplicação integrada das competências construídas ao longo do curso.',
        modules: [
          {
            slug: 'projeto',
            title: 'Projeto',
            description: 'Planejamento, construção, validação, apresentação e retrospectiva.',
            status: 'planned',
            lessons: []
          }
        ]
      }
    ]
  }
];

const technologySeeds = [
  ['javascript', 'JavaScript', 'Linguagens'], ['typescript', 'TypeScript', 'Linguagens'], ['java', 'Java', 'Linguagens'],
  ['python', 'Python', 'Linguagens'], ['html5', 'HTML5', 'Linguagens'], ['css3', 'CSS3', 'Linguagens'],
  ['sql', 'SQL', 'Linguagens'], ['bash', 'Bash', 'Linguagens'], ['node-js', 'Node.js', 'Backend'],
  ['express', 'Express', 'Backend'], ['spring-boot', 'Spring Boot', 'Backend'], ['rest-api', 'REST API', 'Backend'],
  ['jwt', 'JWT', 'Backend'], ['swagger', 'Swagger', 'Backend'], ['sequelize', 'Sequelize', 'Backend'],
  ['prisma', 'Prisma', 'Backend'], ['react', 'React', 'Frontend'], ['next-js', 'Next.js', 'Frontend'],
  ['vite', 'Vite', 'Frontend'], ['tailwind-css', 'Tailwind CSS', 'Frontend'], ['bootstrap', 'Bootstrap', 'Frontend'],
  ['sass', 'Sass', 'Frontend'], ['axios', 'Axios', 'Frontend'], ['figma', 'Figma', 'Frontend'],
  ['postgresql', 'PostgreSQL', 'Banco de Dados'], ['mysql', 'MySQL', 'Banco de Dados'], ['sql-server', 'SQL Server', 'Banco de Dados'],
  ['mongodb', 'MongoDB', 'Banco de Dados'], ['redis', 'Redis', 'Banco de Dados'], ['dbeaver', 'DBeaver', 'Banco de Dados'],
  ['docker', 'Docker', 'DevOps & Cloud'], ['docker-compose', 'Docker Compose', 'DevOps & Cloud'], ['azure', 'Azure', 'DevOps & Cloud'],
  ['github-actions', 'GitHub Actions', 'DevOps & Cloud'], ['terraform', 'Terraform', 'DevOps & Cloud'], ['nginx', 'Nginx', 'DevOps & Cloud'],
  ['linux', 'Linux', 'DevOps & Cloud'], ['ubuntu', 'Ubuntu', 'DevOps & Cloud'], ['jest', 'Jest', 'Testes'],
  ['vitest', 'Vitest', 'Testes'], ['postman', 'Postman', 'Testes'], ['insomnia', 'Insomnia', 'Testes'],
  ['git', 'Git', 'Versionamento & Colaboração'], ['github', 'GitHub', 'Versionamento & Colaboração'],
  ['conventional-commits', 'Conventional Commits', 'Versionamento & Colaboração'], ['grafana', 'Grafana', 'Observabilidade'],
  ['prometheus', 'Prometheus', 'Observabilidade'], ['datadog', 'Datadog', 'Observabilidade'], ['vs-code', 'VS Code', 'Ferramentas & Ambiente'],
  ['intellij-idea', 'IntelliJ IDEA', 'Ferramentas & Ambiente'], ['npm', 'npm', 'Ferramentas & Ambiente'],
  ['eslint', 'ESLint', 'Ferramentas & Ambiente'], ['prettier', 'Prettier', 'Ferramentas & Ambiente']
] as const;

export const technologyCourses: CourseDefinition[] = technologySeeds.map(([slug, title, category]) => ({
  slug: 'curso-' + slug,
  title,
  description: 'Curso de ' + title + ' · ' + category,
  ucs: [{
    slug: 'fundamentos-' + slug,
    title: 'Fundamentos de ' + title,
    description: 'Aulas e materiais de ' + title + '.',
    modules: [{ slug, title, description: 'Conteúdo em preparação.', status: slug === 'html5' || slug === 'css3' ? 'active' : 'planned', lessons: slug === 'html5' || slug === 'css3' ? [aula01HtmlCss] : [] }]
  }]
}))

export function findLesson(courseSlug: string, ucSlug: string, lessonSlug: string) {
  const course = catalog.find((item) => item.slug === courseSlug);
  const uc = course?.ucs.find((item) => item.slug === ucSlug);

  for (const module of uc?.modules ?? []) {
    const lesson = module.lessons.find((item) => item.slug === lessonSlug);
    if (lesson) return { course, uc, module, lesson };
  }

  return null;
}
