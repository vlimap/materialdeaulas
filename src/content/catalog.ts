import type { CourseDefinition } from '../types/course';
import { htmlCourse, htmlLessons } from './html/course';

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
            description: 'HTML semântico primeiro; CSS entra na sequência da trilha.',
            status: 'active',
            lessons: htmlLessons
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
  ['logic-programming', 'Lógica de Programação', 'Fundamentos de Software'],
  ['algorithms', 'Algoritmos', 'Fundamentos de Software'],
  ['data-structures', 'Estruturas de Dados', 'Fundamentos de Software'],
  ['oop', 'Programação Orientada a Objetos', 'Fundamentos de Software'],
  ['computer-networks', 'Redes para Desenvolvedores', 'Fundamentos de Software'],
  ['http', 'HTTP', 'Fundamentos de Software'],
  ['terminal-cli', 'Terminal & CLI', 'Fundamentos de Software'],

  ['brd', 'BRD', 'Análise & Requisitos'],
  ['srs', 'SRS', 'Análise & Requisitos'],
  ['requirements-engineering', 'Engenharia de Requisitos', 'Análise & Requisitos'],
  ['requirements-elicitation', 'Elicitação de Requisitos', 'Análise & Requisitos'],
  ['functional-requirements', 'Requisitos Funcionais', 'Análise & Requisitos'],
  ['non-functional-requirements', 'Requisitos Não Funcionais', 'Análise & Requisitos'],
  ['business-rules', 'Regras de Negócio', 'Análise & Requisitos'],
  ['stakeholders', 'Stakeholders', 'Análise & Requisitos'],
  ['user-stories', 'Histórias de Usuário', 'Análise & Requisitos'],
  ['acceptance-criteria', 'Critérios de Aceitação', 'Análise & Requisitos'],
  ['use-cases', 'Casos de Uso', 'Análise & Requisitos'],
  ['requirements-traceability', 'Rastreabilidade de Requisitos', 'Análise & Requisitos'],

  ['uml', 'UML', 'Modelagem'],
  ['bpmn', 'BPMN', 'Modelagem'],
  ['c4-model', 'C4 Model', 'Modelagem'],
  ['er-modeling', 'Modelagem ER', 'Modelagem'],
  ['sequence-diagrams', 'Diagrama de Sequência', 'Modelagem'],
  ['activity-diagrams', 'Diagrama de Atividades', 'Modelagem'],

  ['software-architecture', 'Arquitetura de Software', 'Arquitetura & Design'],
  ['mvc', 'MVC', 'Arquitetura & Design'],
  ['layered-architecture', 'Arquitetura em Camadas', 'Arquitetura & Design'],
  ['clean-architecture', 'Clean Architecture', 'Arquitetura & Design'],
  ['hexagonal-architecture', 'Arquitetura Hexagonal', 'Arquitetura & Design'],
  ['ddd', 'Domain-Driven Design', 'Arquitetura & Design'],
  ['solid', 'SOLID', 'Arquitetura & Design'],
  ['design-patterns', 'Design Patterns', 'Arquitetura & Design'],
  ['refactoring', 'Refatoração', 'Arquitetura & Design'],
  ['distributed-systems', 'Sistemas Distribuídos', 'Arquitetura & Design'],
  ['microservices', 'Microservices', 'Arquitetura & Design'],
  ['modular-monolith', 'Monólito Modular', 'Arquitetura & Design'],

  ['javascript', 'JavaScript', 'Linguagens'],
  ['typescript', 'TypeScript', 'Linguagens'],
  ['java', 'Java', 'Linguagens'],
  ['python', 'Python', 'Linguagens'],
  ['html5', 'HTML5', 'Linguagens'],
  ['css3', 'CSS3', 'Linguagens'],
  ['sql', 'SQL', 'Linguagens'],
  ['bash', 'Bash', 'Linguagens'],

  ['react', 'React', 'Frontend'],
  ['next-js', 'Next.js', 'Frontend'],
  ['vite', 'Vite', 'Frontend'],
  ['tailwind-css', 'Tailwind CSS', 'Frontend'],
  ['bootstrap', 'Bootstrap', 'Frontend'],
  ['sass', 'Sass', 'Frontend'],
  ['axios', 'Axios', 'Frontend'],

  ['node-js', 'Node.js', 'Backend'],
  ['express', 'Express', 'Backend'],
  ['spring-boot', 'Spring Boot', 'Backend'],
  ['jwt', 'JWT', 'Backend'],
  ['sequelize', 'Sequelize', 'Backend'],
  ['prisma', 'Prisma', 'Backend'],

  ['rest-api', 'REST API', 'APIs & Integrações'],
  ['openapi', 'OpenAPI', 'APIs & Integrações'],
  ['swagger', 'Swagger', 'APIs & Integrações'],
  ['graphql', 'GraphQL', 'APIs & Integrações'],
  ['websocket', 'WebSocket', 'APIs & Integrações'],
  ['webhooks', 'Webhooks', 'APIs & Integrações'],
  ['grpc', 'gRPC', 'APIs & Integrações'],
  ['oauth2-oidc', 'OAuth 2.0 & OpenID Connect', 'APIs & Integrações'],
  ['api-versioning', 'Versionamento de APIs', 'APIs & Integrações'],

  ['postgresql', 'PostgreSQL', 'Banco de Dados'],
  ['mysql', 'MySQL', 'Banco de Dados'],
  ['sql-server', 'SQL Server', 'Banco de Dados'],
  ['mongodb', 'MongoDB', 'Banco de Dados'],
  ['redis', 'Redis', 'Banco de Dados'],
  ['dbeaver', 'DBeaver', 'Banco de Dados'],
  ['database-modeling', 'Modelagem de Banco', 'Banco de Dados'],
  ['database-migrations', 'Migrations', 'Banco de Dados'],

  ['react-native', 'React Native', 'Mobile'],
  ['flutter', 'Flutter', 'Mobile'],
  ['android', 'Android', 'Mobile'],
  ['ios', 'iOS', 'Mobile'],
  ['mobile-architecture', 'Arquitetura Mobile', 'Mobile'],
  ['mobile-storage', 'Persistência Mobile', 'Mobile'],
  ['mobile-release', 'Publicação de Apps', 'Mobile'],

  ['figma', 'Figma', 'UX/UI & Acessibilidade'],
  ['ux-ui', 'UX/UI', 'UX/UI & Acessibilidade'],
  ['wireframes', 'Wireframes', 'UX/UI & Acessibilidade'],
  ['prototyping', 'Prototipagem', 'UX/UI & Acessibilidade'],
  ['design-system', 'Design System', 'UX/UI & Acessibilidade'],
  ['nielsen-heuristics', 'Heurísticas de Nielsen', 'UX/UI & Acessibilidade'],
  ['wcag', 'WCAG', 'UX/UI & Acessibilidade'],
  ['aria', 'ARIA', 'UX/UI & Acessibilidade'],
  ['keyboard-accessibility', 'Acessibilidade por Teclado', 'UX/UI & Acessibilidade'],

  ['unit-testing', 'Testes Unitários', 'Testes & Qualidade'],
  ['integration-testing', 'Testes de Integração', 'Testes & Qualidade'],
  ['e2e-testing', 'Testes E2E', 'Testes & Qualidade'],
  ['test-strategy', 'Estratégia de Testes', 'Testes & Qualidade'],
  ['tdd', 'TDD', 'Testes & Qualidade'],
  ['bdd', 'BDD', 'Testes & Qualidade'],
  ['jest', 'Jest', 'Testes & Qualidade'],
  ['vitest', 'Vitest', 'Testes & Qualidade'],
  ['playwright', 'Playwright', 'Testes & Qualidade'],
  ['cypress', 'Cypress', 'Testes & Qualidade'],
  ['postman', 'Postman', 'Testes & Qualidade'],
  ['insomnia', 'Insomnia', 'Testes & Qualidade'],
  ['accessibility-testing', 'Testes de Acessibilidade', 'Testes & Qualidade'],
  ['quality-gates', 'Quality Gates', 'Testes & Qualidade'],

  ['owasp-top-10', 'OWASP Top 10', 'Segurança'],
  ['secure-coding', 'Secure Coding', 'Segurança'],
  ['authentication', 'Autenticação', 'Segurança'],
  ['authorization', 'Autorização', 'Segurança'],
  ['threat-modeling', 'Threat Modeling', 'Segurança'],
  ['secrets-management', 'Gestão de Segredos', 'Segurança'],
  ['dependency-security', 'Segurança de Dependências', 'Segurança'],
  ['security-headers', 'Security Headers', 'Segurança'],

  ['web-performance', 'Performance Web', 'Performance'],
  ['core-web-vitals', 'Core Web Vitals', 'Performance'],
  ['caching', 'Cache', 'Performance'],
  ['database-performance', 'Performance de Banco', 'Performance'],
  ['load-testing', 'Teste de Carga', 'Performance'],
  ['profiling', 'Profiling', 'Performance'],

  ['docker', 'Docker', 'DevOps & Cloud'],
  ['docker-compose', 'Docker Compose', 'DevOps & Cloud'],
  ['ci-cd', 'CI/CD', 'DevOps & Cloud'],
  ['azure', 'Azure', 'DevOps & Cloud'],
  ['github-actions', 'GitHub Actions', 'DevOps & Cloud'],
  ['terraform', 'Terraform', 'DevOps & Cloud'],
  ['nginx', 'Nginx', 'DevOps & Cloud'],
  ['linux', 'Linux', 'DevOps & Cloud'],
  ['ubuntu', 'Ubuntu', 'DevOps & Cloud'],
  ['environments', 'Ambientes', 'DevOps & Cloud'],
  ['feature-flags', 'Feature Flags', 'DevOps & Cloud'],

  ['logs', 'Logs', 'Observabilidade & SRE'],
  ['metrics', 'Métricas', 'Observabilidade & SRE'],
  ['distributed-tracing', 'Tracing Distribuído', 'Observabilidade & SRE'],
  ['opentelemetry', 'OpenTelemetry', 'Observabilidade & SRE'],
  ['prometheus', 'Prometheus', 'Observabilidade & SRE'],
  ['grafana', 'Grafana', 'Observabilidade & SRE'],
  ['datadog', 'Datadog', 'Observabilidade & SRE'],
  ['health-checks', 'Health Checks', 'Observabilidade & SRE'],
  ['sli-slo-sla', 'SLI, SLO & SLA', 'Observabilidade & SRE'],

  ['git', 'Git', 'Versionamento & Colaboração'],
  ['github', 'GitHub', 'Versionamento & Colaboração'],
  ['branching-strategies', 'Estratégias de Branch', 'Versionamento & Colaboração'],
  ['code-review', 'Code Review', 'Versionamento & Colaboração'],
  ['pull-requests', 'Pull Requests', 'Versionamento & Colaboração'],
  ['conventional-commits', 'Conventional Commits', 'Versionamento & Colaboração'],
  ['semantic-versioning', 'Semantic Versioning', 'Versionamento & Colaboração'],

  ['scrum', 'Scrum', 'Gestão Ágil & Produto'],
  ['kanban', 'Kanban', 'Gestão Ágil & Produto'],
  ['xp', 'Extreme Programming', 'Gestão Ágil & Produto'],
  ['backlog', 'Backlog', 'Gestão Ágil & Produto'],
  ['estimation', 'Estimativas', 'Gestão Ágil & Produto'],
  ['product-discovery', 'Product Discovery', 'Gestão Ágil & Produto'],
  ['mvp', 'MVP', 'Gestão Ágil & Produto'],
  ['product-roadmap', 'Roadmap de Produto', 'Gestão Ágil & Produto'],
  ['product-metrics', 'Métricas de Produto', 'Gestão Ágil & Produto'],

  ['readme', 'README', 'Documentação'],
  ['adr', 'ADR', 'Documentação'],
  ['api-documentation', 'Documentação de API', 'Documentação'],
  ['architecture-documentation', 'Documentação de Arquitetura', 'Documentação'],
  ['runbooks', 'Runbooks', 'Documentação'],
  ['changelog', 'Changelog', 'Documentação'],

  ['deployment-strategies', 'Estratégias de Deploy', 'Entrega & Operação'],
  ['rollback', 'Rollback', 'Entrega & Operação'],
  ['blue-green', 'Blue-Green Deployment', 'Entrega & Operação'],
  ['canary-release', 'Canary Release', 'Entrega & Operação'],
  ['incident-management', 'Gestão de Incidentes', 'Entrega & Operação'],
  ['maintenance', 'Manutenção de Software', 'Entrega & Operação'],

  ['ai-assisted-development', 'IA no Desenvolvimento', 'IA para Desenvolvimento'],
  ['coding-agents', 'Agentes de Código', 'IA para Desenvolvimento'],
  ['mcp', 'MCP', 'IA para Desenvolvimento'],
  ['rag', 'RAG', 'IA para Desenvolvimento'],
  ['llm-evals', 'Avaliação de LLMs', 'IA para Desenvolvimento'],
  ['prompt-engineering', 'Prompt Engineering', 'IA para Desenvolvimento'],

  ['vs-code', 'VS Code', 'Ferramentas & Ambiente'],
  ['intellij-idea', 'IntelliJ IDEA', 'Ferramentas & Ambiente'],
  ['npm', 'npm', 'Ferramentas & Ambiente'],
  ['eslint', 'ESLint', 'Ferramentas & Ambiente'],
  ['prettier', 'Prettier', 'Ferramentas & Ambiente']
] as const;

export const technologyCourses: CourseDefinition[] = technologySeeds.map(([slug, title, category]) => {
  if (slug === 'html5') return htmlCourse;

  return {
    slug: 'curso-' + slug,
    title,
    description: 'Curso de ' + title + ' · ' + category,
    ucs: [{
      slug: 'fundamentos-' + slug,
      title: 'Fundamentos de ' + title,
      description: 'Aulas e materiais de ' + title + '.',
      modules: [{
        slug,
        title,
        description: 'Conteúdo em preparação.',
        status: 'planned',
        lessons: []
      }]
    }]
  };
});

export function findLesson(courseSlug: string, ucSlug: string, lessonSlug: string) {
  const course = [...catalog, ...technologyCourses].find((item) => item.slug === courseSlug);
  if (!course) return null;

  const uc = course.ucs.find((item) => item.slug === ucSlug);
  if (!uc) return null;

  for (const module of uc.modules) {
    const lesson = module.lessons.find((item) => item.slug === lessonSlug);
    if (lesson && lesson.status !== 'planned' && lesson.slides.length > 0) {
      return { course, uc, module, lesson };
    }
  }

  return null;
}


export type CourseLessonNavigationItem = {
  id: string;
  number: number;
  shortTitle: string;
  title: string;
  durationMinutes: number;
  published: boolean;
  href: string;
};

export function getCourseLessonNavigation(courseSlug: string): CourseLessonNavigationItem[] {
  const course = [...catalog, ...technologyCourses].find((item) => item.slug === courseSlug);
  if (!course) return [];

  return course.ucs.flatMap((uc) =>
    uc.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({
        id: lesson.id,
        number: lesson.number,
        shortTitle: lesson.shortTitle,
        title: lesson.title,
        durationMinutes: lesson.durationMinutes,
        published: lesson.status !== 'planned' && lesson.slides.length > 0,
        href:
          '/curso/' +
          course.slug +
          '/uc/' +
          uc.slug +
          '/aula/' +
          lesson.slug
      }))
    )
  );
}
