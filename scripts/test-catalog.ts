import assert from 'node:assert/strict';
import { catalog, findLesson, technologyCourses } from '../src/content/catalog';
import { getPublicSeoPages } from '../src/seo/metadata';

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
    name: 'organiza o curso completo de HTML em 12 aulas de 4 horas',
    run: () => {
      const html = technologyCourses.find((course) => course.slug === 'curso-html5');
      const lessons = html?.ucs[0].modules[0].lessons ?? [];

      assert.equal(lessons.length, 12);
      assert.ok(lessons.every((lesson) => lesson.durationMinutes === 240));
      assert.equal(lessons[0].status, 'published');
      assert.equal(lessons.slice(1).filter((lesson) => lesson.status === 'planned').length, 11);
    }
  },
  {
    name: 'publica a Aula 01 na rota da trilha HTML5 e mantém o laboratório',
    run: () => {
      const html = technologyCourses.find((course) => course.slug === 'curso-html5');
      const css = technologyCourses.find((course) => course.slug === 'curso-css3');

      assert.equal(html?.ucs[0].modules[0].status, 'active');
      assert.equal(css?.ucs[0].modules[0].status, 'planned');
      assert.equal(css?.ucs[0].modules[0].lessons.length, 0);

      const routedLesson = findLesson(
        'curso-html5',
        'fundamentos-html5',
        'aula-01-html-primeira-pagina'
      );

      assert.equal(routedLesson?.lesson.id, 'fullstack-front-html-aula-01');
      assert.equal(routedLesson?.lesson.lab?.workspacePath, 'labs/html/aula-01/index.html');
      assert.ok(routedLesson?.lesson.slides.some((slide) => slide.kind === 'lab'));
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
      assert.equal(ids.at(-1), 'uso-educacional');
    }
  },
  {
    name: 'mantém o aviso de uso educacional como último slide',
    run: () => {
      const lesson = catalog[0].ucs[0].modules[0].lessons[0];
      const last = lesson.slides.at(-1);

      assert.equal(last?.id, 'uso-educacional');
      assert.equal(last?.kind, 'statement');
      if (last?.kind === 'statement') {
        assert.match(last.detail, /forma original/i);
        assert.match(last.detail, /licença/i);
        assert.match(last.detail, /identidade visual/i);
      }
    }
  },
  {
    name: 'mantém baixa densidade de texto nos slides de projeção',
    run: () => {
      const lesson = catalog[0].ucs[0].modules[0].lessons[0];

      for (const slide of lesson.slides) {
        if (slide.kind === 'statement') {
          assert.ok(slide.lead.length <= 80, slide.id + ': lead muito longo');
          assert.ok(slide.detail.length <= 150, slide.id + ': detail muito longo');
        }

        if (slide.kind === 'cards') {
          assert.ok(
            slide.items.every((item) => item.detail.length <= 80),
            slide.id + ': card com texto excessivo'
          );
        }

        if (slide.kind === 'visual') {
          assert.ok(
            (slide.subtitle?.length ?? 0) <= 110,
            slide.id + ': subtítulo visual muito longo'
          );
          assert.ok(
            (slide.caption?.length ?? 0) <= 100,
            slide.id + ': legenda visual muito longa'
          );
        }
      }
    }
  },
  {
    name: 'gera SEO somente para aulas publicadas',
    run: () => {
      const pages = getPublicSeoPages();
      const lessonPages = pages.filter((page) => page.kind === 'lesson');

      assert.ok(
        lessonPages.some((page) =>
          page.path.endsWith('/aula/aula-01-html-primeira-pagina')
        )
      );

      assert.equal(
        lessonPages.some((page) =>
          page.path.endsWith('/aula/aula-02-textos-links-listas-caminhos')
        ),
        false
      );
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
