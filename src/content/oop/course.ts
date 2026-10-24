import { buildOopCourse, buildOopLesson } from './lesson-builder';
import { group01 } from './group-01';
import { group02 } from './group-02';
import { group03 } from './group-03';
import { group04 } from './group-04';

/** O curso somente é disponibilizado quando todas as doze aulas estão escritas. */
export const oopLessons = [...group01, ...group02, ...group03, ...group04].map(buildOopLesson);
export const oopCourse = buildOopCourse(oopLessons);
