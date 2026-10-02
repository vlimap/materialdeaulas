# Arquitetura dos materiais

## Objetivo

Manter uma única fonte de conteúdo para:

1. apresentação navegável no navegador;
2. download em PDF;
3. download em PPTX.

A exportação não mantém os objetos do PPTX editáveis: cada slide é capturado em alta resolução e inserido como uma imagem 16:9. A escolha é intencional nesta primeira versão porque garante fidelidade visual entre Web, PDF e PowerPoint.

## Toolchain

A aplicação usa React + TypeScript com **Webpack 5**.

A escolha evita a dependência direta de Rollup e esbuild no fluxo de desenvolvimento e build. Isso é relevante para máquinas Windows gerenciadas em que App Control/Code Integrity bloqueia módulos nativos `.node` e executáveis baixados em `node_modules`.

Fluxo:

```text
TypeScript / TSX
      ↓
   ts-loader
      ↓
   Webpack 5
      ↓
     dist/
```

O servidor de desenvolvimento é o `webpack-dev-server`, com fallback para as rotas do React Router.

## Organização

```text
src/
  content/
    catalog.ts
    fullstack/
      aula-01-html-css.ts
  components/
    deck/
      DeckPlayer.tsx
      SlideRenderer.tsx
  lib/
    exportDeck.ts
  styles/
    tokens.css
    global.css

scripts/
  test-catalog.ts

webpack.config.cjs
tsconfig.json
tsconfig.test.json
```

A hierarquia lógica é:

```text
Curso
└── Unidade Curricular
    └── Módulo
        └── Aula (4h)
            └── Slides
```

## Escala

Uma nova aula deve:

1. implementar `LessonDefinition`;
2. usar somente os tipos de slide já existentes quando possível;
3. adicionar um novo renderer apenas quando surgir uma necessidade pedagógica real;
4. entrar no `catalog.ts`;
5. ganhar teste de integridade.

Dessa forma, HTML/CSS, JavaScript, React, Back-End e Projeto Integrador reutilizam o mesmo motor.

## Identidade visual

Tokens definidos para o projeto:

- Azul principal: `#0D47A1`;
- Azul secundário: `#1565C0`;
- Amarelo de destaque: `#F2C53D`;
- preto: `#292929`;
- tipografia principal: Rubik.

O motor usa uma linguagem direta, escura e orientada a cursos de tecnologia.

## Exportação

`html-to-image` rasteriza os slides em 1600×900.

- PDF: `jsPDF`;
- PPTX: `PptxGenJS`.

Vantagens:

- funciona 100% no navegador;
- não depende de backend ou Playwright em produção;
- o botão de download funciona em hospedagem estática/Vercel;
- o resultado mantém a mesma composição do slide exibido.

Evolução futura: criar uma segunda estratégia de PPTX semântico/editável para tipos de slide simples.

## Acessibilidade

O layout inclui navegação por teclado, foco visível, link de salto para o conteúdo principal, `aria-live` para o contador de slides e suporte a `prefers-reduced-motion`. O VLibras Widget é carregado no `index.html` pelo script oficial e deve ser tratado como apoio adicional à linguagem simples, texto alternativo, legendas e transcrições.

Consulte [docs/ACCESSIBILITY.md](ACCESSIBILITY.md) e [CONTRIBUTING.md](../CONTRIBUTING.md).
