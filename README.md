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
- Vite
- conteúdo tipado e reutilizável
- html-to-image para captura visual
- jsPDF para PDF
- PptxGenJS para PPTX
- Vitest
- GitHub Actions

## Executar no Windows 11

```powershell
git clone https://github.com/vlimap/materialdeaulas.git
cd materialdeaulas
npm install
npm run dev
```

Acesse:

```text
http://localhost:5173
```

## Build

```powershell
npm test
npm run build
npm run preview
```

## Decisão importante sobre PPTX

Nesta primeira versão, o PPTX preserva **fidelidade visual**: cada slide é inserido como imagem 16:9. Isso evita divergência entre a versão web e o PowerPoint. A arquitetura permite evoluir depois para exportação semântica/editável.

Consulte [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
