import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { catalog, findLesson, getCourseLessonNavigation, technologyCourses } from '../src/content/catalog';
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
    name: 'mantém a Aula 01 como panorama completo dos fundamentos da Web',
    run: () => {
      const lesson = findLesson(
        'curso-html5',
        'fundamentos-html5',
        'aula-01-html-primeira-pagina'
      )?.lesson;

      assert.match(lesson?.title ?? '', /Fundamentos da Web/i);
      assert.equal(lesson?.durationMinutes, 240);

      const ids = lesson?.slides.map((slide) => slide.id) ?? [];
      assert.ok(ids.includes('historia-web'));
      assert.ok(ids.includes('dominio-hospedagem'));
      assert.ok(ids.includes('front-back'));
      assert.ok(ids.includes('ambiente'));
      assert.ok(ids.includes('primeiro-documento'));
      assert.ok(ids.includes('textos-simbolos'));
      assert.ok(ids.includes('semantica'));
      assert.ok(ids.includes('links'));
      assert.ok(ids.includes('multimidia'));
      assert.ok(ids.includes('css-formas'));
      assert.ok(ids.includes('producao-final'));

      const visuals = new Set(
        (lesson?.slides ?? [])
          .filter((slide) => slide.kind === 'visual')
          .map((slide) => slide.kind === 'visual' ? slide.visual : '')
      );

      const requiredVisuals = [
        'html-internet-packets-cartoon',
        'html-domain-hosting-cartoon',
        'html-frontend-backend-cartoon',
        'html-dev-environment-cartoon',
        'html-text-symbols-emoji-cartoon',
        'html-multimedia-cartoon',
        'html-css-cartoon'
      ] as const;

      requiredVisuals.forEach((visual) =>
        assert.ok(visuals.has(visual), 'visual ausente: ' + visual)
      );
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
      assert.equal(lessons.filter((lesson) => lesson.status === 'published').length, 2);
      assert.equal(lessons.filter((lesson) => lesson.status === 'planned').length, 10);
    }
  },
  {
    name: 'publica as Aulas 01 e 02 na trilha HTML5 e mantém seus laboratórios',
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

      const routedLesson02 = findLesson(
        'curso-html5',
        'fundamentos-html5',
        'aula-02-textos-links-imagens'
      );

      assert.equal(routedLesson02?.lesson.id, 'html-aula-02');
      assert.equal(routedLesson02?.lesson.lab?.workspacePath, 'labs/html/aula-02/index.html');
      assert.ok(routedLesson02?.lesson.slides.some((slide) => slide.kind === 'lab'));
      assert.ok(
        routedLesson02?.lesson.slides.some(
          (slide) => slide.kind === 'visual' && slide.visual === 'html-links-network-svg'
        )
      );
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
    name: 'mantém a navegação contextual das aulas na ordem do curso',
    run: () => {
      const navigation = getCourseLessonNavigation('curso-html5');

      assert.equal(navigation.length, 12);
      assert.equal(navigation[0].id, 'fullstack-front-html-aula-01');
      assert.equal(navigation[0].published, true);
      assert.equal(navigation[1].published, true);
      assert.equal(navigation[2].published, false);
      assert.match(
        navigation[0].href,
        /^\/curso\/curso-html5\/uc\/fundamentos-html5\/aula\//
      );
      assert.deepEqual(
        navigation.map((item) => item.number),
        Array.from({ length: 12 }, (_, index) => index + 1)
      );
    }
  },
  {
    name: 'mantém 100% dos cursos e conceitos com ícone mapeado',
    run: () => {
      const technologyIconSource = readFileSync(
        'src/brand/technologyIcons.ts',
        'utf8'
      );
      const conceptIconSource = readFileSync(
        'src/brand/conceptIcons.ts',
        'utf8'
      );

      const mapped = new Set<string>();

      const collectKeys = (source: string) => {
        const objectBody =
          source.match(/export const \w+Icons:[\s\S]*?= \{([\s\S]*?)\n\};/)?.[1] ?? '';

        for (const line of objectBody.split('\n')) {
          const quoted = line.match(/^\s*'([^']+)'\s*:/);
          if (quoted) {
            mapped.add(quoted[1]);
            continue;
          }

          const shorthand = line.match(/^\s*([A-Za-z_$][\w$-]*)\s*,\s*$/);
          if (shorthand && shorthand[1] !== 'conceptIcons') {
            mapped.add(shorthand[1]);
          }
        }
      };

      collectKeys(technologyIconSource);
      collectKeys(conceptIconSource);

      const missing = technologyCourses
        .map((course) => course.slug.replace(/^curso-/, ''))
        .filter((slug) => !mapped.has(slug));

      assert.deepEqual(missing, []);

      const conceptFiles = readdirSync('src/brand/concept-icons')
        .filter((name) => name.endsWith('.svg'));

      const unused = conceptFiles.filter(
        (file) => !conceptIconSource.includes("/" + file + "'")
      );

      assert.deepEqual(unused, []);
    }
  },
  {
    name: 'organiza o curso de SDLC em 12 aulas de 4 horas',
    run: () => {
      const sdlc = technologyCourses.find((course) => course.slug === 'curso-sdlc');
      const lessons = sdlc?.ucs[0].modules[0].lessons ?? [];

      assert.equal(lessons.length, 12);
      assert.ok(lessons.every((lesson) => lesson.durationMinutes === 240));
      assert.equal(lessons[0].status, 'published');
      assert.equal(lessons.slice(1).filter((lesson) => lesson.status === 'planned').length, 11);
      assert.match(lessons[0].title, /SDLC/i);
    }
  },
  {
    name: 'publica a Aula 01 de SDLC com sequência do problema à operação',
    run: () => {
      const routedLesson = findLesson(
        'curso-sdlc',
        'fundamentos-sdlc',
        'aula-01-visao-geral-ciclo-vida-software'
      );

      assert.equal(routedLesson?.lesson.id, 'sdlc-aula-01');
      assert.equal(routedLesson?.lesson.status, 'published');

      const ids = routedLesson?.lesson.slides.map((slide) => slide.id) ?? [];
      assert.equal(new Set(ids).size, ids.length);
      assert.ok(ids.indexOf('software-profissional') < ids.indexOf('quatro-atividades'));
      assert.ok(ids.indexOf('quatro-atividades') < ids.indexOf('cascata-visual'));
      assert.ok(ids.indexOf('cascata-visual') < ids.indexOf('incremental-visual'));
      assert.ok(ids.indexOf('incremental-visual') < ids.indexOf('feedback-ciclo') || ids.indexOf('feedback-ciclo') < ids.indexOf('cascata-visual'));
    }
  },
  {
    name: 'mantém Sommerville e plano visual em todas as aulas de SDLC',
    run: () => {
      const sdlc = technologyCourses.find((course) => course.slug === 'curso-sdlc');
      const lessons = sdlc?.ucs[0].modules[0].lessons ?? [];

      assert.equal(lessons.length, 12);

      for (const lesson of lessons) {
        assert.ok(
          lesson.sources?.some((source) => /Sommerville/i.test(source.author ?? '') || /Engenharia de Software/i.test(source.label)),
          lesson.id + ': referência-base ausente'
        );
        assert.ok((lesson.visualPlan?.length ?? 0) >= 4, lesson.id + ': plano visual insuficiente');
      }
    }
  },
  {
    name: 'mantém a Aula 01 de SDLC predominantemente visual e interativa',
    run: () => {
      const sdlc = technologyCourses.find((course) => course.slug === 'curso-sdlc');
      const lesson = sdlc?.ucs[0].modules[0].lessons[0];
      const slides = lesson?.slides ?? [];
      const visual = slides.filter((slide) => slide.kind === 'visual');
      const interactive = slides.filter((slide) =>
        ['challenge', 'exercise', 'missions'].includes(slide.kind)
      );

      assert.ok(visual.length >= 6);
      assert.ok(interactive.length >= 3);
      assert.ok(visual.some((slide) => slide.kind === 'visual' && slide.visual === 'sdlc-waterfall'));
      assert.ok(visual.some((slide) => slide.kind === 'visual' && slide.visual === 'sdlc-incremental'));
      assert.ok(slides.some((slide) => slide.kind === 'references'));
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

      assert.ok(
        lessonPages.some((page) =>
          page.path.endsWith('/curso/curso-sdlc/uc/fundamentos-sdlc/aula/aula-01-visao-geral-ciclo-vida-software')
        )
      );

      assert.equal(
        lessonPages.some((page) =>
          page.path.endsWith('/aula/aula-02-discovery-problema-viabilidade')
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
