import type { CourseDefinition, LessonDefinition } from '../../types/course';
import { aula01Sdlc } from './aula-01-sdlc';

function plannedLesson(
  number: number,
  slug: string,
  title: string,
  shortTitle: string,
  objectives: string[]
): LessonDefinition {
  const padded = String(number).padStart(2, '0');

  return {
    id: 'sdlc-aula-' + padded,
    status: 'planned',
    slug,
    number,
    title,
    shortTitle,
    durationMinutes: 240,
    audience: 'Iniciantes em desenvolvimento e engenharia de software',
    ucSlug: 'fundamentos-sdlc',
    objectives,
    slides: []
  };
}

export const sdlcLessons: LessonDefinition[] = [
  aula01Sdlc,
  plannedLesson(
    2,
    'aula-02-discovery-problema-viabilidade',
    'SDLC: discovery, problema, stakeholders e viabilidade',
    'Discovery e viabilidade',
    [
      'Definir problema, contexto e resultado esperado antes de propor solução.',
      'Identificar stakeholders, necessidades, restrições e conflitos.',
      'Analisar viabilidade técnica, econômica, operacional e de prazo.',
      'Registrar riscos e premissas iniciais.'
    ]
  ),
  plannedLesson(
    3,
    'aula-03-requisitos-rastreabilidade',
    'SDLC: requisitos, critérios de aceitação e rastreabilidade',
    'Requisitos',
    [
      'Distinguir requisitos funcionais, não funcionais e regras de negócio.',
      'Relacionar BRD, SRS, histórias de usuário e critérios de aceitação.',
      'Validar requisitos quanto a clareza, necessidade e verificabilidade.',
      'Construir rastreabilidade entre necessidade, requisito, implementação e teste.'
    ]
  ),
  plannedLesson(
    4,
    'aula-04-analise-modelagem',
    'SDLC: análise e modelagem da solução',
    'Análise e modelagem',
    [
      'Modelar processos e comportamento com técnicas adequadas ao problema.',
      'Relacionar UML, BPMN, C4 e modelagem de dados ao ciclo de vida.',
      'Usar modelos para reduzir ambiguidades antes da implementação.',
      'Revisar modelos com stakeholders e equipe técnica.'
    ]
  ),
  plannedLesson(
    5,
    'aula-05-planejamento-riscos-qualidade',
    'SDLC: planejamento, estimativas, riscos e estratégia de qualidade',
    'Planejamento',
    [
      'Decompor escopo em trabalho executável.',
      'Relacionar estimativas, dependências, riscos e prioridades.',
      'Planejar critérios de qualidade desde o início.',
      'Definir marcos, gates e evidências necessárias para avançar.'
    ]
  ),
  plannedLesson(
    6,
    'aula-06-design-arquitetura-decisoes',
    'SDLC: design, arquitetura e decisões técnicas',
    'Design e arquitetura',
    [
      'Identificar drivers arquiteturais e atributos de qualidade.',
      'Relacionar UX, arquitetura, dados e segurança ao design da solução.',
      'Registrar decisões e trade-offs com ADRs.',
      'Reconhecer quando uma decisão deve ser revisitada.'
    ]
  ),
  plannedLesson(
    7,
    'aula-07-implementacao-integracao',
    'SDLC: implementação, versionamento, revisão e integração',
    'Implementação',
    [
      'Organizar implementação com versionamento e fluxo de colaboração.',
      'Aplicar revisão de código e integração contínua.',
      'Relacionar build reproduzível e automação à qualidade.',
      'Manter rastreabilidade entre requisitos e mudanças no código.'
    ]
  ),
  plannedLesson(
    8,
    'aula-08-verificacao-validacao-testes',
    'SDLC: verificação, validação e estratégia de testes',
    'V&V e testes',
    [
      'Distinguir verificação de validação.',
      'Relacionar níveis de teste aos riscos do produto.',
      'Definir evidências para critérios de aceitação.',
      'Integrar QA ao ciclo sem concentrar qualidade no final.'
    ]
  ),
  plannedLesson(
    9,
    'aula-09-release-deploy',
    'SDLC: release, CI/CD, deploy e rollback',
    'Release e deploy',
    [
      'Distinguir build, release e deploy.',
      'Organizar ambientes e pipelines de entrega.',
      'Comparar estratégias de deploy e rollback.',
      'Definir critérios de prontidão para produção.'
    ]
  ),
  plannedLesson(
    10,
    'aula-10-operacao-observabilidade-incidentes',
    'SDLC: operação, observabilidade e gestão de incidentes',
    'Operação',
    [
      'Relacionar logs, métricas e traces à operação do software.',
      'Definir health checks e indicadores de serviço.',
      'Organizar resposta e aprendizado de incidentes.',
      'Usar feedback de produção para alimentar novas decisões.'
    ]
  ),
  plannedLesson(
    11,
    'aula-11-manutencao-divida-retirada',
    'SDLC: manutenção, dívida técnica, legado e retirada',
    'Manutenção e retirada',
    [
      'Distinguir manutenção corretiva, adaptativa e evolutiva.',
      'Avaliar dívida técnica e impacto de mudanças.',
      'Planejar modernização de sistemas legados.',
      'Tratar retirada de software e dados como parte do ciclo.'
    ]
  ),
  plannedLesson(
    12,
    'aula-12-modelos-projeto-final',
    'SDLC: modelos de ciclo de vida e projeto final',
    'Modelos e projeto final',
    [
      'Comparar abordagens sequenciais, iterativas, incrementais, ágeis e DevOps.',
      'Escolher uma abordagem compatível com contexto, risco e feedback.',
      'Construir um mapa completo do ciclo de vida de um produto.',
      'Apresentar artefatos, decisões, gates, feedbacks e estratégia de evolução.'
    ]
  )
];

export const sdlcCourse: CourseDefinition = {
  slug: 'curso-sdlc',
  title: 'Ciclo de Vida de Software (SDLC)',
  description: 'Curso completo de SDLC · Fundamentos de Software',
  ucs: [
    {
      slug: 'fundamentos-sdlc',
      title: 'Ciclo de vida de software do problema à evolução',
      description:
        'Visão completa do software como produto vivo: discovery, requisitos, design, implementação, qualidade, entrega, operação e manutenção.',
      modules: [
        {
          slug: 'sdlc',
          title: 'Ciclo de Vida de Software',
          description:
            '12 aulas de 4 horas, com progressão do problema inicial até operação, manutenção e escolha de modelos de ciclo de vida.',
          status: 'active',
          lessons: sdlcLessons
        }
      ]
    }
  ]
};
