import assert from 'node:assert/strict';
import { catalog, findLesson, technologyCourses } from '../src/content/catalog';

type TestCase = {
  name: string;
  run: () => void;
};

const tests: TestCase[] = [
  {
    name: 'mantém a Aula 01 de HTML com duração de 4 horas',
    run: () => {
      const lesson = findLesson(
        'programador-full-stack',
        'desenvolvimento-front-end',
        'aula-01-html-primeira-pagina'
      );

      assert.equal(lesson?.lesson.durationMinutes, 240);
      assert.match(lesson?.lesson.title ?? '', /HTML/);
    }
  },
  {
    name: 'não permite ids duplicados nos slides da Aula 01',
    run: () => {
      const lesson = catalog[0].ucs[0].modules[0].lessons[0];
      const ids = lesson.slides.map((slide) => slide.id);

      assert.equal(new Set(ids).size, ids.length);
    }
  },
  {
    name: 'mantém o material progressivo em HTML/CSS, JavaScript e React',
    run: () => {
      const modules = catalog[0].ucs[0].modules.map((module) => module.slug);

      assert.deepEqual(modules, ['html-css', 'javascript', 'react']);
    }
  },
  {
    name: 'publica a Aula 01 somente na trilha HTML5',
    run: () => {
      const html = technologyCourses.find((course) => course.slug === 'curso-html5');
      const css = technologyCourses.find((course) => course.slug === 'curso-css3');

      assert.equal(html?.ucs[0].modules[0].status, 'active');
      assert.equal(html?.ucs[0].modules[0].lessons.length, 1);
      assert.equal(css?.ucs[0].modules[0].status, 'planned');
      assert.equal(css?.ucs[0].modules[0].lessons.length, 0);
    }
  },
  {
    name: 'mantém a sequência pedagógica da história até a produção final',
    run: () => {
      const lesson = catalog[0].ucs[0].modules[0].lessons[0];
      const ids = lesson.slides.map((slide) => slide.id);

      assert.ok(ids.indexOf('historia-web') < ids.indexOf('anatomia-elemento'));
      assert.ok(ids.indexOf('anatomia-elemento') < ids.indexOf('semantica'));
      assert.ok(ids.indexOf('semantica') < ids.indexOf('producao-final'));
      assert.equal(ids.at(-1), 'referencias');
    }
  }
];

let failures = 0;

for (const test of tests) {
  try {
    test.run();
    console.log('PASS', test.name);
  } catch (error) {
    failures += 1;
    console.error('FAIL', test.name);
    console.error(error);
  }
}

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log('');
  console.log(`${tests.length} testes concluídos com sucesso.`);
}
