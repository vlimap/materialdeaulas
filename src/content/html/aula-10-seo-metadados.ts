import { buildHtmlLesson } from './build-html-lesson';

export const aula10Html = buildHtmlLesson({
  "number": 10,
  "slug": "aula-10-seo-metadados",
  "title": "HTML: SEO, metadados e compartilhamento",
  "shortTitle": "SEO e metadados",
  "purpose": "Descrever documentos para buscadores, navegadores e compartilhamento.",
  "context": "Uma organização publicou páginas excelentes, mas os resultados de busca exibem títulos vagos e resumos confusos; a marcação precisa refletir o conteúdo real.",
  "objectives": [
    "Definir title e meta description específicos.",
    "Reconhecer canonical, robots e limites de indexação.",
    "Adicionar Open Graph sem confundir prévia com ranking.",
    "Introduzir dados estruturados JSON-LD corretos e verificáveis."
  ],
  "topics": [
    {
      "title": "Título e descrição",
      "lead": "Metadados resumem o propósito da página.",
      "detail": "title é essencial ao documento; a descrição pode influenciar a prévia, mas buscadores podem gerar snippets próprios.",
      "example": "<head>\n  <meta charset=\"utf-8\">\n  <title>Horários | Biblioteca Comunitária</title>\n  <meta name=\"description\" content=\"Confira dias, horários e atividades gratuitas da biblioteca.\">\n</head>",
      "bullets": [
        "Escreva títulos distintos por página.",
        "Evite empilhar palavras-chave.",
        "Descreva apenas conteúdo realmente disponível."
      ],
      "question": "Qual elemento define o título exibido na aba do navegador?",
      "options": [
        "meta keywords",
        "title",
        "h1"
      ],
      "correct": 1,
      "feedback": "title define o título do documento; h1 nomeia a seção principal de conteúdo."
    },
    {
      "title": "Canonical e robots",
      "lead": "Indique a URL preferida sem prometer indexação.",
      "detail": "canonical sugere versão preferencial de URLs duplicadas; robots controla diretivas de rastreadores compatíveis.",
      "example": "<head>\n  <link rel=\"canonical\" href=\"https://example.org/biblioteca/horarios\">\n  <meta name=\"robots\" content=\"index,follow\">\n</head>",
      "bullets": [
        "Use a URL real de produção em canonical.",
        "Canonical é sinal, não redirecionamento.",
        "Robots e indexação são mecanismos distintos."
      ],
      "question": "Um canonical de uma página deve apontar, em geral, para:",
      "options": [
        "A URL preferida pública correspondente",
        "Qualquer página externa popular",
        "Um arquivo CSS"
      ],
      "correct": 0,
      "feedback": "canonical indica a versão canônica do documento; substitua o domínio de exemplo antes de publicar."
    },
    {
      "title": "Open Graph para compartilhamento",
      "lead": "Prévia social não substitui conteúdo.",
      "detail": "og:title, og:description, og:url e og:image descrevem uma prévia. Imagens devem existir em endereço absoluto público.",
      "example": "<meta property=\"og:type\" content=\"website\">\n<meta property=\"og:title\" content=\"Biblioteca Comunitária\">\n<meta property=\"og:description\" content=\"Horários e atividades gratuitas.\">\n<meta property=\"og:url\" content=\"https://example.org/biblioteca\">\n<meta property=\"og:image\" content=\"https://example.org/imagens/capa.png\">",
      "bullets": [
        "Use endereços reais e acessíveis.",
        "Verifique imagem adequada a compartilhamento.",
        "Prévia pode ser alterada pela plataforma social."
      ],
      "question": "Que metadado aponta para a imagem da prévia social?",
      "options": [
        "og:image",
        "robots",
        "charset"
      ],
      "correct": 0,
      "feedback": "og:image informa o recurso visual a ser usado quando a plataforma suportar a tag."
    },
    {
      "title": "JSON-LD com fatos verificáveis",
      "lead": "Marcação estruturada deve corresponder à página.",
      "detail": "JSON-LD usa application/ld+json e Schema.org para descrever entidades; não invente notas, autores ou eventos.",
      "example": "<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Organization\",\n  \"name\": \"Biblioteca Comunitária Exemplo\",\n  \"url\": \"https://example.org/\"\n}\n</script>",
      "bullets": [
        "O script contém JSON válido.",
        "Dados declarados devem existir no conteúdo.",
        "Rich results não são garantidos."
      ],
      "question": "Qual tipo de script normalmente contém dados JSON-LD?",
      "options": [
        "text/css",
        "application/ld+json",
        "application/octet-stream"
      ],
      "correct": 1,
      "feedback": "application/ld+json identifica dados estruturados expressos em JSON-LD."
    }
  ],
  "labTitle": "Prepare a página pública fictícia de uma biblioteca",
  "starterCode": "<!doctype html>\n<html lang=\"pt-BR\"><head>\n<meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>Biblioteca Exemplo | Atividades gratuitas</title>\n<meta name=\"description\" content=\"Conheça atividades gratuitas, horários e contato de uma biblioteca fictícia.\">\n<!-- Na publicação, substitua example.org pelo domínio real. -->\n<link rel=\"canonical\" href=\"https://example.org/biblioteca\">\n<meta property=\"og:type\" content=\"website\">\n<meta property=\"og:title\" content=\"Biblioteca Exemplo\">\n<meta property=\"og:description\" content=\"Oficinas e horários de atendimento.\">\n<meta property=\"og:url\" content=\"https://example.org/biblioteca\">\n</head><body><main><h1>Biblioteca Exemplo</h1><p>Oficinas gratuitas para a comunidade.</p><section><h2>Horários</h2><p>Segunda a sexta, das 8h às 17h.</p></section></main></body></html>",
  "labSteps": [
    "Personalize o title e description para a página real do exercício.",
    "Inclua og:image apenas se houver um arquivo publicamente acessível.",
    "Escreva JSON-LD Organization com dados fictícios coerentes.",
    "Valide HTML e JSON antes de considerar publicável."
  ],
  "guidedSteps": [
    "Compare o título da aba com o h1 visível.",
    "Confirme description e canonical no código-fonte.",
    "Localize as propriedades OG e explique sua função."
  ],
  "individualSteps": [
    "Acrescente JSON-LD e teste sua sintaxe JSON.",
    "Documente o que deve ser substituído ao publicar.",
    "Diferencie indexação, prévia social e dados estruturados."
  ],
  "success": [
    "title e description têm conteúdo relevante e não duplicado.",
    "canonical de exemplo não é tratado como URL real de produção.",
    "JSON-LD é válido e descreve fatos presentes na página.",
    "Não há promessas de ranking nem dados fictícios apresentados como reais."
  ],
  "extraSources": [
    {
      "label": "Google Search Central — SEO starter guide",
      "url": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
    }
  ]
});
