import type { LessonDefinition } from '../../types/course';

export const aula05Html: LessonDefinition = {
  "id": "html-aula-05",
  "status": "published",
  "slug": "aula-05-formularios-fundamentos",
  "number": 5,
  "title": "HTML: formulários — fundamentos",
  "shortTitle": "Formulários I",
  "durationMinutes": 240,
  "audience": "Iniciantes em desenvolvimento web",
  "ucSlug": "fundamentos-html5",
  "objectives": [
    "Explicar o papel de form, action, method e name.",
    "Relacionar label e input usando for e id.",
    "Escolher textarea, select e button conforme a interação.",
    "Agrupar campos relacionados com fieldset e legend."
  ],
  "sources": [
    {
      "label": "HTML Living Standard",
      "author": "WHATWG",
      "note": "Referência normativa."
    },
    {
      "label": "MDN Web Docs",
      "author": "Mozilla",
      "note": "Documentação complementar."
    }
  ],
  "lab": {
    "workspacePath": "labs/html/aula-05/index.html",
    "editorLabel": "Abrir laboratório da Aula 05 no VS Code Web"
  },
  "slides": [
    {
      "id": "capa",
      "kind": "cover",
      "eyebrow": "HTML5 · Aula 05",
      "title": "Formulários I",
      "subtitle": "Criar formulários compreensíveis, com rótulos e agrupamentos corretos.",
      "badge": "Aula 05",
      "duration": "4 horas"
    },
    {
      "id": "objetivos",
      "kind": "statement",
      "eyebrow": "Resultado de aprendizagem",
      "title": "Criar formulários compreensíveis, com rótulos e agrupamentos corretos.",
      "lead": "Ao final, você conseguirá aplicar os recursos em uma página real.",
      "detail": "Explicar o papel de form, action, method e name. Relacionar label e input usando for e id. Escolher textarea, select e button conforme a interação. Agrupar campos relacionados com fieldset e legend.",
      "chips": [
        "HTML nativo",
        "semântica",
        "prática"
      ]
    },
    {
      "id": "roteiro-1",
      "kind": "cards",
      "eyebrow": "Primeira metade · 110 min",
      "title": "Estudo e experimentação",
      "items": [
        {
          "kicker": "20 min",
          "title": "Retomada",
          "detail": "Conexão com a aula anterior"
        },
        {
          "kicker": "35 min",
          "title": "Conceito 1",
          "detail": "Formulário é uma interface de entrada"
        },
        {
          "kicker": "40 min",
          "title": "Conceito 2",
          "detail": "Rótulos associados"
        },
        {
          "kicker": "15 min",
          "title": "Intervalo",
          "detail": "Pausa"
        }
      ]
    },
    {
      "id": "roteiro-2",
      "kind": "cards",
      "eyebrow": "Segunda metade · 130 min",
      "title": "Aplicação e validação",
      "items": [
        {
          "kicker": "45 min",
          "title": "Conceitos 3 e 4",
          "detail": "Comparação de decisões"
        },
        {
          "kicker": "60 min",
          "title": "Laboratório",
          "detail": "Pré-inscrição em oficina"
        },
        {
          "kicker": "25 min",
          "title": "Revisão",
          "detail": "Critérios de aceite e referências"
        }
      ]
    },
    {
      "id": "contexto",
      "kind": "statement",
      "eyebrow": "Problema real",
      "title": "Por que aprender formulários i?",
      "lead": "Criar formulários compreensíveis, com rótulos e agrupamentos corretos.",
      "detail": "Antes de copiar código, identifique a necessidade, escolha o elemento e confira o resultado sem estilos.",
      "chips": [
        "problema",
        "escolha",
        "validação"
      ]
    },
    {
      "id": "conceito-1",
      "kind": "statement",
      "eyebrow": "Conceito 1",
      "title": "Formulário é uma interface de entrada",
      "lead": "O usuário informa dados; o navegador prepara o envio.",
      "detail": "action define o destino e method define o método HTTP. Sem backend, use um exemplo local sem enviar dados reais.",
      "chips": [
        "name identifica o",
        "id identifica o",
        "Não envie dados"
      ]
    },
    {
      "id": "codigo-1",
      "kind": "code",
      "eyebrow": "Exemplo 1 · execute e observe",
      "title": "Formulário é uma interface de entrada",
      "language": "html",
      "code": "<form action=\"/inscricoes\" method=\"post\">\n  <label for=\"nome\">Nome</label>\n  <input id=\"nome\" name=\"nome\" type=\"text\">\n  <button type=\"submit\">Enviar inscrição</button>\n</form>",
      "bullets": [
        "name identifica o campo enviado.",
        "id identifica o controle no documento.",
        "Não envie dados pessoais para endpoints fictícios."
      ]
    },
    {
      "id": "diagnostico-1",
      "kind": "challenge",
      "eyebrow": "Verifique sua compreensão · 1/4",
      "title": "Qual decisão é tecnicamente correta?",
      "prompt": "Qual atributo nomeia o campo no envio?",
      "options": [
        {
          "label": "name"
        },
        {
          "label": "id"
        },
        {
          "label": "class"
        }
      ],
      "answerIndex": 0,
      "explanation": "name é a chave usada na submissão do formulário."
    },
    {
      "id": "conceito-2",
      "kind": "statement",
      "eyebrow": "Conceito 2",
      "title": "Rótulos associados",
      "lead": "Cada controle precisa de um nome acessível.",
      "detail": "O label descreve a finalidade e permite clicar no texto para focar o controle.",
      "chips": [
        "for do label",
        "Placeholder não substitui",
        "Indique se o"
      ]
    },
    {
      "id": "codigo-2",
      "kind": "code",
      "eyebrow": "Exemplo 2 · execute e observe",
      "title": "Rótulos associados",
      "language": "html",
      "code": "<label for=\"email\">E-mail para contato</label>\n<input id=\"email\" name=\"email\" type=\"email\">\n\n<label for=\"telefone\">Telefone (opcional)</label>\n<input id=\"telefone\" name=\"telefone\" type=\"tel\">",
      "bullets": [
        "for do label corresponde ao id do input.",
        "Placeholder não substitui label.",
        "Indique se o campo é opcional."
      ]
    },
    {
      "id": "diagnostico-2",
      "kind": "challenge",
      "eyebrow": "Verifique sua compreensão · 2/4",
      "title": "Qual decisão é tecnicamente correta?",
      "prompt": "Qual é a relação correta?",
      "options": [
        {
          "label": "label for='email' e input id='email'"
        },
        {
          "label": "label name='email' e input class='email'"
        },
        {
          "label": "Somente placeholder"
        }
      ],
      "answerIndex": 0,
      "explanation": "for/id estabelecem associação explícita."
    },
    {
      "id": "conceito-3",
      "kind": "statement",
      "eyebrow": "Conceito 3",
      "title": "Controles adequados",
      "lead": "O tipo de controle depende da resposta esperada.",
      "detail": "textarea aceita texto longo; select apresenta opções; button dispara uma ação.",
      "chips": [
        "Dê valores claros",
        "Use textarea para",
        "Defina type em"
      ]
    },
    {
      "id": "codigo-3",
      "kind": "code",
      "eyebrow": "Exemplo 3 · execute e observe",
      "title": "Controles adequados",
      "language": "html",
      "code": "<label for=\"tema\">Tema</label>\n<select id=\"tema\" name=\"tema\">\n  <option value=\"\">Escolha um tema</option>\n  <option value=\"html\">HTML</option>\n  <option value=\"acessibilidade\">Acessibilidade</option>\n</select>\n<label for=\"mensagem\">Mensagem</label>\n<textarea id=\"mensagem\" name=\"mensagem\" rows=\"4\"></textarea>",
      "bullets": [
        "Dê valores claros às opções.",
        "Use textarea para respostas longas.",
        "Defina type em botões fora do envio."
      ]
    },
    {
      "id": "diagnostico-3",
      "kind": "challenge",
      "eyebrow": "Verifique sua compreensão · 3/4",
      "title": "Qual decisão é tecnicamente correta?",
      "prompt": "Qual elemento permite várias linhas de texto?",
      "options": [
        {
          "label": "input type='number'"
        },
        {
          "label": "textarea"
        },
        {
          "label": "option"
        }
      ],
      "answerIndex": 1,
      "explanation": "textarea é destinado a entrada textual multilinha."
    },
    {
      "id": "conceito-4",
      "kind": "statement",
      "eyebrow": "Conceito 4",
      "title": "Grupos e envio",
      "lead": "fieldset e legend explicam conjuntos de escolhas.",
      "detail": "A legenda do grupo fornece contexto a leitores de tela.",
      "chips": [
        "Radios do mesmo",
        "legend descreve o",
        "Botões devem indicar"
      ]
    },
    {
      "id": "codigo-4",
      "kind": "code",
      "eyebrow": "Exemplo 4 · execute e observe",
      "title": "Grupos e envio",
      "language": "html",
      "code": "<fieldset>\n  <legend>Turno preferido</legend>\n  <label><input type=\"radio\" name=\"turno\" value=\"manha\"> Manhã</label>\n  <label><input type=\"radio\" name=\"turno\" value=\"noite\"> Noite</label>\n</fieldset>\n<button type=\"submit\">Solicitar vaga</button>",
      "bullets": [
        "Radios do mesmo grupo compartilham name.",
        "legend descreve o conjunto.",
        "Botões devem indicar o resultado esperado."
      ]
    },
    {
      "id": "diagnostico-4",
      "kind": "challenge",
      "eyebrow": "Verifique sua compreensão · 4/4",
      "title": "Qual decisão é tecnicamente correta?",
      "prompt": "Como criar um grupo de opções exclusivas?",
      "options": [
        {
          "label": "radio com mesmo name"
        },
        {
          "label": "checkbox com nomes diferentes"
        },
        {
          "label": "textareas"
        }
      ],
      "answerIndex": 0,
      "explanation": "Radios com o mesmo name formam um grupo de escolha única."
    },
    {
      "id": "comparacao",
      "kind": "cards",
      "eyebrow": "Síntese",
      "title": "Quatro decisões que você deve justificar",
      "items": [
        {
          "kicker": "1",
          "title": "Formulário é uma interface de entrada",
          "detail": "O usuário informa dados; o navegador prepara o envio."
        },
        {
          "kicker": "2",
          "title": "Rótulos associados",
          "detail": "Cada controle precisa de um nome acessível."
        },
        {
          "kicker": "3",
          "title": "Controles adequados",
          "detail": "O tipo de controle depende da resposta esperada."
        },
        {
          "kicker": "4",
          "title": "Grupos e envio",
          "detail": "fieldset e legend explicam conjuntos de escolhas."
        }
      ]
    },
    {
      "id": "pratica",
      "kind": "exercise",
      "eyebrow": "Laboratório · 60 min",
      "title": "Pré-inscrição em oficina",
      "challenge": "Abra o laboratório, implemente as alterações e confira os resultados.",
      "steps": [
        "Crie select com três temas e uma opção inicial.",
        "Acrescente textarea para observações.",
        "Associe cada controle a um label ou legenda.",
        "Teste Tab, Espaço, setas e Enter sem enviar dados reais."
      ],
      "success": [
        "Cada campo possui nome acessível.",
        "Radio buttons compartilham o mesmo name.",
        "A estrutura é utilizável por teclado.",
        "Nenhum dado pessoal real foi solicitado ou transmitido."
      ],
      "timebox": "60 min"
    },
    {
      "id": "editor",
      "kind": "lab",
      "eyebrow": "Experimente o código",
      "title": "Inicie o laboratório: Pré-inscrição em oficina",
      "language": "html",
      "starterCode": "<!doctype html>\n<html lang=\"pt-BR\">\n<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Pré-inscrição</title></head>\n<body>\n<main><h1>Pré-inscrição em oficina</h1>\n<p>Exercício local: não informe dados pessoais reais.</p>\n<form action=\"#\" method=\"get\">\n  <label for=\"apelido\">Nome fictício</label>\n  <input id=\"apelido\" name=\"apelido\" type=\"text\">\n  <fieldset><legend>Turno preferido</legend>\n    <label><input type=\"radio\" name=\"turno\" value=\"manha\"> Manhã</label>\n    <label><input type=\"radio\" name=\"turno\" value=\"noite\"> Noite</label>\n  </fieldset>\n  <!-- Inclua select para o tema e textarea para observações. -->\n  <button type=\"submit\">Simular envio</button>\n</form></main>\n</body></html>",
      "instructions": [
        "Crie select com três temas e uma opção inicial.",
        "Acrescente textarea para observações.",
        "Associe cada controle a um label ou legenda.",
        "Teste Tab, Espaço, setas e Enter sem enviar dados reais."
      ],
      "editorPath": "labs/html/aula-05/index.html"
    },
    {
      "id": "criterios",
      "kind": "checklist",
      "eyebrow": "Autoverificação",
      "title": "Critérios para concluir a aula",
      "items": [
        "Cada campo possui nome acessível.",
        "Radio buttons compartilham o mesmo name.",
        "A estrutura é utilizável por teclado.",
        "Nenhum dado pessoal real foi solicitado ou transmitido."
      ],
      "prompt": "Revise o documento no navegador, com teclado e sem CSS."
    },
    {
      "id": "referencias",
      "kind": "references",
      "eyebrow": "Para aprofundar",
      "title": "Fontes técnicas de referência",
      "items": [
        {
          "label": "HTML Living Standard — WHATWG",
          "url": "https://html.spec.whatwg.org/multipage/"
        },
        {
          "label": "MDN — HTML",
          "url": "https://developer.mozilla.org/pt-BR/docs/Web/HTML"
        },
        {
          "label": "W3C WAI — Tutorials",
          "url": "https://www.w3.org/WAI/tutorials/"
        }
      ]
    }
  ]
};
