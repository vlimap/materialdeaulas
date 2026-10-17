import { makeAlgorithmsCourse } from './lesson-builder';
import { algorithmsLesson01 } from './aula-01';
import { algorithmsLesson02 } from './aula-02';
import { algorithmsLesson03 } from './aula-03';
import { algorithmsLesson04 } from './aula-04';
import { algorithmsLesson05 } from './aula-05';
import { algorithmsLesson06 } from './aula-06';
import { algorithmsLesson07 } from './aula-07';
import { algorithmsLesson08 } from './aula-08';
import { algorithmsLesson09 } from './aula-09';
import { algorithmsLesson10 } from './aula-10';
import { algorithmsLesson11 } from './aula-11';
import { algorithmsLesson12 } from './aula-12';

export const algorithmsLessons = [
  algorithmsLesson01,
  algorithmsLesson02,
  algorithmsLesson03,
  algorithmsLesson04,
  algorithmsLesson05,
  algorithmsLesson06,
  algorithmsLesson07,
  algorithmsLesson08,
  algorithmsLesson09,
  algorithmsLesson10,
  algorithmsLesson11,
  algorithmsLesson12,
];

export const algorithmsCourse = makeAlgorithmsCourse(algorithmsLessons);
