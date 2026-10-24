import { buildDataCourse, buildDataLesson } from './lesson-builder';
import { group01 } from './group-01';
import { group02 } from './group-02';
import { group03 } from './group-03';
import { group04 } from './group-04';

/** Publicação integral: nenhuma aula planejada ou parcialmente cadastrada. */
export const dataStructuresLessons = [...group01, ...group02, ...group03, ...group04].map(buildDataLesson);
export const dataStructuresCourse = buildDataCourse(dataStructuresLessons);
