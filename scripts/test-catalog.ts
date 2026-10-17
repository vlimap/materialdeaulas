import assert from 'node:assert/strict';
import { Script, runInNewContext } from 'node:vm';
import { readFileSync, readdirSync } from 'node:fs';
import { catalog, findLesson, getCourseLessonNavigation, technologyCourses } from '../src/content/catalog';
import { javascriptLessons } from '../src/content/javascript/course';
import { getPublicSeoPages } from '../src/seo/metadata';
import { buildAlgorithmTrace } from '../src/components/deck/algorithm-traces';
import { evaluateTruth, explainTruth, getTruthRows } from '../src/components/deck/truth-table';
import { createAlgorithmVisualization } from '../src/components/deck/algorithm-visualization-engine';

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
    name: 'publica trinta aulas JavaScript progressivas com código executável e rotas',
    run: () => {
      const course = technologyCourses.find(item => item.slug === 'curso-javascript');
      assert.ok(course);
      const lessons = course?.ucs[0]?.modules[0]?.lessons ?? [];
      assert.equal(lessons.length, 30);
      assert.deepEqual(lessons.map(item => item.number), Array.from({length:30}, (_,i) => i+1));
      assert.equal(lessons.reduce((sum, item) => sum + item.slides.length, 0), 544);
      assert.equal(lessons.reduce((sum, item) => sum + item.durationMinutes, 0), 7200);
      assert.equal(lessons.filter(item => item.status === 'published').length, 30);
      const navigation = getCourseLessonNavigation('curso-javascript');
      assert.equal(navigation.length, 30);
      assert.ok(navigation.every(item => item.published));
      assert.equal(navigation[0].href, '/curso/curso-javascript/uc/fundamentos-javascript/aula/aula-01-introducao-ambientes');
      const ids = new Set<string>();
      for (const lesson of lessons) {
        assert.equal(lesson.slides.filter(s => s.kind === 'javascript-console').length, 1, lesson.slug);
        assert.equal(lesson.slides.filter(s => s.kind === 'challenge').length, 4, lesson.slug);
        assert.equal(lesson.slides.filter(s => s.kind === 'exercise').length, 3, lesson.slug);
        assert.ok(lesson.objectives.length >= 4);
        assert.ok((lesson.sources?.length ?? 0) > 0);
        assert.equal(findLesson('curso-javascript','fundamentos-javascript',lesson.slug)?.lesson.id,lesson.id);
        for (const slide of lesson.slides) {
          assert.ok(!ids.has(slide.id), 'duplicate slide id: ' + slide.id);
          ids.add(slide.id);
          assert.doesNotMatch(JSON.stringify(slide), /Peça à dupla|O professor deve|solicite aos alunos|divida a turma/i);
          if (slide.kind === 'javascript-console') {
            assert.ok(slide.starterCode.includes('console.log'), slide.id);
            assert.ok(slide.task.length >= 12);
            new Script(slide.starterCode, { filename: lesson.slug + '.js' });
          }
        }
      }
      assert.deepEqual(
        lessons[3].slides.filter(slide => slide.kind === 'truth-table').map(slide =>
          slide.kind === 'truth-table' ? slide.operator : ''),
        ['and','or','not']
      );
      assert.equal(javascriptLessons.length, lessons.length);
    }
  },
  {
    name: 'exemplos de JavaScript produzem resultados reais em código síncrono',
    run: () => {
      const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,20,21,22,23,24,25,26,27,29,30];
      for (const number of numbers) {
        const lesson = javascriptLessons[number - 1];
        const slide = lesson.slides.find(item => item.kind === 'javascript-console');
        assert.ok(slide && slide.kind === 'javascript-console');
        const captured: string[] = [];
        const fake = { log: (...args: unknown[]) =>
          captured.push(args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg)).join(' ')) };
        // VM initialization and Intl caches may be cold on hosted CI runners.
        // Keep a finite timeout to detect runaway scripts without flaking on startup.
        try {
          runInNewContext(slide.starterCode, {
            console: fake, Number, Object, Array, Set, Map, Intl, JSON, URLSearchParams,
            RegExp, Date, String, Promise, Symbol
          }, {timeout: 2000});
        } catch (error) {
          throw new Error('Exemplo falhou: ' + lesson.slug, { cause: error });
        }
        const prediction = lesson.slides.find(item => item.id.endsWith('-output-check'));
        assert.ok(prediction && prediction.kind === 'challenge');
        const printed = captured.join('\n').replace(/\u00a0/g, ' ');
        const expected = prediction.options[0].label.replace(/\u00a0/g,' ');
        assert.equal(printed, expected, lesson.slug);
      }
      const player = readFileSync('src/components/deck/DeckPlayer.tsx','utf8');
      const css = readFileSync('src/components/deck/JavaScriptConsole.css','utf8');
      const render = readFileSync('src/components/deck/SlideRenderer.tsx','utf8');
      const source = readFileSync('src/components/deck/JavaScriptConsole.tsx','utf8');
      assert.match(player, /'javascript-console'/);
      assert.match(render, /codeLanguage === 'javascript'/);
      assert.match(source, /sandbox="allow-scripts"/);
      assert.match(source, /code\.replace\(\/<\\\/script\/gi/);
      assert.match(css, /\.story-mode \.deck-stage \.slide-javascript-console/);
    }
  },
  {
    name: 'publica as 12 aulas do curso Algoritmos com laboratórios, provas e rotas',
    run: () => {
      const course = technologyCourses.find(course => course.slug === 'curso-algorithms');
      const lessons = course?.ucs[0]?.modules[0]?.lessons ?? [];
      assert.equal(course?.ucs[0]?.slug, 'fundamentos-algorithms');
      assert.equal(lessons.length, 12);
      assert.ok(lessons.every(lesson => lesson.status === 'published' && lesson.durationMinutes === 240));
      assert.deepEqual(lessons.map(lesson => lesson.number), Array.from({length:12}, (_, i) => i + 1));
      assert.equal(lessons.reduce((sum, lesson) => sum + lesson.slides.length, 0), 219);
      assert.equal(lessons.flatMap(lesson => lesson.slides).filter(slide => slide.kind === 'algorithm-visualization').length, 15);
      for (const lesson of lessons) {
        const route = findLesson('curso-algorithms', 'fundamentos-algorithms', lesson.slug);
        assert.equal(route?.lesson.id, lesson.id, lesson.slug);
        assert.ok(lesson.objectives.length === 4);
        assert.equal(new Set(lesson.slides.map(slide => slide.id)).size, lesson.slides.length);
        assert.equal(lesson.slides.filter(slide => slide.kind === 'challenge').length, 4);
        assert.equal(lesson.slides.filter(slide => slide.kind === 'exercise').length, 3);
        assert.ok(lesson.slides.some(slide => slide.kind === 'checklist'));
        assert.ok(lesson.slides.some(slide => slide.kind === 'references'));
        assert.ok(lesson.slides.filter(slide => slide.kind === 'algorithm-visualization').length >= 1);
        assert.ok(lesson.slides.length >= 18);
        assert.ok((lesson.sources?.length ?? 0) >= 2);
        assert.doesNotMatch(JSON.stringify(lesson.slides), /Peça à dupla|O professor deve|solicite aos alunos|divida a turma/i);
      }
      const navigation = getCourseLessonNavigation('curso-algorithms');
      assert.equal(navigation.length, 12);
      assert.ok(navigation.every(item => item.published));
      assert.equal(navigation[0].href, '/curso/curso-algorithms/uc/fundamentos-algorithms/aula/aula-01-algoritmos-e-execucao');
    }
  },
  {
    name: 'visualizações de algoritmos geram respostas reproduzíveis e estados corretos',
    run: () => {
      const expected = [
        ['walkthrough', '12'], ['invariant', '12'], ['complexity', '4 contra 16 operações'],
        ['linear-search', 'Encontrado no índice 4'], ['binary-search', 'Índice 3'],
        ['bubble-sort', '1, 2, 4, 5'], ['selection-sort', '1, 2, 4, 5'],
        ['insertion-sort', '1, 2, 4, 5'], ['merge-sort', '1, 2, 4, 5'],
        ['quick-sort', '1, 2, 4, 5'], ['factorial', '24'],
        ['graph-bfs', 'A → B → C → D'], ['graph-dfs', 'A → B → D → C'],
        ['greedy', '10 + 10 + 5 + 1 + 1'], ['dynamic-programming', '3']
      ] as const;
      for (const [scenario, answer] of expected) {
        const result = createAlgorithmVisualization(scenario, 4);
        assert.equal(result.answer, answer, scenario);
        assert.deepEqual(result, createAlgorithmVisualization(scenario, 4), scenario);
        assert.ok(result.frames.length >= 3, scenario);
        assert.ok(result.code.length >= 4, scenario);
        assert.ok(result.frames.every(frame => frame.line < result.code.length && frame.line >= 0), scenario);
        assert.ok(result.frames.every(frame => frame.active.every(index => index >= 0 && index < frame.cells.length)), scenario);
        assert.equal(result.frames.at(-1)?.message.length! > 0, true);
      }
      for (const scenario of ['bubble-sort', 'selection-sort', 'insertion-sort', 'merge-sort', 'quick-sort'] as const) {
        const result = createAlgorithmVisualization(scenario, 6);
        assert.equal(result.answer, '1, 2, 3, 4, 5, 6', scenario);
      }
      assert.equal(createAlgorithmVisualization('linear-search', 5).answer, 'Valor não encontrado');
      assert.equal(createAlgorithmVisualization('dynamic-programming', 6).answer, '8');
      assert.equal(createAlgorithmVisualization('factorial', 6).answer, '720');
      const css = readFileSync('src/components/deck/AlgorithmVisualizer.css','utf8');
      const player = readFileSync('src/components/deck/DeckPlayer.tsx','utf8');
      assert.match(css, /\.story-mode \.deck-stage \.slide-algorithm-visualization/);
      assert.match(player, /'algorithm-visualization'/);
    }
  },
  {
    name: 'publica as doze aulas de lógica com simulações e conteúdos próprios',
    run: () => {
      const course = technologyCourses.find(item => item.slug === 'curso-logic-programming');
      const lessons = course?.ucs[0].modules[0].lessons ?? [];
      assert.equal(lessons.length, 12);
      assert.ok(lessons.every(lesson => lesson.status === 'published'));
      assert.ok(lessons.every(lesson => lesson.durationMinutes === 240));
      assert.deepEqual(lessons.map(lesson => lesson.number), Array.from({ length: 12 }, (_, i) => i + 1));

      const lesson1 = findLesson('curso-logic-programming', 'fundamentos-logic-programming', 'aula-01-pensar-em-passos')?.lesson;
      const lesson2 = findLesson('curso-logic-programming', 'fundamentos-logic-programming', 'aula-02-problemas-e-algoritmos')?.lesson;
      assert.equal(lesson1?.slides.length, 20);
      assert.equal(lesson2?.slides.length, 23);
      assert.deepEqual(
        lesson1?.slides.filter(slide => slide.kind === 'logic-playground')
          .map(slide => slide.kind === 'logic-playground' ? slide.scenario : ''),
        ['sequence', 'decision', 'loop']
      );
      assert.deepEqual(
        lesson2?.slides.filter(slide => slide.kind === 'problem-playground')
          .map(slide => slide.kind === 'problem-playground' ? slide.scenario : ''),
        ['decompose', 'order', 'trace']
      );

      const expectedScenarios = [
        'flowchart', 'variables', 'operators', 'conditions', 'loops',
        'arrays', 'functions', 'debugging', 'integrated', 'project'
      ];
      for (const [offset, scenario] of expectedScenarios.entries()) {
        const lesson = lessons[offset + 2];
        const resolved = findLesson('curso-logic-programming', 'fundamentos-logic-programming', lesson.slug);
        assert.equal(resolved?.lesson.id, lesson.id);
        assert.equal(lesson.slides.length, lesson.number === 5 ? 28 : 18, lesson.slug);
        assert.equal(new Set(lesson.slides.map(slide => slide.id)).size, lesson.slides.length);
        assert.equal(lesson.slides.filter(slide => slide.kind === 'algorithm-lab').length, 1);
        const lab = lesson.slides.find(slide => slide.kind === 'algorithm-lab');
        assert.ok(lab && lab.kind === 'algorithm-lab' && lab.scenario === scenario);
        assert.equal(lesson.slides.filter(slide => slide.kind === 'challenge').length, lesson.number === 5 ? 5 : 4);
        assert.equal(lesson.slides.filter(slide => slide.kind === 'exercise').length, 3);
        assert.equal(lesson.slides.filter(slide => slide.kind === 'references').length, 1);
        assert.ok(lesson.objectives.length >= 4);
        for (const slide of lesson.slides) {
          const value = JSON.stringify(slide);
          assert.doesNotMatch(value, /Peça à dupla|Explique para outra pessoa|O professor deve|solicite aos alunos|divida a turma/i, slide.id);
        }
      }

      const navigation = getCourseLessonNavigation('curso-logic-programming');
      assert.equal(navigation.length, 12);
      assert.ok(navigation.every(item => item.published), 'navegação deve habilitar as doze aulas');
    }
  },
  {
    name: 'tabelas-verdade completas e interativas na Aula 05',
    run: () => {
      const operators = ['and', 'or', 'not'] as const;
      const expectations = {
        and: [false, false, false, true],
        or: [false, true, true, true],
        not: [true, false]
      };

      for (const operator of operators) {
        const rows = getTruthRows(operator);
        assert.deepEqual(rows.map(row => row.output), expectations[operator], operator);
        assert.equal(rows.length, operator === 'not' ? 2 : 4);
        for (const row of rows) {
          assert.equal(row.output, evaluateTruth(operator, row.a, row.b), operator);
          assert.ok(explainTruth(operator, row.a, row.b).length > 40, operator);
        }
      }
      assert.equal(evaluateTruth('and', true, false), false);
      assert.equal(evaluateTruth('or', true, true), true);
      assert.equal(evaluateTruth('not', false), true);

      const lesson = findLesson('curso-logic-programming', 'fundamentos-logic-programming', 'aula-05-operadores-e-expressoes')?.lesson;
      assert.ok(lesson);
      const slides = lesson?.slides ?? [];
      const truthTables = slides.filter(slide => slide.kind === 'truth-table');
      assert.equal(truthTables.length, 3);
      assert.deepEqual(truthTables.map(slide => slide.kind === 'truth-table' ? slide.operator : ''), operators);
      assert.equal(new Set(slides.map(slide => slide.id)).size, slides.length);
      assert.ok(slides.some(slide => slide.id === 'logic-05-tabela-introducao'));
      assert.ok(slides.some(slide => slide.id === 'logic-05-tabela-como-ler'));
      for (const operator of operators) {
        const index = slides.findIndex(slide => slide.kind === 'truth-table' && slide.operator === operator);
        assert.ok(index >= 0, operator);
        assert.equal(slides[index - 1].kind, 'statement', 'cada tabela tem explicação anterior');
      }

      const component = readFileSync('src/components/deck/TruthTablePlayground.tsx', 'utf8');
      const css = readFileSync('src/components/deck/TruthTablePlayground.css', 'utf8');
      const player = readFileSync('src/components/deck/DeckPlayer.tsx', 'utf8');
      assert.match(component, /aria-pressed=\{value === option\}/);
      assert.match(component, /className="truth-table"/);
      assert.match(component, /aria-live="polite"/);
      assert.match(component, /somente leitura/);
      assert.match(css, /\.story-mode \.deck-stage \.slide-truth-table \.truth-lab/);
      assert.match(player, /'truth-table'/);
    }
  },
  {
    name: 'laboratórios geram traços determinísticos, resultados e fim para cada cenário',
    run: () => {
      const cases: Array<[Parameters<typeof buildAlgorithmTrace>[0], number, string]> = [
        ['flowchart', 2, 'Insuficiente'],
        ['variables', 3, 'numero = 5; copia = 3'],
        ['operators', 5, '17'],
        ['conditions', 3, '10%'],
        ['loops', 4, '10'],
        ['arrays', 3, '13'],
        ['functions', 5, '10'],
        ['debugging', 3, '3'],
        ['integrated', 2, 'Confirmado; restante: 1'],
        ['project', 5, 'Indisponível']
      ];
      for (const [scenario, input, expected] of cases) {
        const actual = buildAlgorithmTrace(scenario, input);
        assert.equal(actual.result, expected, scenario);
        assert.ok(actual.steps.length >= 3);
        assert.ok(actual.source.length >= 3);
        assert.ok(actual.steps.every(step => step.line >= 0 && step.line < actual.source.length), scenario);
        assert.deepEqual(actual, buildAlgorithmTrace(scenario, input));
      }
      assert.equal(buildAlgorithmTrace('debugging', 3, true).result, '6');
      assert.equal(buildAlgorithmTrace('conditions', 5).result, '0%');
      assert.equal(buildAlgorithmTrace('project', 4).result, 'Reserva: R$ 48,00');
      assert.equal(buildAlgorithmTrace('loops', 1).result, '1');
    }
  },
  {
    name: 'distingue controles reais de visualizações estáticas nos exercícios de lógica',
    run: () => {
      const problems = readFileSync('src/components/deck/ProblemPlayground.tsx', 'utf8');
      const logic = readFileSync('src/components/deck/LogicPlayground.tsx', 'utf8');
      const problemStyles = readFileSync('src/components/deck/ProblemPlayground.css', 'utf8');
      const logicStyles = readFileSync('src/components/deck/LogicPlayground.css', 'utf8');

      assert.match(problems, /<input\s+type="checkbox"/);
      assert.match(problems, /VISUALIZAÇÃO/);
      assert.match(problems, /SUA VEZ/);
      assert.match(problems, /Progresso da marcação de opções/);
      assert.doesNotMatch(problems, /problem-pipeline|problem-preview-step|problem-task-checkbox/);
      assert.match(problemStyles, /\.problem-task:focus-within/);
      assert.match(logic, /ROTEIRO · SOMENTE LEITURA/);
      assert.match(logic, /CÓDIGO · SOMENTE LEITURA/);
      assert.match(logic, /SUA VEZ/);
      assert.match(logicStyles, /\.logic-steps li\.is-current \{ border-left-color/);
    }
  },
  {
    name: 'palavras-chave explicativas não parecem botões em nenhuma aula',
    run: () => {
      const renderer = readFileSync('src/components/deck/SlideRenderer.tsx', 'utf8');
      const styles = readFileSync('src/styles/global.css', 'utf8');
      assert.match(renderer, /className="statement-keywords"/);
      assert.match(renderer, /Conceitos-chave:/);
      assert.match(renderer, /slide\.chips\.join\(' · '\)/);
      assert.doesNotMatch(renderer, /className="chip-row"/);
      assert.doesNotMatch(styles, /\.chip-row(?:\s|\.)/);
      assert.match(styles, /\.story-mode \.statement-keywords/);
      assert.match(styles, /\.deck-page \.statement-keywords/);
      assert.doesNotMatch(styles, /\.statement-keywords \{[^}]*border-radius:/);
      assert.doesNotMatch(styles, /\.statement-keywords \{[^}]*background:/);
      const keywords = [...catalog, ...technologyCourses]
        .flatMap(course => course.ucs)
        .flatMap(uc => uc.modules)
        .flatMap(module => module.lessons)
        .flatMap(lesson => lesson.slides)
        .filter(slide => slide.kind === 'statement' && Boolean(slide.chips?.length));
      assert.ok(keywords.length > 4, 'deve haver palavras-chave em vários slides');
    }
  },
  {
    name: 'mantém as animações dentro da área visível do Stories mobile',
    run: () => {
      const styles = readFileSync('src/styles/global.css', 'utf8');
      const logicStyles = readFileSync('src/components/deck/LogicPlayground.css', 'utf8');
      const problemStyles = readFileSync('src/components/deck/ProblemPlayground.css', 'utf8');
      const player = readFileSync('src/components/deck/DeckPlayer.tsx', 'utf8');

      const singleScreenRules = styles.slice(styles.indexOf('/* Mobile story layout: ONE viewport'));
      const logicMobileRules = logicStyles.slice(logicStyles.indexOf('/* Story simulations: both the characters'));
      const problemMobileRules = problemStyles.slice(problemStyles.indexOf('/* Lessons use the available Story height'));

      assert.ok(singleScreenRules.length > 500);
      assert.match(singleScreenRules, /\.story-mode \.deck-stage \.slide-canvas:not\(\.cover-slide\)/);
      assert.match(singleScreenRules, /\.story-mode \.deck-stage \.slide-canvas:not\(\.cover-slide\) > \.slide-body \{[\s\S]*?overflow: hidden/);
      assert.match(singleScreenRules, /\.story-mode \.deck-stage \.slide-canvas:not\(\.cover-slide\) > \.slide-footer/);
      assert.doesNotMatch(singleScreenRules, /overflow-y:\s*auto/);

      for (const mobileRules of [logicMobileRules, problemMobileRules]) {
        assert.ok(mobileRules.length > 500);
        assert.match(mobileRules, /grid-template-rows:\s*minmax\(0,/);
        assert.match(mobileRules, /min-height:\s*0/);
        assert.doesNotMatch(mobileRules, /overflow-y:\s*auto/);
        assert.doesNotMatch(mobileRules, /\.story-mode \.export-stage/);
      }

      assert.match(player, /'exercise', 'checklist', 'references'\].includes\(current.kind\)/);
    }
  },
  {
    name: 'exibe condições de lógica em pseudocódigo legível e com entrada separada',
    run: () => {
      const lesson = findLesson('curso-logic-programming', 'fundamentos-logic-programming', 'aula-01-pensar-em-passos')?.lesson;
      const slide = lesson?.slides.find(item => item.id === 'logic-01-decisao-desafio');
      assert.equal(slide?.kind, 'challenge');
      if (!slide || slide.kind !== 'challenge') return;

      assert.equal(slide.testInput, 'idade = 16');
      assert.equal(slide.exampleCode?.split('\n').length, 5);
      assert.ok(slide.exampleCode?.includes('SE idade >= 18 ENTÃO'));
      assert.ok(slide.exampleCode?.includes('FIM SE'));
      assert.equal(slide.answerIndex, 1);
      assert.equal(slide.options[1].label, 'Exibir "menor de idade"');
      assert.doesNotMatch(slide.prompt, /SE idade >=/);

      const renderer = readFileSync('src/components/deck/SlideRenderer.tsx', 'utf8');
      const styles = readFileSync('src/styles/global.css', 'utf8');
      assert.match(renderer, /className="micro-challenge-example"/);
      assert.match(renderer, /<pre><code>\{slide.exampleCode\}<\/code><\/pre>/);
      assert.match(renderer, /micro-challenge-input/);
      assert.match(styles, /\.story-mode \.deck-stage \.micro-challenge\.has-example-code/);
    }
  },
  {
    name: 'contagem de slides fica visível no modo Stories mobile',
    run: () => {
      const player = readFileSync('src/components/deck/DeckPlayer.tsx', 'utf8');
      const css = readFileSync('src/styles/global.css', 'utf8');
      assert.match(player, /className="story-counter"/);
      assert.match(player, /Slide \$\{index \+ 1\} de \$\{lesson.slides.length\}/);
      assert.match(css, /\.deck-page\.story-mode \.story-status/);
      assert.match(css, /\.deck-page\.story-mode \.story-counter/);
      assert.match(css, /\.story-status \.story-progress/);
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
