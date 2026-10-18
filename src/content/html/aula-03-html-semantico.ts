import type { LessonDefinition } from '../../types/course';

export const aula03Html: LessonDefinition = {
  "id": "html-aula-03",
  "status": "published",
  "slug": "aula-03-html-semantico",
  "number": 3,
  "title": "HTML semântico: estrutura e significado",
  "shortTitle": "HTML semântico",
  "durationMinutes": 240,
  "audience": "Iniciantes em desenvolvimento web",
  "ucSlug": "fundamentos-html5",
  "objectives": [
    "Organizar páginas com header, nav, main, section, article, aside e footer.",
    "Escolher elementos pelo significado e não pela aparência.",
    "Usar figure, figcaption, time e address quando apropriado.",
    "Reconhecer quando div e span continuam sendo adequados."
  ],
  "sources": [
    {
      "label": "HTML Living Standard",
      "author": "WHATWG",
      "note": "Referência normativa para os elementos de seção."
    },
    {
      "label": "MDN HTML elements",
      "author": "Mozilla",
      "note": "Referência didática complementar."
    }
  ],
  "lab": {
    "workspacePath": "labs/html/aula-03/index.html",
    "editorLabel": "Abrir atividade da Aula 03 no VS Code Web"
  },
  "slides": [
    {
      "id": "capa",
      "kind": "cover",
      "eyebrow": "HTML · Aula 03",
      "title": "HTML semântico",
      "subtitle": "Estrutura e significado antes da aparência",
      "badge": "Aula 03",
      "duration": "4 horas"
    },
    {
      "id": "objetivos",
      "kind": "statement",
      "eyebrow": "Ao concluir",
      "title": "Escolha elementos pelo papel do conteúdo.",
      "lead": "Significado primeiro; aparência depois.",
      "detail": "Você construirá uma página com regiões claras, artigos, datas, citações e contato.",
      "chips": [
        "header",
        "nav",
        "main",
        "section",
        "article",
        "aside",
        "footer"
      ]
    },
    {
      "id": "roteiro",
      "kind": "cards",
      "eyebrow": "240 minutos",
      "title": "Roteiro da aula",
      "items": [
        {
          "kicker": "20 min",
          "title": "Retomada",
          "detail": "Títulos, links e significado"
        },
        {
          "kicker": "30 min",
          "title": "Regiões",
          "detail": "header, nav, main e footer"
        },
        {
          "kicker": "35 min",
          "title": "Conteúdo",
          "detail": "section, article e aside"
        },
        {
          "kicker": "30 min",
          "title": "Elementos",
          "detail": "figure, time e address"
        },
        {
          "kicker": "15 min",
          "title": "Intervalo",
          "detail": "Pausa"
        },
        {
          "kicker": "30 min",
          "title": "Escolhas",
          "detail": "div, span e boas práticas"
        },
        {
          "kicker": "20 min",
          "title": "Diagnóstico",
          "detail": "Questões e revisão"
        },
        {
          "kicker": "45 min",
          "title": "Laboratório",
          "detail": "Agenda cultural"
        },
        {
          "kicker": "15 min",
          "title": "Validação",
          "detail": "Checklist e referências"
        }
      ]
    },
    {
      "id": "retomada",
      "kind": "statement",
      "eyebrow": "Aula 02 → Aula 03",
      "title": "Uma página tem regiões com funções diferentes.",
      "lead": "Títulos organizam; regiões contextualizam.",
      "detail": "Agora vamos agrupar textos, links e imagens conforme o papel que exercem.",
      "chips": [
        "hierarquia",
        "navegação",
        "regiões"
      ]
    },
    {
      "id": "semantica",
      "kind": "statement",
      "eyebrow": "Conceito",
      "title": "Semântica é significado, não aparência.",
      "lead": "nav comunica navegação.",
      "detail": "CSS altera a apresentação, mas não muda a função semântica de um elemento.",
      "chips": [
        "HTML",
        "significado",
        "acessibilidade"
      ]
    },
    {
      "id": "regioes",
      "kind": "cards",
      "eyebrow": "Regiões",
      "title": "Cada elemento responde a uma pergunta",
      "items": [
        {
          "title": "header",
          "detail": "O que apresenta a página ou seção?"
        },
        {
          "title": "nav",
          "detail": "Onde estão os links de navegação?"
        },
        {
          "title": "main",
          "detail": "Qual é o conteúdo principal?"
        },
        {
          "title": "footer",
          "detail": "Quais são as informações finais?"
        }
      ]
    },
    {
      "id": "estrutura",
      "kind": "code",
      "eyebrow": "Exemplo",
      "title": "Organize regiões com HTML nativo",
      "language": "html",
      "code": "<header>\n  <h1>Jornal da escola</h1>\n  <nav aria-label=\"Menu principal\">\n    <a href=\"#noticias\">Notícias</a>\n  </nav>\n</header>\n<main id=\"noticias\">\n  <article>\n    <h2>Feira de ciências</h2>\n    <p>Notícia independente.</p>\n  </article>\n</main>\n<footer>Informações gerais</footer>",
      "bullets": [
        "main contém o conteúdo dominante.",
        "header e footer podem pertencer à página ou a um artigo.",
        "nav agrupa links importantes de navegação."
      ]
    },
    {
      "id": "questao-main",
      "kind": "challenge",
      "eyebrow": "Checkpoint",
      "title": "Qual elemento representa o conteúdo principal?",
      "prompt": "Qual região identifica o conteúdo dominante de uma página convencional?",
      "options": [
        {
          "label": "<aside>"
        },
        {
          "label": "<main>"
        },
        {
          "label": "<footer>"
        }
      ],
      "answerIndex": 1,
      "explanation": "main identifica o conteúdo dominante; em geral, apenas um main deve estar visível."
    },
    {
      "id": "header-footer",
      "kind": "cards",
      "eyebrow": "Contexto",
      "title": "header e footer podem existir dentro de article",
      "items": [
        {
          "title": "header da página",
          "detail": "Identidade e introdução"
        },
        {
          "title": "header do artigo",
          "detail": "Título, autoria e data"
        },
        {
          "title": "footer do artigo",
          "detail": "Créditos e notas finais"
        },
        {
          "title": "footer da página",
          "detail": "Contato e informações gerais"
        }
      ]
    },
    {
      "id": "nav",
      "kind": "statement",
      "eyebrow": "Navegação",
      "title": "Nem todo link precisa estar em nav.",
      "lead": "Use nav para conjuntos relevantes de navegação.",
      "detail": "Um link isolado em um parágrafo não exige nav. Dê nomes a menus distintos.",
      "chips": [
        "nav",
        "aria-label",
        "links"
      ]
    },
    {
      "id": "section-article",
      "kind": "code",
      "eyebrow": "Organização",
      "title": "section é temática; article é independente",
      "language": "html",
      "code": "<main>\n  <section aria-labelledby=\"cursos\">\n    <h2 id=\"cursos\">Cursos disponíveis</h2>\n    <p>Conheça as trilhas de estudo.</p>\n  </section>\n  <article>\n    <h2>Como estudar HTML?</h2>\n    <p>Um texto que faz sentido sozinho.</p>\n  </article>\n</main>",
      "bullets": [
        "section costuma ter título e agrupa um tema.",
        "article pode fazer sentido isoladamente, como notícia ou postagem.",
        "Evite usar section só para criar uma caixa visual."
      ]
    },
    {
      "id": "questao-article",
      "kind": "challenge",
      "eyebrow": "Decisão",
      "title": "Uma notícia completa pode circular sozinha",
      "prompt": "Qual elemento é mais adequado para uma notícia reutilizável em outra página?",
      "options": [
        {
          "label": "<article>"
        },
        {
          "label": "<span>"
        },
        {
          "label": "<nav>"
        }
      ],
      "answerIndex": 0,
      "explanation": "article representa conteúdo independente, como notícias, comentários ou posts."
    },
    {
      "id": "aside",
      "kind": "code",
      "eyebrow": "Complemento",
      "title": "aside oferece conteúdo relacionado e secundário",
      "language": "html",
      "code": "<main>\n  <article><h2>Guia de HTML</h2></article>\n  <aside aria-labelledby=\"extra\">\n    <h2 id=\"extra\">Leitura complementar</h2>\n    <p>Consulte a especificação oficial.</p>\n  </aside>\n</main>",
      "bullets": [
        "O texto principal deve continuar compreensível sem o aside.",
        "aside não precisa aparecer visualmente na lateral."
      ]
    },
    {
      "id": "figure-time",
      "kind": "code",
      "eyebrow": "Significado",
      "title": "time e figure representam informação estruturada",
      "language": "html",
      "code": "<article>\n  <h2>Oficina de acessibilidade</h2>\n  <p>Em <time datetime=\"2026-11-10\">10/11/2026</time>.</p>\n  <figure>\n    <blockquote>Aprender abre caminhos.</blockquote>\n    <figcaption>Frase criada para esta aula.</figcaption>\n  </figure>\n</article>",
      "bullets": [
        "datetime fornece data em formato legível por máquinas.",
        "figure pode agrupar uma citação, imagem ou diagrama.",
        "figcaption é a legenda do conteúdo da figure."
      ]
    },
    {
      "id": "address",
      "kind": "code",
      "eyebrow": "Contato",
      "title": "address identifica o contato responsável",
      "language": "html",
      "code": "<footer>\n  <address>\n    Escreva para <a href=\"mailto:contato@example.org\">a equipe</a>.\n  </address>\n</footer>",
      "bullets": [
        "Use address para contato do artigo ou documento.",
        "Não use address como contêiner genérico para qualquer endereço."
      ]
    },
    {
      "id": "div-span",
      "kind": "code",
      "eyebrow": "Contêineres neutros",
      "title": "div e span continuam necessários",
      "language": "html",
      "code": "<div class=\"cartao\">\n  <p>Inscrição <span class=\"estado\">aberta</span>.</p>\n</div>",
      "bullets": [
        "div agrupa blocos sem significado específico.",
        "span agrupa trechos em linha sem significado específico.",
        "Não troque um elemento semântico por div apenas por costume."
      ]
    },
    {
      "id": "questao-section",
      "kind": "challenge",
      "eyebrow": "Diagnóstico",
      "title": "Qual elemento agrupa um tema?",
      "prompt": "Uma seção 'Cursos disponíveis' reúne título e parágrafos, sem ser um artigo independente.",
      "options": [
        {
          "label": "<section>"
        },
        {
          "label": "<footer>"
        },
        {
          "label": "<span>"
        }
      ],
      "answerIndex": 0,
      "explanation": "section agrupa um tema do documento, normalmente identificado por um título."
    },
    {
      "id": "erros",
      "kind": "cards",
      "eyebrow": "Boas práticas",
      "title": "Escolha pelo papel, não pelo layout",
      "items": [
        {
          "title": "section sem tema",
          "detail": "Prefira div para agrupamento visual."
        },
        {
          "title": "article para toda caixa",
          "detail": "Use apenas para conteúdo independente."
        },
        {
          "title": "aside sempre lateral",
          "detail": "Posição visual não define semântica."
        },
        {
          "title": "nav para todo link",
          "detail": "Reserve para navegação relevante."
        }
      ]
    },
    {
      "id": "acessibilidade",
      "kind": "statement",
      "eyebrow": "Leitura assistiva",
      "title": "Semântica ajuda a navegar pelo documento.",
      "lead": "Regiões nativas facilitam a orientação.",
      "detail": "Prefira HTML semântico, títulos coerentes e links descritivos antes de acrescentar ARIA.",
      "chips": [
        "landmarks",
        "headings",
        "teclado"
      ]
    },
    {
      "id": "laboratorio",
      "kind": "exercise",
      "eyebrow": "Prática · 45 min",
      "title": "Monte uma agenda cultural",
      "challenge": "Complete a página inicial do laboratório com conteúdo semântico.",
      "steps": [
        "Abra labs/html/aula-03/index.html no editor.",
        "Adicione outro evento com article, h3 e time datetime.",
        "Inclua figure com figcaption e uma citação curta.",
        "Teste os links do menu e navegue com Tab e Enter.",
        "Valide a estrutura HTML e revise os critérios."
      ],
      "success": [
        "Existe um único main visível.",
        "O menu aponta para IDs existentes.",
        "Cada evento possui título e data.",
        "A página é legível sem CSS e JavaScript."
      ],
      "timebox": "45 min"
    },
    {
      "id": "codigo-lab",
      "kind": "lab",
      "eyebrow": "Prática guiada",
      "title": "Edite e teste o HTML semântico",
      "language": "html",
      "starterCode": "<!doctype html>\n<html lang=\"pt-BR\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>Agenda cultural | Natal</title>\n  </head>\n  <body>\n    <header>\n      <h1>Agenda cultural de Natal</h1>\n      <nav aria-label=\"Navegação principal\">\n        <a href=\"#eventos\">Eventos</a>\n        <a href=\"#contato\">Contato</a>\n      </nav>\n    </header>\n    <main>\n      <section id=\"eventos\" aria-labelledby=\"titulo-eventos\">\n        <h2 id=\"titulo-eventos\">Próximos eventos</h2>\n        <article>\n          <h3>Oficina de HTML</h3>\n          <p>Em <time datetime=\"2026-11-10\">10 de novembro</time>.</p>\n          <p>Aprenda a criar documentos acessíveis.</p>\n        </article>\n        <!-- Sua vez: adicione outro article com data. -->\n      </section>\n      <aside aria-labelledby=\"dica\">\n        <h2 id=\"dica\">Dica de estudo</h2>\n        <p>Experimente navegar sem usar o mouse.</p>\n      </aside>\n    </main>\n    <footer id=\"contato\">\n      <address>\n        Contato: <a href=\"mailto:contato@example.org\">Equipe do projeto</a>\n      </address>\n    </footer>\n  </body>\n</html>\n",
      "instructions": [
        "Altere o título da agenda.",
        "Inclua o segundo article na section.",
        "Acrescente uma figure com figcaption.",
        "Teste os links internos e a navegação por teclado."
      ],
      "editorPath": "labs/html/aula-03/index.html"
    },
    {
      "id": "checklist",
      "kind": "checklist",
      "eyebrow": "Conclusão",
      "title": "Verifique a semântica",
      "items": [
        "Um main visível com o conteúdo dominante.",
        "header, nav e footer com funções claras.",
        "section temática e artigos independentes.",
        "aside com conteúdo complementar.",
        "time com datetime válido; figure com figcaption.",
        "address usado para contato.",
        "Títulos em ordem lógica e links funcionais."
      ],
      "prompt": "Você consegue justificar a escolha de cada elemento?"
    },
    {
      "id": "fontes",
      "kind": "references",
      "eyebrow": "Referências",
      "title": "Documentação oficial",
      "items": [
        {
          "label": "HTML Living Standard — Sections",
          "url": "https://html.spec.whatwg.org/multipage/sections.html"
        },
        {
          "label": "MDN — HTML elements",
          "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
        },
        {
          "label": "W3C WAI — Page structure",
          "url": "https://www.w3.org/WAI/tutorials/page-structure/"
        }
      ]
    },
    {
      "id": "proxima",
      "kind": "statement",
      "eyebrow": "Aula 04",
      "title": "Próximo passo: dados em tabelas.",
      "lead": "Uma tabela organiza dados, não o layout.",
      "detail": "Na próxima aula, vamos trabalhar table, caption, th, td e scope.",
      "chips": [
        "table",
        "caption",
        "th",
        "td"
      ]
    }
  ]
};
