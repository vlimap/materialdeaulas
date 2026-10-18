import { buildHtmlLesson } from './build-html-lesson';

export const aula08Html = buildHtmlLesson({
  "number": 8,
  "slug": "aula-08-imagens-responsivas",
  "title": "HTML: imagens responsivas e carregamento eficiente",
  "shortTitle": "Imagens responsivas",
  "purpose": "Carregar a imagem adequada ao tamanho e às necessidades do dispositivo.",
  "context": "Em um catálogo de projetos, enviar imagens enormes para um celular aumenta consumo de dados e pode deslocar textos durante o carregamento.",
  "objectives": [
    "Configurar meta viewport e dimensões da imagem.",
    "Usar srcset com descritores w e sizes com unidades adequadas.",
    "Escolher picture para formatos alternativos e direção de arte.",
    "Aplicar loading e alt com atenção à estabilidade visual."
  ],
  "topics": [
    {
      "title": "Viewport e dimensões",
      "lead": "O navegador precisa de instruções claras.",
      "detail": "meta viewport acompanha a largura do dispositivo; width e height reservam proporção para reduzir mudanças inesperadas de layout.",
      "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<img src=\"imagens/capa-320.svg\" alt=\"Capa azul com uma biblioteca\" width=\"320\" height=\"180\">",
      "bullets": [
        "width e height expressam dimensões intrínsecas.",
        "CSS pode dimensionar sem alterar proporção.",
        "alt descreve a informação, não o nome do arquivo."
      ],
      "question": "Por que definir width e height na imagem?",
      "options": [
        "Reduzir mudanças de layout",
        "Impedir download da imagem",
        "Tornar alt desnecessário"
      ],
      "correct": 0,
      "feedback": "Dimensões ajudam a reservar espaço antes de o recurso carregar."
    },
    {
      "title": "srcset e sizes",
      "lead": "Várias resoluções para o mesmo conteúdo.",
      "detail": "srcset com descritor w informa larguras intrínsecas; sizes descreve aproximadamente o espaço ocupado na página.",
      "example": "<img src=\"imagens/capa-320.svg\"\n  srcset=\"imagens/capa-320.svg 320w, imagens/capa-960.svg 960w\"\n  sizes=\"(max-width: 600px) 100vw, 600px\"\n  alt=\"Biblioteca comunitária\" width=\"960\" height=\"540\">",
      "bullets": [
        "320w e 960w são larguras dos recursos.",
        "sizes guia a escolha do navegador.",
        "O navegador pode escolher a variante mais adequada."
      ],
      "question": "O que significa 960w em srcset?",
      "options": [
        "Arquivo com 960 caracteres",
        "Imagem com largura intrínseca de 960 pixels",
        "Viewport obrigatória de 960 pixels"
      ],
      "correct": 1,
      "feedback": "Descritores w representam a largura intrínseca em pixels de cada recurso."
    },
    {
      "title": "picture e direção de arte",
      "lead": "Às vezes a composição deve mudar.",
      "detail": "picture permite escolher fontes por media ou formatos; img continua obrigatório como fallback e acessibilidade.",
      "example": "<picture>\n  <source media=\"(max-width: 600px)\" srcset=\"imagens/capa-320.svg\">\n  <source media=\"(min-width: 601px)\" srcset=\"imagens/capa-960.svg\">\n  <img src=\"imagens/capa-960.svg\" alt=\"Biblioteca com livros e mesas\" width=\"960\" height=\"540\">\n</picture>",
      "bullets": [
        "source pode usar media ou type.",
        "img fornece fallback e alt.",
        "Direção de arte não é simples escalonamento."
      ],
      "question": "Dentro de picture, qual elemento é obrigatório como fallback?",
      "options": [
        "canvas",
        "img",
        "figure"
      ],
      "correct": 1,
      "feedback": "img permanece necessário; o navegador escolhe source quando aplicável."
    },
    {
      "title": "Performance e acessibilidade",
      "lead": "Carregamento eficiente não perde informação.",
      "detail": "loading=lazy pode adiar imagens fora da primeira tela. Evite lazy em imagem principal visível de imediato.",
      "example": "<figure>\n  <img src=\"imagens/capa-960.svg\" loading=\"lazy\"\n    alt=\"Ilustração de biblioteca\" width=\"960\" height=\"540\">\n  <figcaption>Projeto de biblioteca comunitária.</figcaption>\n</figure>",
      "bullets": [
        "Use lazy para conteúdo fora da tela inicial.",
        "Mantenha alt conforme finalidade da imagem.",
        "Figura e legenda oferecem contexto, se necessário."
      ],
      "question": "Qual prática é preferível para a imagem principal visível ao abrir a página?",
      "options": [
        "Sempre loading=lazy",
        "Evitar lazy sem justificativa",
        "Remover width e height"
      ],
      "correct": 1,
      "feedback": "Imagens essenciais para a primeira tela normalmente não devem ser adiadas por lazy."
    }
  ],
  "labTitle": "Monte a galeria responsiva de projetos da comunidade",
  "starterCode": "<!doctype html>\n<html lang=\"pt-BR\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Galeria responsiva</title></head><body>\n<main><h1>Projetos da comunidade</h1>\n<figure><picture>\n  <source media=\"(max-width: 600px)\" srcset=\"imagens/capa-320.svg\">\n  <img src=\"imagens/capa-960.svg\" alt=\"Biblioteca comunitária com estantes de livros\" width=\"960\" height=\"540\">\n</picture><figcaption>Biblioteca: aprendizagem compartilhada.</figcaption></figure>\n<!-- Experimente srcset e sizes no segundo projeto. -->\n</main></body></html>",
  "labSteps": [
    "Abra o exemplo no navegador em larguras de 375 e 1024 pixels.",
    "Inclua uma segunda imagem com srcset e sizes.",
    "Use alt descritivo, width e height em ambas.",
    "Observe a escolha da fonte nas ferramentas de rede do navegador."
  ],
  "guidedSteps": [
    "Experimente o picture existente com tela estreita e larga.",
    "Compare as imagens SVG disponíveis com dimensões diferentes.",
    "Crie um segundo figure e figcaption coerentes."
  ],
  "individualSteps": [
    "Adicione srcset com descritores de largura e sizes no segundo recurso.",
    "Defina loading=lazy apenas no recurso fora da primeira tela.",
    "Explique o resultado ao simular rede lenta nas DevTools."
  ],
  "success": [
    "Toda imagem informativa tem alt apropriado.",
    "O navegador encontra recursos existentes em srcset.",
    "A página reserva proporções com width e height.",
    "A visualização permanece legível em telas pequenas."
  ],
  "extraSources": [
    {
      "label": "MDN — Responsive images",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images"
    }
  ]
});
