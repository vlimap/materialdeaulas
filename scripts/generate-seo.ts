import fs from 'node:fs';
import path from 'node:path';
import { technologyCourses } from '../src/content/catalog';
import { getPublicSeoPages, seoSite, type SeoPage } from '../src/seo/metadata';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const BASE_INDEX = path.join(DIST_DIR, 'index.html');

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function siteUrl() {
  const explicit = process.env.SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, '');

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return ('https://' + vercel).replace(/\/$/, '');

  return seoSite.fallbackUrl.replace(/\/$/, '');
}

function absoluteUrl(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  return new URL(value, siteUrl() + '/').toString();
}

function stripExistingSeo(html: string) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta[^>]+name=["']description["'][^>]*>/i, '')
    .replace(/<meta[^>]+name=["']robots["'][^>]*>/i, '')
    .replace(/<meta[^>]+name=["']author["'][^>]*>/i, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/i, '');
}

function jsonLdScripts(page: SeoPage) {
  return page.jsonLd
    .map((schema) => {
      const json = JSON.stringify(schema).replace(/</g, '\\u003c');
      return '<script type="application/ld+json">' + json + '</script>';
    })
    .join('');
}

function seoHead(page: SeoPage) {
  const canonical = absoluteUrl(page.canonicalPath);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const image = escapeHtml(seoSite.ogImageUrl);

  return [
    '<title>' + title + '</title>',
    '<meta name="description" content="' + description + '">',
    '<meta name="robots" content="' + escapeHtml(page.robots) + '">',
    '<meta name="author" content="' + escapeHtml(seoSite.author) + '">',
    '<link rel="canonical" href="' + escapeHtml(canonical) + '">',
    '<link rel="alternate" hreflang="pt-BR" href="' + escapeHtml(canonical) + '">',
    '<link rel="alternate" type="text/plain" href="' + escapeHtml(absoluteUrl('/llms.txt')) + '" title="Índice para agentes e modelos de linguagem">',
    '<meta property="og:title" content="' + title + '">',
    '<meta property="og:description" content="' + description + '">',
    '<meta property="og:type" content="' + page.ogType + '">',
    '<meta property="og:url" content="' + escapeHtml(canonical) + '">',
    '<meta property="og:site_name" content="' + escapeHtml(seoSite.name) + '">',
    '<meta property="og:locale" content="' + seoSite.locale + '">',
    '<meta property="og:image" content="' + image + '">',
    '<meta property="og:image:alt" content="Material de Aulas por Val Lima">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + title + '">',
    '<meta name="twitter:description" content="' + description + '">',
    '<meta name="twitter:image" content="' + image + '">',
    jsonLdScripts(page)
  ].join('');
}

function publishedLessons() {
  return technologyCourses.flatMap((course) =>
    course.ucs.flatMap((uc) =>
      uc.modules.flatMap((module) =>
        module.lessons
          .filter((lesson) => lesson.status !== 'planned' && lesson.slides.length > 0)
          .map((lesson) => ({ course, uc, lesson }))
      )
    )
  );
}

function staticFallback(page: SeoPage) {
  if (page.kind === 'home') {
    const courseLinks = technologyCourses
      .map(
        (course) =>
          '<li><a href="' +
          escapeHtml('/curso/' + course.slug) +
          '">' +
          escapeHtml(course.title) +
          '</a> — ' +
          escapeHtml(course.description) +
          '</li>'
      )
      .join('');

    return (
      '<noscript><main><h1>' +
      escapeHtml(seoSite.name) +
      '</h1><p>' +
      escapeHtml(seoSite.defaultDescription) +
      '</p><h2>Trilhas de tecnologia</h2><ul>' +
      courseLinks +
      '</ul></main></noscript>'
    );
  }

  if (page.kind === 'course') {
    const course = technologyCourses.find(
      (item) => '/curso/' + item.slug === page.path
    );

    if (!course) return '';

    const items = course.ucs
      .flatMap((uc) =>
        uc.modules.flatMap((module) =>
          module.lessons.map((lesson) => {
            const published = lesson.status !== 'planned' && lesson.slides.length > 0;
            const label =
              'Aula ' +
              String(lesson.number).padStart(2, '0') +
              ' — ' +
              lesson.title;

            if (!published) {
              return '<li>' + escapeHtml(label) + ' — em preparação</li>';
            }

            const href =
              '/curso/' +
              course.slug +
              '/uc/' +
              uc.slug +
              '/aula/' +
              lesson.slug;

            return (
              '<li><a href="' +
              escapeHtml(href) +
              '">' +
              escapeHtml(label) +
              '</a></li>'
            );
          })
        )
      )
      .join('');

    return (
      '<noscript><main><h1>' +
      escapeHtml(course.title) +
      '</h1><p>' +
      escapeHtml(course.description) +
      '</p><h2>Aulas</h2><ol>' +
      items +
      '</ol></main></noscript>'
    );
  }

  if (page.kind === 'lesson') {
    const match = publishedLessons().find(({ course, uc, lesson }) => {
      const lessonUrl =
        '/curso/' +
        course.slug +
        '/uc/' +
        uc.slug +
        '/aula/' +
        lesson.slug;
      return lessonUrl === page.path;
    });

    if (!match) return '';

    const objectives = match.lesson.objectives
      .map((objective) => '<li>' + escapeHtml(objective) + '</li>')
      .join('');

    const slideOutline = match.lesson.slides
      .filter((slide) => slide.title)
      .map((slide) => '<li>' + escapeHtml(slide.title) + '</li>')
      .join('');

    return (
      '<noscript><main><article><h1>' +
      escapeHtml(match.lesson.title) +
      '</h1><p>' +
      escapeHtml(match.lesson.audience) +
      ' · ' +
      String(match.lesson.durationMinutes) +
      ' minutos</p><h2>Objetivos de aprendizagem</h2><ul>' +
      objectives +
      '</ul><h2>Conteúdo da aula</h2><ol>' +
      slideOutline +
      '</ol></article></main></noscript>'
    );
  }

  return '';
}

function normalizeAssetPaths(html: string) {
  return html.replace(
    /(src|href)=["']\/?assets\//g,
    (_match, attribute: string) => attribute + '="/assets/'
  );
}

function assertAbsoluteAssetPaths(html: string, route: string) {
  const relativeAssets = html.match(/(?:src|href)=["'](?!\/|https?:\/\/|data:)[^"']*assets\//g);

  if (relativeAssets?.length) {
    throw new Error(
      '[SEO] A rota ' +
        route +
        ' ainda contém assets relativos: ' +
        relativeAssets.join(', ')
    );
  }
}

function renderPage(baseHtml: string, page: SeoPage) {
  let html = normalizeAssetPaths(stripExistingSeo(baseHtml));
  html = html.replace('</head>', seoHead(page) + '</head>');

  const fallback = staticFallback(page);
  if (fallback) {
    html = html.replace('</body>', fallback + '</body>');
  }

  assertAbsoluteAssetPaths(html, page.path);
  return html;
}

function routeOutputPath(route: string) {
  if (route === '/') return BASE_INDEX;
  const clean = route.replace(/^\/+|\/+$/g, '');
  return path.join(DIST_DIR, clean, 'index.html');
}

function writeRoute(baseHtml: string, page: SeoPage) {
  const output = routeOutputPath(page.path);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, renderPage(baseHtml, page), 'utf8');
}

function writeSitemap(pages: SeoPage[]) {
  const indexed = pages.filter((page) => !page.robots.startsWith('noindex'));
  const urls = indexed
    .map((page) => {
      const priority =
        page.kind === 'home' ? '1.0' : page.kind === 'course' ? '0.8' : '0.7';
      return (
        '<url><loc>' +
        escapeHtml(absoluteUrl(page.canonicalPath)) +
        '</loc><changefreq>weekly</changefreq><priority>' +
        priority +
        '</priority></url>'
      );
    })
    .join('');

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    urls +
    '</urlset>';

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), xml, 'utf8');
}

function writeRobots() {
  const text = [
    'User-agent: *',
    'Allow: /',
    '',
    'Sitemap: ' + absoluteUrl('/sitemap.xml'),
    ''
  ].join('\n');

  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), text, 'utf8');
}

function writeLlms() {
  const lessons = publishedLessons();

  const short = [
    '# ' + seoSite.name,
    '',
    '> ' + seoSite.defaultDescription,
    '',
    'Idioma principal: pt-BR',
    'Autor: ' + seoSite.author,
    'Repositório: ' + seoSite.githubUrl,
    '',
    '## Cursos',
    '',
    ...technologyCourses.map(
      (course) =>
        '- [' +
        course.title +
        '](' +
        absoluteUrl('/curso/' + course.slug) +
        '): ' +
        course.description
    ),
    '',
    '## Aulas publicadas',
    '',
    ...lessons.map(({ course, uc, lesson }) => {
      const route =
        '/curso/' +
        course.slug +
        '/uc/' +
        uc.slug +
        '/aula/' +
        lesson.slug;
      return (
        '- [' +
        lesson.title +
        '](' +
        absoluteUrl(route) +
        '): ' +
        lesson.objectives.slice(0, 2).join(' ')
      );
    }),
    '',
    '## Arquivos para agentes',
    '',
    '- [Índice detalhado](' + absoluteUrl('/llms-full.txt') + ')',
    '- [Sitemap XML](' + absoluteUrl('/sitemap.xml') + ')',
    ''
  ].join('\n');

  const full = [
    '# ' + seoSite.name + ' — índice detalhado',
    '',
    seoSite.defaultDescription,
    '',
    ...lessons.flatMap(({ course, uc, lesson }) => {
      const route =
        '/curso/' +
        course.slug +
        '/uc/' +
        uc.slug +
        '/aula/' +
        lesson.slug;
      return [
        '## ' + lesson.title,
        '',
        'URL: ' + absoluteUrl(route),
        'Curso: ' + course.title,
        'Unidade: ' + uc.title,
        'Duração: ' + lesson.durationMinutes + ' minutos',
        'Público: ' + lesson.audience,
        '',
        '### Objetivos',
        '',
        ...lesson.objectives.map((objective) => '- ' + objective),
        '',
        '### Estrutura',
        '',
        ...lesson.slides.map((slide) => '- ' + slide.title),
        ''
      ];
    })
  ].join('\n');

  fs.writeFileSync(path.join(DIST_DIR, 'llms.txt'), short, 'utf8');
  fs.writeFileSync(path.join(DIST_DIR, 'llms-full.txt'), full, 'utf8');
}

function main() {
  if (!fs.existsSync(BASE_INDEX)) {
    throw new Error('dist/index.html não encontrado. Execute o Webpack antes do gerador de SEO.');
  }

  const baseHtml = fs.readFileSync(BASE_INDEX, 'utf8');
  const pages = getPublicSeoPages();

  for (const page of pages) writeRoute(baseHtml, page);

  writeSitemap(pages);
  writeRobots();
  writeLlms();

  console.log(
    '[SEO] Gerados ' +
      pages.length +
      ' documentos de rota + sitemap.xml + robots.txt + llms.txt.'
  );
}

main();
