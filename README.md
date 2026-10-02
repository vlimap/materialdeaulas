# Material de Aulas — Val Lima

Plataforma web para organizar materiais por **curso → unidade curricular → módulo → aula**, com foco inicial em **Programador Full Stack**.

## Primeira entrega

- UC: Desenvolvimento Front-End
- trilha: HTML
- Aula 01: **HTML: da história da Web à primeira página**
- duração: 4 horas
- público: iniciantes
- deck navegável no navegador
- identidade visual baseada no projeto público de Val Lima
- download direto em PDF
- download direto em PPTX
- estrutura pronta para JavaScript e React

## Stack

- React + TypeScript
- Webpack 5 + webpack-dev-server
- TypeScript compiler via ts-loader
- conteúdo tipado e reutilizável
- html-to-image para captura visual
- jsPDF para PDF
- PptxGenJS para PPTX
- testes de integridade com Node.js + ts-node
- GitHub Actions

A toolchain evita Vite/Rollup/esbuild para não depender dos binários nativos que podem ser bloqueados por Windows App Control em ambientes gerenciados.

## Executar no Windows 11

Depois de atualizar o repositório, faça uma instalação limpa para eliminar dependências antigas do Vite/Rollup:

```powershell
git pull origin main

Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

npm install
npm run dev
```

Acesse:

```text
http://localhost:5173
```

## Testes e build

```powershell
npm test
npm run build
npm run preview
```

## Como contribuir

O projeto aceita contribuições de conteúdo, código, acessibilidade e documentação.

1. Abra uma issue explicando o que será criado ou corrigido.
2. Crie uma branch curta a partir de `main`.
3. Faça a alteração seguindo o [guia de contribuição](CONTRIBUTING.md).
4. Para aulas, siga o [guia de criação de aulas](docs/LESSON_AUTHORING.md).
5. Abra um PR usando o checklist do repositório.

Cada PR deve ter escopo pequeno, testes executados e uma explicação simples de como revisar a mudança. A CI verifica `npm test` e `npm run build` antes do merge.

## Acessibilidade

A interface tem navegação por teclado, foco visível, link para pular ao conteúdo, suporte a redução de movimento e integração com o VLibras. Consulte [docs/ACCESSIBILITY.md](docs/ACCESSIBILITY.md) antes de criar uma aula ou componente.

Consulte também o [Código de Conduta](CODE_OF_CONDUCT.md).

## Windows App Control

Se uma máquina corporativa bloquear arquivos `.node` ou executáveis dentro de `node_modules`, não desative a política de segurança para executar este projeto. A stack de desenvolvimento foi escolhida para funcionar sem o Rollup nativo e sem o esbuild.

Consulte [docs/WINDOWS.md](docs/WINDOWS.md).

## Decisão importante sobre PPTX

Nesta primeira versão, o PPTX preserva **fidelidade visual**: cada slide é inserido como imagem 16:9. Isso evita divergência entre a versão web e o PowerPoint. A arquitetura permite evoluir depois para exportação semântica/editável.

Consulte [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).


## Uso do material por professores

Professores podem utilizar e apresentar este material em atividades educacionais. A apresentação deve ser utilizada **em sua forma original**, preservando conteúdo, identidade visual, autoria, créditos e licença.

Não é permitida a redistribuição de versões modificadas nem a substituição da identidade visual.

Consulte [CONTENT-LICENSE.md](CONTENT-LICENSE.md) para os termos completos.
