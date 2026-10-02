# SEO e GEO dinâmicos

A plataforma gera metadados a partir do catálogo e das definições das aulas. Não é necessário cadastrar SEO manualmente quando uma nova aula é publicada.

## Fonte única

Os dados vêm de:

- `src/content/catalog.ts`;
- cursos específicos, como `src/content/html/course.ts`;
- cada `LessonDefinition`.

Uma aula passa a entrar em SEO/GEO quando:

```ts
status: 'published'
```

e possui slides publicados.

## Build

```text
webpack
   ↓
dist/index.html
   ↓
scripts/generate-seo.ts
   ├── HTML estático por rota
   ├── canonical
   ├── description
   ├── robots
   ├── Open Graph
   ├── Twitter Card
   ├── JSON-LD
   ├── sitemap.xml
   ├── robots.txt
   ├── llms.txt
   └── llms-full.txt
```

## Dados estruturados

São gerados conforme a página:

- `WebSite`;
- `CollectionPage`;
- `ItemList`;
- `Course` quando houver conteúdo publicado;
- `LearningResource` para aulas;
- `BreadcrumbList`.

A lista de cursos estruturados só é emitida quando existem pelo menos três cursos reais publicados, evitando representar placeholders como cursos concluídos.

## GEO

Para mecanismos generativos e agentes:

- títulos e descrições claros;
- objetivos de aprendizagem explícitos;
- outline dos slides;
- JSON-LD;
- HTML de fallback em `noscript`;
- `llms.txt`;
- `llms-full.txt`;
- sitemap XML;
- URLs canônicas e estáveis.

`llms.txt` é tratado como complemento de descoberta, e não substitui HTML semântico, sitemap ou dados estruturados.

## URL de produção

O gerador resolve a origem nesta ordem:

1. `SITE_URL`;
2. `VERCEL_PROJECT_PRODUCTION_URL`;
3. URL fallback definida em `src/seo/metadata.ts`.

Para domínio próprio, configure `SITE_URL` na Vercel.
