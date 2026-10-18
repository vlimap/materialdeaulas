# Curso HTML5 — currículo integral

**Público:** iniciantes em desenvolvimento web. **Carga:** 12 aulas × 4 horas = **48 horas (2.880 minutos)**.

## Resultado final

Criar um site multipágina, navegável somente por teclado, com estrutura semântica, dados tabulares acessíveis, formulários de demonstração, mídia com alternativas textuais, imagens responsivas e metadados adequados.

A sequência privilegia HTML nativo e conteúdo legível sem CSS ou JavaScript. Estilização e interações programadas são aprofundadas em cursos posteriores.

| Aula | Tema | Prática de laboratório |
| --- | --- | --- |
| 01 | Fundamentos da Web | Primeiro documento e separação HTML/CSS |
| 02 | Textos, listas, links e imagens | Guia de estudos com navegação |
| 03 | Estrutura semântica | Agenda cultural com landmarks |
| 04 | Tabelas | Horários acessíveis de biblioteca |
| 05 | Formulários I | Pré-inscrição fictícia |
| 06 | Formulários II | Restrições de validação nativa |
| 07 | Áudio, vídeo e embeds | Portal demonstrativo com transcrição |
| 08 | Imagens responsivas | Galeria com picture/srcset |
| 09 | Acessibilidade | Auditoria e correção de atendimento |
| 10 | SEO e metadados | Documento com title, canonical, OG e JSON-LD |
| 11 | Recursos nativos modernos | FAQ, popover, progress e meter |
| 12 | Projeto integrador | Site com Início, Agenda e Contato |

Todas as aulas possuem objetivos observáveis, exemplos de marcação, exercícios, checkpoints de compreensão, laboratório e checklist. Cada aula reserva 20 minutos para retomada, 120 minutos para quatro blocos de conceitos e questões, 15 minutos de intervalo, 55 minutos de laboratório e 30 minutos de revisão.

## Projeto final — rubricagem

Veja `labs/html/aula-12/CHECKLIST.md`. A avaliação distribui **16 pontos** por oito critérios (0 = ausente, 1 = parcial, 2 = comprovado): páginas e links, semântica, tabela, formulário, acessibilidade, SEO e validação. Recomenda-se **13 pontos**, sem falhas críticas de navegação ou acessibilidade.

## Execução

Os diretórios em `labs/html/aula-NN/` contêm `index.html` e `README.md`; a Aula 12 inclui `agenda.html` e `contato.html`. Abra os arquivos localmente no navegador e teste sem conexão externa.

- Aula 07: `poster.svg` e `legendas-pt.vtt` são arquivos de demonstração. **Nenhum vídeo ou áudio protegido é incluído**: para verificar reprodução, coloque seu próprio arquivo de teste em `midia/aula.mp4` e ajuste os tempos do WebVTT.
- Aula 08: os arquivos SVG locais de 320 e 960 pixels viabilizam verificar `picture` e `srcset`.
- Aula 10: `example.org` é um domínio reservado para documentação. Substitua por domínio real somente antes de publicar outro site.
- Formulários demonstrativos não possuem backend. Não forneça dados pessoais reais.

## Revisão técnica e pedagógica

1. Conferir se cada aula tem objetivos, questões com resposta e explicação, código, exercício, laboratório, referências e checklist.
2. Garantir que nenhuma rota, imagem, legenda ou link interno fique inacessível por erro de caminho.
3. Conferir que cada `id` de slide seja único em sua aula, os `slugs` sejam únicos no curso e os laboratórios locais existam.
4. Revisar leitura sem CSS, hierarquia de headings, nomes de formulários, `alt`, foco por teclado e responsividade em largura de 320–430 px.
5. Executar `npm ci`, `npm test`, `npm run build`, `npm run test:server` e `npm audit --audit-level=low`, além do CodeQL e do preview da Vercel.

## Referências normativas e didáticas

- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/multipage/)
- [MDN — HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [W3C WAI — Tutorials](https://www.w3.org/WAI/tutorials/)
- [W3C Nu HTML Checker](https://validator.w3.org/nu/)
- [Google Search Central — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## Publicação

A entrega é **única por curso**, em PR direcionado à `main`. Não publique aulas isoladas nem marque o curso como concluído antes da revisão e verificação dos checks e do deploy.
