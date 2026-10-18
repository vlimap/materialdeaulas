import { buildHtmlLesson } from './build-html-lesson';

export const aula06Html = buildHtmlLesson({
  "number": 6,
  "slug": "aula-06-formularios-validacao",
  "title": "HTML: formulários — validação e experiência do usuário",
  "shortTitle": "Formulários II",
  "purpose": "Usar atributos nativos para prevenir erros e orientar o preenchimento.",
  "context": "Em uma inscrição fictícia, o navegador pode indicar campos obrigatórios e formatos esperados antes de qualquer integração com servidor.",
  "objectives": [
    "Aplicar required, minlength, maxlength, min, max e step.",
    "Escolher input type e autocomplete coerentes com o campo.",
    "Agrupar radio/checkbox e explicar mensagens de erro.",
    "Diferenciar validação de usabilidade no navegador e segurança no servidor."
  ],
  "topics": [
    {
      "title": "Restrições nativas",
      "lead": "O navegador ajuda a detectar entradas inválidas.",
      "detail": "required exige preenchimento; minlength/maxlength regulam texto; min/max e step regulam alguns campos numéricos.",
      "example": "<form action=\"#\" method=\"get\">\n  <label for=\"alias\">Apelido fictício</label>\n  <input id=\"alias\" name=\"alias\" required minlength=\"3\" maxlength=\"20\">\n  <label for=\"vagas\">Vagas</label>\n  <input id=\"vagas\" name=\"vagas\" type=\"number\" min=\"1\" max=\"4\" step=\"1\" required>\n  <button type=\"submit\">Verificar</button>\n</form>",
      "bullets": [
        "required impede envio quando vazio.",
        "minlength não substitui validação de servidor.",
        "Teste entradas no limite e fora dele."
      ],
      "question": "Qual atributo exige que o campo seja preenchido?",
      "options": [
        "placeholder",
        "required",
        "autocomplete"
      ],
      "correct": 1,
      "feedback": "required aciona validação nativa antes do envio; o servidor ainda deve validar."
    },
    {
      "title": "Tipo de input importa",
      "lead": "O tipo melhora interação, não garante confiança.",
      "detail": "email verifica formato básico; number trata número; date é data; tel não valida número telefônico automaticamente.",
      "example": "<label for=\"email\">E-mail fictício</label>\n<input id=\"email\" name=\"email\" type=\"email\" autocomplete=\"off\">\n<label for=\"dia\">Data preferida</label>\n<input id=\"dia\" name=\"dia\" type=\"date\">\n<label for=\"codigo\">Código</label>\n<input id=\"codigo\" name=\"codigo\" inputmode=\"numeric\" pattern=\"[0-9]{4}\">",
      "bullets": [
        "type=email não garante endereço real.",
        "inputmode sugere o teclado.",
        "pattern fornece regra adicional para texto."
      ],
      "question": "Qual atributo sugere teclado numérico sem alterar o tipo de dado?",
      "options": [
        "inputmode",
        "aria-label",
        "value"
      ],
      "correct": 0,
      "feedback": "inputmode é uma dica de teclado; a validação depende do tipo e das restrições."
    },
    {
      "title": "Grupos e preferências",
      "lead": "Radio escolhe uma; checkbox permite múltiplas.",
      "detail": "Use name compartilhado nos radio buttons e fieldset/legend para dar contexto ao grupo.",
      "example": "<fieldset>\n  <legend>Turno preferido</legend>\n  <label><input type=\"radio\" name=\"turno\" value=\"manha\" required>Manhã</label>\n  <label><input type=\"radio\" name=\"turno\" value=\"noite\">Noite</label>\n</fieldset>\n<label><input type=\"checkbox\" name=\"novidades\">Quero ver novidades</label>",
      "bullets": [
        "radio de mesmo name forma grupo.",
        "legend fornece nome do grupo.",
        "Checkbox opcional não exige concordância."
      ],
      "question": "Qual estrutura comunica o nome de um grupo de opções?",
      "options": [
        "fieldset com legend",
        "div com span",
        "table com caption"
      ],
      "correct": 0,
      "feedback": "fieldset com legend associa a descrição a todos os controles agrupados."
    },
    {
      "title": "Erros e segurança",
      "lead": "A validação do cliente pode ser contornada.",
      "detail": "No servidor, verifique novamente valores, permissões, formatos e limites. Nunca confie no HTML como proteção.",
      "example": "<form action=\"#\" method=\"get\">\n  <p id=\"dica\">Use somente dados inventados.</p>\n  <label for=\"idade\">Idade simulada (18 a 80)</label>\n  <input id=\"idade\" name=\"idade\" type=\"number\" min=\"18\" max=\"80\" aria-describedby=\"dica\" required>\n  <button type=\"submit\">Conferir</button>\n</form>",
      "bullets": [
        "Mantenha instruções visíveis antes do erro.",
        "Explique a restrição em texto.",
        "A validação do servidor é obrigatória."
      ],
      "question": "O que impede dados maliciosos de burlarem a validação nativa?",
      "options": [
        "required no navegador",
        "placeholder explicativo",
        "Validação no servidor"
      ],
      "correct": 2,
      "feedback": "Qualquer cliente pode enviar requisições modificadas. O backend deve validar entradas."
    }
  ],
  "labTitle": "Revisar pré-inscrição fictícia com validação nativa",
  "starterCode": "<!doctype html>\n<html lang=\"pt-BR\">\n<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Inscrição simulada</title></head>\n<body><main><h1>Oficina comunitária</h1><p>Exercício local: utilize somente dados fictícios.</p>\n<form action=\"#\" method=\"get\">\n  <label for=\"apelido\">Nome fictício (3 a 20 letras)</label>\n  <input id=\"apelido\" name=\"apelido\" minlength=\"3\" maxlength=\"20\" required>\n  <fieldset><legend>Turno</legend>\n    <label><input type=\"radio\" name=\"turno\" value=\"manha\" required>Manhã</label>\n    <label><input type=\"radio\" name=\"turno\" value=\"tarde\">Tarde</label>\n  </fieldset>\n  <!-- Acrescente um campo numérico, de data e uma dica de formato -->\n  <button type=\"submit\">Validar preenchimento</button>\n</form>\n</main></body></html>",
  "labSteps": [
    "Crie um campo number com min e max.",
    "Acrescente date para o dia de interesse.",
    "Teste formulário vazio, entrada inválida e válida.",
    "Observe as mensagens nativas, sem usar dados reais."
  ],
  "guidedSteps": [
    "Teste o required removendo o nome fictício.",
    "Inclua min e max no campo de vagas.",
    "Associe legend aos radio buttons."
  ],
  "individualSteps": [
    "Documente um caso inválido e a mensagem apresentada.",
    "Adicione orientação de formato antes da entrada.",
    "Explique por que nenhuma checagem nativa substitui o backend."
  ],
  "success": [
    "Todos os controles têm label ou legend.",
    "Entradas fora dos limites acionam validação nativa.",
    "O formulário pode ser usado apenas com teclado.",
    "Nenhum dado real é armazenado ou enviado a terceiros."
  ],
  "extraSources": [
    {
      "label": "MDN — Constraint validation",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation"
    }
  ]
});
