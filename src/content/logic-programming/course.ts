import type { CourseDefinition, LessonDefinition } from '../../types/course';
import { aula01Logic } from './aula-01-pensar-em-passos';
import { aula02Logic } from './aula-02-problemas-e-algoritmos';
import { aula03Logic } from './aula-03-pseudocodigo-e-fluxogramas';
import { aula04Logic } from './aula-04-dados-e-variaveis';
import { aula05Logic } from './aula-05-operadores-e-expressoes';
import { aula06Logic } from './aula-06-decisao-e-condicoes';
import { aula07Logic } from './aula-07-lacos-e-contadores';
import { aula08Logic } from './aula-08-listas-e-vetores';
import { aula09Logic } from './aula-09-funcoes';
import { aula10Logic } from './aula-10-testes-e-depuracao';
import { aula11Logic } from './aula-11-desafios-integrados';
import { aula12Logic } from './aula-12-projeto-final';

export const logicLessons: LessonDefinition[] = [
  aula01Logic,
  aula02Logic,
  aula03Logic,
  aula04Logic,
  aula05Logic,
  aula06Logic,
  aula07Logic,
  aula08Logic,
  aula09Logic,
  aula10Logic,
  aula11Logic,
  aula12Logic,
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
