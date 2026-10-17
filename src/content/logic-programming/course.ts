import type { CourseDefinition, LessonDefinition } from '../../types/course';
import { aula01Logic } from './aula-01-pensar-em-passos';

type LessonPlan = [string, string, string, string[]];

const syllabus: LessonPlan[] = [
  ['aula-02-problemas-e-algoritmos', 'Decomposição de problemas e algoritmos', 'Problemas e algoritmos', ['Quebrar problemas em partes menores', 'Escrever algoritmos precisos', 'Testar com exemplos']],
  ['aula-03-pseudocodigo-e-fluxogramas', 'Pseudocódigo e fluxogramas', 'Pseudocódigo e fluxogramas', ['Descrever algoritmos com pseudocódigo', 'Ler fluxogramas', 'Comparar formas de representação']],
  ['aula-04-dados-e-variaveis', 'Dados, constantes e variáveis', 'Variáveis e dados', ['Identificar tipos de dados', 'Criar variáveis conceituais', 'Acompanhar mudanças de estado']],
  ['aula-05-operadores-e-expressoes', 'Operadores e expressões', 'Operadores', ['Construir expressões aritméticas', 'Comparar valores', 'Aplicar operadores lógicos']],
  ['aula-06-decisao-e-condicoes', 'Decisões e condições compostas', 'Estruturas condicionais', ['Usar condições encadeadas', 'Combinar condições', 'Testar caminhos alternativos']],
  ['aula-07-lacos-e-contadores', 'Laços, contadores e acumuladores', 'Repetições', ['Aplicar laços contados', 'Implementar acumuladores', 'Evitar laços infinitos']],
  ['aula-08-listas-e-vetores', 'Listas e vetores', 'Listas e vetores', ['Percorrer coleções', 'Buscar valores', 'Calcular totais']],
  ['aula-09-funcoes', 'Funções e reutilização', 'Funções', ['Dividir soluções em funções', 'Distinguir parâmetros e retorno', 'Reutilizar operações']],
  ['aula-10-testes-e-depuracao', 'Testes de mesa e depuração', 'Testes de mesa', ['Simular valores manualmente', 'Encontrar erros de lógica', 'Testar casos-limite']],
  ['aula-11-desafios-integrados', 'Desafios integrados de lógica', 'Desafios integrados', ['Combinar sequência, seleção e repetição', 'Planejar soluções', 'Explicar escolhas']],
  ['aula-12-projeto-final', 'Projeto final de lógica de programação', 'Projeto final', ['Definir um problema', 'Elaborar um algoritmo', 'Validar entradas e saídas']]
];

function plannedLesson(plan: LessonPlan, index: number): LessonDefinition {
  return {
    id: 'logic-aula-' + String(index + 2).padStart(2, '0'),
    status: 'planned',
    number: index + 2,
    slug: plan[0],
    title: plan[1],
    shortTitle: plan[2],
    durationMinutes: 240,
    audience: 'Iniciantes em programação',
    ucSlug: 'fundamentos-logic-programming',
    objectives: plan[3],
    slides: []
  };
}

export const logicLessons: LessonDefinition[] = [
  aula01Logic,
  ...syllabus.map(plannedLesson)
];

export const logicCourse: CourseDefinition = {
  slug: 'curso-logic-programming',
  title: 'Lógica de Programação',
  description: 'Curso de Lógica de Programação · Fundamentos de Software',
  ucs: [{
    slug: 'fundamentos-logic-programming',
    title: 'Lógica de programação do zero',
    description: 'Algoritmos, sequências, decisões, repetições e resolução de problemas.',
    modules: [{
      slug: 'logic-programming',
      title: 'Pensamento computacional e algoritmos',
      description: '12 aulas de 4 horas com simulações interativas e prática progressiva.',
      status: 'active',
      lessons: logicLessons
    }]
  }]
};
