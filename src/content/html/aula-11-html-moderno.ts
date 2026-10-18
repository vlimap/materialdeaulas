import { buildHtmlLesson } from './build-html-lesson';

export const aula11Html = buildHtmlLesson({
  "number": 11,
  "slug": "aula-11-html-moderno",
  "title": "HTML moderno: recursos nativos para aplicações",
  "shortTitle": "HTML moderno",
  "purpose": "Usar componentes nativos antes de adicionar comportamento com JavaScript.",
  "context": "Uma central de aprendizagem precisa revelar informações, informar progresso e exibir conteúdo auxiliar sem depender de bibliotecas completas.",
  "objectives": [
    "Aplicar details/summary para conteúdo expansível.",
    "Distinguir dialog, popover e conteúdo comum.",
    "Usar progress e meter com significado adequado.",
    "Compreender template, data-* e hidden para conteúdo futuro."
  ],
  "topics": [
    {
      "title": "details e summary",
      "lead": "Informação expansível com comportamento nativo.",
      "detail": "details controla a expansão; summary é o rótulo clicável. O conteúdo continua no documento.",
      "example": "<details>\n  <summary>Como emitir meu comprovante?</summary>\n  <p>Abra sua conta e escolha o curso.</p>\n</details>\n<details open>\n  <summary>Documentos necessários</summary>\n  <ul><li>Identificação fictícia</li></ul>\n</details>",
      "bullets": [
        "summary identifica o conteúdo ocultável.",
        "open controla estado inicial.",
        "O controle funciona com teclado."
      ],
      "question": "Qual dupla constrói uma seção expansível nativa?",
      "options": [
        "div e span",
        "details e summary",
        "aside e legend"
      ],
      "correct": 1,
      "feedback": "details e summary implementam expansão básica sem JavaScript."
    },
    {
      "title": "popover e dialog",
      "lead": "A escolha depende do tipo de interação.",
      "detail": "popover abre conteúdo auxiliar sem modal por padrão; dialog representa uma caixa de diálogo que pode ser exibida de forma modal via API JS.",
      "example": "<button type=\"button\" popovertarget=\"ajuda\">Ver ajuda</button>\n<div id=\"ajuda\" popover>\n  <p>Use títulos claros e links descritivos.</p>\n</div>\n<dialog open aria-label=\"Aviso de exemplo\"><p>Aviso não modal de demonstração.</p></dialog>",
      "bullets": [
        "popovertarget permite abrir conteúdo auxiliar.",
        "dialog open isolado não cria modalidade.",
        "Modalidade exige APIs e foco apropriado."
      ],
      "question": "Qual elemento representa uma caixa de diálogo HTML?",
      "options": [
        "dialog",
        "article",
        "meter"
      ],
      "correct": 0,
      "feedback": "dialog é o elemento semântico; para diálogo modal use showModal() via JavaScript."
    },
    {
      "title": "progress não é meter",
      "lead": "Progresso e medição têm significados diferentes.",
      "detail": "progress mostra conclusão de uma tarefa; meter indica um valor dentro de um intervalo conhecido, como ocupação.",
      "example": "<label for=\"progresso\">Aulas concluídas</label>\n<progress id=\"progresso\" max=\"12\" value=\"7\">7 de 12</progress>\n<label for=\"ocupacao\">Ocupação da sala</label>\n<meter id=\"ocupacao\" min=\"0\" max=\"30\" value=\"18\">18 de 30</meter>",
      "bullets": [
        "progress representa evolução de uma tarefa.",
        "meter é medição de faixa conhecida.",
        "Exiba o valor também em texto quando relevante."
      ],
      "question": "Para indicar que 7 de 12 aulas foram concluídas, prefira:",
      "options": [
        "meter",
        "progress",
        "video"
      ],
      "correct": 1,
      "feedback": "progress corresponde à conclusão de uma operação ou tarefa."
    },
    {
      "title": "template, data-* e hidden",
      "lead": "Dados estruturais aguardam comportamento futuro.",
      "detail": "template armazena fragmento inerte; data-* fornece metadados próprios; hidden evita exibição imediata sem excluir necessariamente conteúdo semântico.",
      "example": "<article data-category=\"html\">\n  <h2>Curso HTML</h2>\n  <p>Introdução à Web.</p>\n</article>\n<template id=\"modelo-card\">\n  <article><h2>Nova aula</h2></article>\n</template>\n<p hidden>Mensagem de etapa posterior.</p>",
      "bullets": [
        "template não aparece por padrão.",
        "data-* guarda dados personalizados.",
        "Não use hidden em conteúdo indispensável."
      ],
      "question": "Qual elemento guarda um fragmento de HTML inerte para uso posterior?",
      "options": [
        "template",
        "progress",
        "address"
      ],
      "correct": 0,
      "feedback": "template conserva um fragmento que pode ser clonado por JavaScript posteriormente."
    }
  ],
  "labTitle": "Monte uma central interativa com HTML nativo",
  "starterCode": "<!doctype html>\n<html lang=\"pt-BR\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Central de estudos</title></head><body>\n<main><h1>Central de estudos HTML</h1>\n<label for=\"conclusao\">Progresso do curso</label>\n<progress id=\"conclusao\" max=\"12\" value=\"7\">7 de 12</progress>\n<section><h2>Perguntas frequentes</h2>\n<details><summary>Onde encontro laboratórios?</summary><p>Na pasta labs/html de cada aula.</p></details>\n</section>\n<button type=\"button\" popovertarget=\"ajuda\">Ver dicas</button>\n<div popover id=\"ajuda\"><h2>Dicas</h2><p>Revise uma aula de cada vez.</p></div>\n<template id=\"modelo\"><article><h2>Nova aula</h2></article></template>\n</main></body></html>",
  "labSteps": [
    "Teste details e popover somente com teclado.",
    "Inclua meter para ocupação fictícia de 20 de 30 vagas.",
    "Adicione um bloco data-category apropriado.",
    "Explique o que template faz sem JavaScript."
  ],
  "guidedSteps": [
    "Abra e feche a seção de perguntas frequentes.",
    "Ative o popover por botão real.",
    "Compare progress e meter com seus próprios valores."
  ],
  "individualSteps": [
    "Crie duas perguntas frequentes adicionais.",
    "Inclua uma mensagem oculta de exemplo sem esconder informação essencial.",
    "Descreva quando um dialog modal seria mais adequado."
  ],
  "success": [
    "O conteúdo expansível funciona sem script.",
    "O popover tem rótulo claro no botão.",
    "progress e meter correspondem ao significado dos dados.",
    "Nenhum conteúdo essencial depende de hidden ou template."
  ],
  "extraSources": [
    {
      "label": "MDN — Popover API",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"
    }
  ]
});
