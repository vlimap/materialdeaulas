# Material de Aulas — Senac Labs

Plataforma web para organizar materiais por **curso → unidade curricular → módulo → aula**, com foco inicial em **Programador Full Stack**.

## Primeira entrega

- UC: Desenvolvimento Front-End
- módulo: HTML e CSS
- Aula 01: **Como a Web funciona: primeiros passos com HTML e CSS**
- duração: 4 horas
- público: iniciantes
- deck navegável no navegador
- identidade baseada no Design System Senac RN
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

## Windows App Control

Se uma máquina corporativa bloquear arquivos `.node` ou executáveis dentro de `node_modules`, não desative a política de segurança para executar este projeto. A stack de desenvolvimento foi escolhida para funcionar sem o Rollup nativo e sem o esbuild.

Consulte [docs/WINDOWS.md](docs/WINDOWS.md).

## Decisão importante sobre PPTX

Nesta primeira versão, o PPTX preserva **fidelidade visual**: cada slide é inserido como imagem 16:9. Isso evita divergência entre a versão web e o PowerPoint. A arquitetura permite evoluir depois para exportação semântica/editável.

Consulte [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
