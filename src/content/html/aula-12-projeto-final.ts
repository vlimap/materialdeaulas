import { buildHtmlLesson } from './build-html-lesson';

export const aula12Html = buildHtmlLesson({
  "number": 12,
  "slug": "aula-12-projeto-final",
  "title": "Projeto final HTML: site multipágina completo",
  "shortTitle": "Projeto final",
  "purpose": "Integrar semântica, acessibilidade, formulários e metadados em um site realista.",
  "context": "Uma biblioteca comunitária precisa apresentar horários, atividades e contato em páginas ligadas entre si, oferecendo conteúdo acessível antes de qualquer estilização.",
  "objectives": [
    "Planejar três páginas ligadas por navegação consistente.",
    "Construir estrutura semântica e conteúdo completo em cada página.",
    "Integrar dados tabulares, formulários, imagens e metadados com responsabilidade.",
    "Executar checklist de qualidade e justificar escolhas técnicas."
  ],
  "topics": [
    {
      "title": "Arquitetura de informações",
      "lead": "Planeje páginas pelo que as pessoas procuram.",
      "detail": "Escolha rotas estáticas previsíveis; configure links relativos; mantenha identidade e menu consistentes.",
      "example": "<nav aria-label=\"Menu principal\">\n  <a href=\"index.html\">Início</a>\n  <a href=\"agenda.html\">Agenda</a>\n  <a href=\"contato.html\">Contato</a>\n</nav>",
      "bullets": [
        "Nomeie rotas de forma previsível.",
        "Evite links quebrados entre páginas.",
        "Indique a página atual quando apropriado."
      ],
      "question": "Qual prática reduz a confusão em um site com três páginas?",
      "options": [
        "Navegação diferente em cada página",
        "Mesmo menu com links válidos",
        "Todos os links com texto 'clique aqui'"
      ],
      "correct": 1,
      "feedback": "Navegação consistente facilita encontrar o caminho entre páginas."
    },
    {
      "title": "Semântica e conteúdo",
      "lead": "Uma página deve fazer sentido sem CSS.",
      "detail": "Use regiões, hierarquia de títulos, textos úteis, links descritivos e tabelas apenas para dados reais.",
      "example": "<main id=\"conteudo\">\n  <h1>Biblioteca Comunitária</h1>\n  <section aria-labelledby=\"atividades\">\n    <h2 id=\"atividades\">Atividades</h2>\n    <article><h3>Oficina HTML</h3><p>Encontro gratuito.</p></article>\n  </section>\n</main>",
      "bullets": [
        "Um h1 claro indica o tema principal.",
        "Cabeçalhos seguem níveis lógicos.",
        "Regiões ajudam tecnologias assistivas."
      ],
      "question": "Qual elemento é indicado para uma atividade independente?",
      "options": [
        "article",
        "br",
        "strong"
      ],
      "correct": 0,
      "feedback": "article agrupa conteúdo independente; section pode organizar grupos temáticos."
    },
    {
      "title": "Formulários que respeitam privacidade",
      "lead": "Nem todo contato precisa enviar dados reais.",
      "detail": "Um formulário demonstrativo deve deixar explícito quando não tem backend, sem simular tratamento real de mensagens.",
      "example": "<form action=\"#\" method=\"get\">\n  <p>Simulação: não informe dados reais.</p>\n  <label for=\"assunto\">Assunto fictício</label>\n  <input id=\"assunto\" name=\"assunto\" required>\n  <button type=\"submit\">Validar exemplo</button>\n</form>",
      "bullets": [
        "Não anuncie envio real sem backend.",
        "Use label e validação nativa.",
        "Proteção de dados precisa ser planejada no servidor."
      ],
      "question": "O que o formulário puramente HTML sem backend NÃO oferece?",
      "options": [
        "Rótulos acessíveis",
        "Envio e armazenamento reais garantidos",
        "Verificação required"
      ],
      "correct": 1,
      "feedback": "HTML não cria backend nem garante tratamento de dados; o exercício é demonstrativo."
    },
    {
      "title": "Qualidade e evidências",
      "lead": "Validar é parte do projeto.",
      "detail": "Inspecione links, marcação, alternativas textuais, tamanho de tela, teclado e acessibilidade; registre correções necessárias.",
      "example": "<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Agenda | Biblioteca Comunitária</title>\n  <meta name=\"description\" content=\"Atividades e horários da biblioteca comunitária.\">\n</head>",
      "bullets": [
        "Use metadados próprios para cada página.",
        "Teste navegação sem mouse.",
        "Documente evidências de funcionamento."
      ],
      "question": "O que caracteriza um site pronto para revisão?",
      "options": [
        "Só ter aparência bonita",
        "Ter HTML válido, links funcionais e critérios testados",
        "Ter muitos elementos div"
      ],
      "correct": 1,
      "feedback": "Pronto para revisão significa funcionalidade, conteúdo e critérios de qualidade verificáveis."
    }
  ],
  "labTitle": "Conclua um site de biblioteca com três páginas",
  "starterCode": "<!doctype html>\n<html lang=\"pt-BR\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Biblioteca Comunitária | Início</title><meta name=\"description\" content=\"Conheça a biblioteca comunitária e sua programação de oficinas.\"></head><body>\n<a href=\"#conteudo\">Pular para o conteúdo</a>\n<header><h1>Biblioteca Comunitária</h1><nav aria-label=\"Menu principal\"><a href=\"index.html\" aria-current=\"page\">Início</a> <a href=\"agenda.html\">Agenda</a> <a href=\"contato.html\">Contato</a></nav></header>\n<main id=\"conteudo\"><section><h2>Bem-vindo</h2><p>Conhecimento compartilhado e acesso gratuito.</p></section><article><h2>Oficina HTML</h2><p>Aprenda estrutura, semântica e acessibilidade.</p><a href=\"agenda.html\">Veja a programação</a></article></main>\n<footer><p>Projeto educacional fictício.</p></footer>\n</body></html>",
  "labSteps": [
    "Edite index.html, agenda.html e contato.html com conteúdo fictício.",
    "Verifique todos os links relativos e a consistência da navegação.",
    "Inclua horários como tabela e formulário demonstrativo em páginas apropriadas.",
    "Registre resultado da verificação HTML, teclado e tamanhos de tela."
  ],
  "guidedSteps": [
    "Faça um mapa de conteúdo com Início, Agenda e Contato.",
    "Abra todos os links em navegador local.",
    "Compare as versões com e sem CSS."
  ],
  "individualSteps": [
    "Revise heading, labels, alt e metadados nas três páginas.",
    "Simule largura de 375px e navegação somente por teclado.",
    "Apresente três decisões técnicas e sua justificativa."
  ],
  "success": [
    "Três páginas HTML existem e todos os links internos funcionam.",
    "Conteúdo principal, títulos, landmarks e metadados são coerentes.",
    "Agenda tem tabela acessível e Contato não coleta dados reais.",
    "Uma revisão registra testes, limitações e melhorias futuras."
  ],
  "extraSources": [
    {
      "label": "Nu HTML Checker",
      "url": "https://validator.w3.org/nu/"
    },
    {
      "label": "W3C WCAG Quick Reference",
      "url": "https://www.w3.org/WAI/WCAG22/quickref/"
    }
  ]
});
