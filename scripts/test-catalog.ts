import assert from 'node:assert/strict';
import { catalog, findLesson } from '../src/content/catalog';

type TestCase = {
  name: string;
  run: () => void;
};

const tests: TestCase[] = [
  {
    name: 'mantém a Aula 01 com duração de 4 horas',
    run: () => {
      const lesson = findLesson(
        'programador-full-stack',
        'desenvolvimento-front-end',
        'aula-01-como-a-web-funciona'
      );

      assert.equal(lesson?.lesson.durationMinutes, 240);
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
