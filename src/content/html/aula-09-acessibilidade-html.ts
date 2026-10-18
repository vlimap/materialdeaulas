import { buildHtmlLesson } from './build-html-lesson';

export const aula09Html = buildHtmlLesson({
  "number": 9,
  "slug": "aula-09-acessibilidade-html",
  "title": "HTML acessível: recursos nativos antes de ARIA",
  "shortTitle": "Acessibilidade HTML",
  "purpose": "Construir documentos compreensíveis com teclado, leitor de telas e sem CSS.",
  "context": "Uma página de serviços públicos deve permitir que qualquer pessoa encontre informações, preencha formulários e compreenda imagens sem depender do mouse.",
  "objectives": [
    "Estruturar landmarks, idioma e headings em ordem lógica.",
    "Diferenciar imagens informativas, decorativas e funcionais.",
    "Associar labels e mensagens a controles operáveis por teclado.",
    "Priorizar HTML nativo e avaliar quando ARIA é necessário."
  ],
  "topics": [
    {
      "title": "Estrutura ajuda a navegar",
      "lead": "Cabeçalhos e regiões são pontos de orientação.",
      "detail": "Use lang, um h1 principal, navegação nomeada e main para facilitar compreensão e movimentação pelo conteúdo.",
      "example": "<!doctype html>\n<html lang=\"pt-BR\"><body>\n  <a href=\"#conteudo\">Pular para conteúdo</a>\n  <header><h1>Serviços comunitários</h1></header>\n  <nav aria-label=\"Navegação principal\"><a href=\"#servicos\">Serviços</a></nav>\n  <main id=\"conteudo\"><h2 id=\"servicos\">Serviços disponíveis</h2></main>\n</body></html>",
      "bullets": [
        "lang informa idioma à tecnologia assistiva.",
        "Um link de salto reduz navegação repetitiva.",
        "h1 e h2 representam hierarquia, não tamanho."
      ],
      "question": "Qual região identifica o conteúdo dominante da página?",
      "options": [
        "nav",
        "main",
        "aside"
      ],
      "correct": 1,
      "feedback": "main permite identificar e alcançar o conteúdo principal."
    },
    {
      "title": "Imagens têm função",
      "lead": "Alternativa textual transmite informação equivalente.",
      "detail": "Alt curto descreve imagem informativa; alt vazio é apropriado para imagem puramente decorativa; botão com imagem precisa de nome funcional.",
      "example": "<figure>\n  <img src=\"mapa.svg\" alt=\"Mapa com entrada acessível pela Rua A\" width=\"320\" height=\"180\">\n  <figcaption>Como chegar</figcaption>\n</figure>\n<img src=\"ornamento.svg\" alt=\"\" width=\"40\" height=\"40\">",
      "bullets": [
        "Imagem informativa precisa de equivalente textual.",
        "Decorativa pode ter alt vazio.",
        "Não repita legenda idêntica sem necessidade."
      ],
      "question": "Uma estrela apenas decorativa costuma receber:",
      "options": [
        "alt=\"\"",
        "alt=\"imagem\"",
        "Nenhum atributo alt"
      ],
      "correct": 0,
      "feedback": "alt vazio indica que o conteúdo decorativo pode ser ignorado por tecnologias assistivas."
    },
    {
      "title": "Formulários e mensagens",
      "lead": "Toda pergunta precisa de um rótulo acessível.",
      "detail": "Associe label com id; use aria-describedby para informação complementar. Placeholder não substitui label.",
      "example": "<label for=\"codigo\">Código fictício</label>\n<p id=\"ajuda\">Digite quatro números.</p>\n<input id=\"codigo\" name=\"codigo\" inputmode=\"numeric\"\n  pattern=\"[0-9]{4}\" aria-describedby=\"ajuda\" required>",
      "bullets": [
        "label nomeia o controle.",
        "aria-describedby acrescenta contexto.",
        "Use texto visível para instruções importantes."
      ],
      "question": "O que substitui corretamente um placeholder como rótulo?",
      "options": [
        "title com dica",
        "label associado ao input",
        "Apenas ícone sem texto"
      ],
      "correct": 1,
      "feedback": "label fornece identificação visível e programática ao campo."
    },
    {
      "title": "Teclado e HTML nativo",
      "lead": "Interações funcionam com elementos próprios.",
      "detail": "Links navegam; botões executam ações. div com click exige comportamento adicional; evite recriar mecanismos nativos.",
      "example": "<nav aria-label=\"Páginas\">\n  <a href=\"contato.html\">Contato</a>\n</nav>\n<details>\n  <summary>Quais documentos levar?</summary>\n  <p>Consulte a lista de documentos no atendimento.</p>\n</details>",
      "bullets": [
        "Use Tab para verificar sequência de foco.",
        "Enter ativa links; Espaço ativa botões.",
        "details/summary funciona sem script."
      ],
      "question": "Para mostrar conteúdo expansível sem JavaScript, prefira:",
      "options": [
        "div com onclick",
        "details com summary",
        "span com role"
      ],
      "correct": 1,
      "feedback": "details/summary é nativo e funciona com teclado."
    }
  ],
  "labTitle": "Audite e melhore uma página de atendimento",
  "starterCode": "<!doctype html>\n<html lang=\"pt-BR\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Atendimento comunitário</title></head><body>\n<a href=\"#conteudo\">Pular para o conteúdo</a>\n<header><h1>Central de serviços</h1></header>\n<nav aria-label=\"Menu principal\"><a href=\"#horarios\">Horários</a> <a href=\"#perguntas\">Perguntas</a></nav>\n<main id=\"conteudo\"><section id=\"horarios\"><h2>Horários</h2><p>Segunda a sexta, 8h às 17h.</p></section>\n<section id=\"perguntas\"><h2>Perguntas frequentes</h2>\n<details><summary>É necessário agendar?</summary><p>Confira o serviço desejado.</p></details>\n</section>\n<form action=\"#\" method=\"get\"><label for=\"assunto\">Assunto fictício</label><input id=\"assunto\" name=\"assunto\" required><button type=\"submit\">Conferir</button></form>\n</main><footer><p>Informações demonstrativas.</p></footer>\n</body></html>",
  "labSteps": [
    "Teste a página usando somente Tab, Enter e Espaço.",
    "Adicione uma imagem informativa com alt e dimensões.",
    "Inclua ajuda ao campo do formulário com aria-describedby.",
    "Verifique contraste visual e hierarquia de heading."
  ],
  "guidedSteps": [
    "Percorra o link de salto com teclado.",
    "Verifique os pontos de navegação em landmarks.",
    "Associe uma descrição adicional ao formulário."
  ],
  "individualSteps": [
    "Documente três achados de acessibilidade reais.",
    "Corrija headings ou rótulos que apresentem ambiguidade.",
    "Explique por que ARIA não substitui elementos nativos."
  ],
  "success": [
    "A página tem lang e conteúdo principal identificável.",
    "Links, botões e expansão funcionam com teclado.",
    "Imagens informativas têm texto alternativo adequado.",
    "Campos têm rótulos e instruções compreensíveis."
  ],
  "extraSources": [
    {
      "label": "W3C WAI — Easy Checks",
      "url": "https://www.w3.org/WAI/test-evaluate/preliminary/"
    }
  ]
});
