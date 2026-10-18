import { buildHtmlLesson } from './build-html-lesson';

export const aula04Html = buildHtmlLesson({
  "number": 4,
  "slug": "aula-04-tabelas",
  "title": "HTML: tabelas e representação de dados",
  "shortTitle": "Tabelas acessíveis",
  "purpose": "Apresentar dados em linhas e colunas sem perder o significado.",
  "context": "Horários de uma biblioteca exigem cabeçalhos claros; tabelas não servem para estruturar o layout do site.",
  "objectives": [
    "Reconhecer quando uma informação é verdadeiramente tabular.",
    "Criar table, caption, thead, tbody e tfoot com função clara.",
    "Vincular th e td com scope nas tabelas simples.",
    "Validar leitura linear e evitar tabelas usadas como layout."
  ],
  "topics": [
    {
      "title": "Quando utilizar table?",
      "lead": "Tabelas mostram relações entre dados.",
      "detail": "Use table para comparar registros por linhas e colunas; para um menu ou layout, escolha outra estrutura.",
      "example": "<table>\n  <caption>Horários da biblioteca</caption>\n  <tr><th>Dia</th><th>Horário</th></tr>\n  <tr><td>Segunda</td><td>8h às 17h</td></tr>\n</table>",
      "bullets": [
        "A legenda explica o assunto da tabela.",
        "Cada linha representa um registro.",
        "Não use table para organizar a página visualmente."
      ],
      "question": "Qual conteúdo pede uma tabela HTML?",
      "options": [
        "Lista de links do menu",
        "Horários por dia e turno",
        "Estrutura em duas colunas do site"
      ],
      "correct": 1,
      "feedback": "Horários possuem relação de linhas e colunas. Menu e layout não representam dados tabulares."
    },
    {
      "title": "Cabeçalho, corpo e rodapé",
      "lead": "Separe grupos de linhas pelo papel.",
      "detail": "thead contém cabeçalhos; tbody agrupa dados; tfoot pode mostrar totais ou sínteses.",
      "example": "<table>\n  <caption>Empréstimos por turma</caption>\n  <thead><tr><th>Turma</th><th>Livros</th></tr></thead>\n  <tbody><tr><td>A</td><td>8</td></tr></tbody>\n  <tfoot><tr><th>Total</th><td>8</td></tr></tfoot>\n</table>",
      "bullets": [
        "caption é o título acessível da tabela.",
        "thead/tbody/tfoot indicam grupos de linhas.",
        "tfoot representa resumo quando necessário."
      ],
      "question": "Qual elemento dá um título diretamente associado à tabela?",
      "options": [
        "caption",
        "legend",
        "figcaption"
      ],
      "correct": 0,
      "feedback": "caption nomeia a tabela; legend nomeia um fieldset, e figcaption descreve uma figure."
    },
    {
      "title": "Cabeçalhos com scope",
      "lead": "Quem lê precisa entender o eixo.",
      "detail": "Em tabelas simples, scope=col e scope=row relacionam cada célula ao seu cabeçalho.",
      "example": "<table>\n  <caption>Inscrições</caption>\n  <tr><th scope=\"col\">Oficina</th><th scope=\"col\">Vagas</th></tr>\n  <tr><th scope=\"row\">HTML</th><td>16</td></tr>\n  <tr><th scope=\"row\">CSS</th><td>12</td></tr>\n</table>",
      "bullets": [
        "th representa uma célula de cabeçalho.",
        "scope=col identifica a coluna.",
        "scope=row identifica a linha."
      ],
      "question": "Em uma linha com o nome 'HTML' e a quantidade '16', o nome da linha usa:",
      "options": [
        "<td scope=\"col\">",
        "<th scope=\"row\">",
        "<caption>"
      ],
      "correct": 1,
      "feedback": "O nome HTML é um cabeçalho de linha, representado por th scope=row."
    },
    {
      "title": "Células mescladas e complexidade",
      "lead": "Menos mesclagem facilita a leitura.",
      "detail": "colspan amplia colunas; rowspan amplia linhas. Só os use se a relação de dados realmente exigir.",
      "example": "<table>\n  <caption>Atividades</caption>\n  <tr><th scope=\"col\">Dia</th><th scope=\"col\">Atividade</th></tr>\n  <tr><td>Segunda</td><td>Oficina HTML</td></tr>\n  <tr><td colspan=\"2\">Biblioteca fechada no feriado</td></tr>\n</table>",
      "bullets": [
        "colspan=2 ocupa duas colunas.",
        "Evite tabelas aninhadas.",
        "Prefira uma estrutura simples quando possível."
      ],
      "question": "Qual atributo ocupa duas colunas de uma mesma linha?",
      "options": [
        "rowspan=2",
        "scope=2",
        "colspan=2"
      ],
      "correct": 2,
      "feedback": "colspan amplia horizontalmente; rowspan amplia verticalmente."
    }
  ],
  "labTitle": "Monte a tabela de horários de uma biblioteca",
  "starterCode": "<!doctype html>\n<html lang=\"pt-BR\">\n<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Horários da biblioteca</title></head>\n<body><main><h1>Biblioteca Comunitária</h1>\n<p>Consulte os turnos de atendimento antes da visita.</p>\n<table>\n  <caption>Horários por dia</caption>\n  <thead><tr><th scope=\"col\">Dia</th><th scope=\"col\">Manhã</th><th scope=\"col\">Tarde</th></tr></thead>\n  <tbody>\n    <tr><th scope=\"row\">Segunda</th><td>08h–12h</td><td>13h–17h</td></tr>\n    <!-- Acrescente terça e quarta -->\n  </tbody>\n</table>\n</main></body></html>",
  "labSteps": [
    "Preencha pelo menos mais duas linhas em tbody.",
    "Insira um tfoot quando houver informação de síntese.",
    "Leia os cabeçalhos em voz alta na ordem de navegação.",
    "Valide a marcação com o validador HTML do W3C."
  ],
  "guidedSteps": [
    "Abra o laboratório e identifique caption, thead e tbody.",
    "Acrescente terça e quarta com horários fictícios.",
    "Associe cabeçalhos de coluna e linha por scope."
  ],
  "individualSteps": [
    "Registre uma situação de horário especial sem criar layout com table.",
    "Revise a tabela no modo de leitura sem CSS.",
    "Explique quando colspan dificulta a interpretação."
  ],
  "success": [
    "A tabela possui caption descritivo.",
    "th indica cabeçalhos de linha ou coluna com scope.",
    "Dados são coerentes e não representam layout.",
    "Navegação e leitura fazem sentido sem CSS."
  ],
  "extraSources": [
    {
      "label": "W3C WAI — Tables",
      "url": "https://www.w3.org/WAI/tutorials/tables/"
    }
  ]
});
