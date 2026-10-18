import { buildHtmlLesson } from './build-html-lesson';

export const aula07Html = buildHtmlLesson({
  "number": 7,
  "slug": "aula-07-audio-video-embeds",
  "title": "HTML: áudio, vídeo e conteúdo incorporado",
  "shortTitle": "Mídia e incorporações",
  "purpose": "Publicar mídia acessível sem depender de reprodução automática.",
  "context": "Um portal de educação combina vídeos demonstrativos, transcrições e conteúdos incorporados, mas precisa funcionar quando um recurso externo falha.",
  "objectives": [
    "Usar audio e video com controls e fontes alternativas.",
    "Compreender source, type, poster e reprodução responsiva.",
    "Vincular legendas textuais com track e arquivos WebVTT.",
    "Adicionar iframe com title e medidas de privacidade."
  ],
  "topics": [
    {
      "title": "Mídia com controles nativos",
      "lead": "A pessoa controla quando reproduzir.",
      "detail": "audio e video oferecem controles operáveis por teclado; autoplay não deve ser pré-requisito para estudar.",
      "example": "<audio controls preload=\"metadata\">\n  <source src=\"midia/entrevista.ogg\" type=\"audio/ogg\">\n  O áudio não é suportado neste navegador.\n</audio>\n<p><a href=\"transcricao.html\">Ler transcrição</a></p>",
      "bullets": [
        "controls exibe comandos de reprodução.",
        "preload=metadata reduz carregamento inicial.",
        "Inclua transcrição para conteúdo falado."
      ],
      "question": "Qual atributo oferece controles nativos de reprodução?",
      "options": [
        "muted",
        "controls",
        "autoplay"
      ],
      "correct": 1,
      "feedback": "controls permite que o usuário inicie, pause e controle a mídia."
    },
    {
      "title": "Fontes e formatos",
      "lead": "source permite oferecer alternativas.",
      "detail": "O navegador escolhe um formato compatível; video pode reservar espaço com width e height e exibir um poster.",
      "example": "<video controls width=\"640\" height=\"360\" poster=\"poster.svg\">\n  <source src=\"midia/aula.webm\" type=\"video/webm\">\n  <source src=\"midia/aula.mp4\" type=\"video/mp4\">\n  Seu navegador não reproduz o vídeo.\n</video>",
      "bullets": [
        "type informa o formato de cada fonte.",
        "width e height reservam proporção.",
        "O arquivo de mídia deve existir localmente."
      ],
      "question": "Para oferecer WebM e MP4 ao mesmo vídeo, use:",
      "options": [
        "Duas tags source dentro de video",
        "Dois atributos href em video",
        "Um atributo alt em video"
      ],
      "correct": 0,
      "feedback": "source oferece fontes alternativas; o navegador escolhe uma compatível."
    },
    {
      "title": "Legendas e transcrição",
      "lead": "Texto oferece acesso além do áudio.",
      "detail": "track aponta para WebVTT; kind=captions inclui diálogos e sons relevantes. Uma transcrição separada amplia o acesso.",
      "example": "<video controls width=\"640\">\n  <source src=\"midia/aula.mp4\" type=\"video/mp4\">\n  <track kind=\"captions\" src=\"legendas-pt.vtt\" srclang=\"pt-BR\" label=\"Português\" default>\n</video>\n<p>Disponibilize também a transcrição.</p>",
      "bullets": [
        "WebVTT começa com WEBVTT.",
        "Cues usam intervalo de tempo e texto.",
        "Legendas e transcrição têm finalidades complementares."
      ],
      "question": "Qual elemento HTML referencia um arquivo de legendas?",
      "options": [
        "caption",
        "track",
        "figcaption"
      ],
      "correct": 1,
      "feedback": "track vincula um arquivo WebVTT a um elemento de mídia."
    },
    {
      "title": "Incorporação responsável",
      "lead": "iframe precisa de título e contexto.",
      "detail": "Use iframe quando necessário; sandbox limita capacidades e loading=lazy pode adiar carregamento de conteúdo fora da área visível.",
      "example": "<iframe title=\"Resumo do curso\"\n  srcdoc=\"<h2>Resumo</h2><p>Conteúdo incorporado de teste.</p>\"\n  sandbox=\"\" loading=\"lazy\" width=\"360\" height=\"180\">\n</iframe>",
      "bullets": [
        "title identifica o conteúdo incorporado.",
        "sandbox restringe permissões; ajuste conscientemente.",
        "Verifique privacidade e alternativa quando a fonte falhar."
      ],
      "question": "Qual atributo descreve o conteúdo de um iframe para tecnologias assistivas?",
      "options": [
        "title",
        "srcset",
        "scope"
      ],
      "correct": 0,
      "feedback": "title fornece o nome acessível do quadro incorporado."
    }
  ],
  "labTitle": "Crie uma página de aula com mídia e transcrição",
  "starterCode": "<!doctype html>\n<html lang=\"pt-BR\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Portal de mídia</title></head><body>\n<header><h1>Vídeos e entrevistas</h1></header>\n<main><article><h2>Aula demonstrativa</h2>\n<p>Para reproduzir, adicione seus próprios arquivos de teste na pasta midia.</p>\n<video controls width=\"640\" height=\"360\" poster=\"poster.svg\" preload=\"metadata\">\n  <source src=\"midia/aula.mp4\" type=\"video/mp4\">\n  <track kind=\"captions\" src=\"legendas-pt.vtt\" srclang=\"pt-BR\" label=\"Português\" default>\n  Seu navegador não reproduz este vídeo.\n</video>\n<h3>Transcrição textual</h3><p>[Descreva aqui o conteúdo do vídeo, incluindo informação visual relevante.]</p>\n</article>\n<aside><h2>Resumo interativo incorporado</h2>\n<iframe title=\"Resumo textual\" srcdoc=\"<h2>Resumo</h2><p>Mídia acessível exige alternativas.</p>\" sandbox=\"\" loading=\"lazy\" width=\"320\" height=\"160\"></iframe>\n</aside></main></body></html>",
  "labSteps": [
    "Insira um vídeo próprio de teste como midia/aula.mp4 ou mantenha a mensagem explicativa.",
    "Edite legendas-pt.vtt de acordo com a duração do vídeo.",
    "Escreva uma transcrição que faça sentido sem reproduzir a mídia.",
    "Teste a navegação com Tab e sem acesso à Internet."
  ],
  "guidedSteps": [
    "Abra a página e reconheça os controles nativos.",
    "Verifique poster.svg e iframe com srcdoc, que não exige Internet.",
    "Compare a função de legenda e transcrição."
  ],
  "individualSteps": [
    "Atualize o WebVTT com pelo menos duas falas fictícias.",
    "Troque o title do iframe por descrição precisa.",
    "Confirme que a página continua útil sem os arquivos de mídia."
  ],
  "success": [
    "A pessoa escolhe quando reproduzir áudio e vídeo.",
    "iframe tem title e restrições adequadas.",
    "Legendas e transcrição estão previstas e legíveis.",
    "Ausência de mídia local é explicada sem impedir a leitura."
  ],
  "extraSources": [
    {
      "label": "W3C WAI — Audio and Video",
      "url": "https://www.w3.org/WAI/media/av/"
    }
  ]
});
