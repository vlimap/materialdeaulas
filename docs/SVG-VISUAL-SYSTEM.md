# Sistema visual SVG para as aulas

Este projeto usa **SVG autoral como padrão preferencial para ilustrações e animações didáticas**.

A decisão prioriza:

- custo zero por geração;
- controle total do código-fonte;
- boa performance no navegador;
- responsividade;
- acessibilidade;
- consistência visual;
- reutilização entre aulas;
- compatibilidade com exportação de slides;
- possibilidade de animação sem vídeo.

## Identidade visual

A fonte de verdade é `src/styles/tokens.css`.

Paleta principal:

```text
project-blue-100  #0D47A1
project-blue-80   #1565C0
project-blue-60   #6693BB
project-blue-10   #E6EDF4

innovation-900    #061B3A
innovation-300    #7296FC
innovation-100    #D0DEFE

orange-500        #F7DF1E

black             #292929
gray-900          #545454
gray-700          #7E7E7E
gray-300          #D4D4D4
gray-100          #F3F4F6
white             #FFFFFF
```

## Formato recomendado

Para visuais de aula:

```text
viewBox="0 0 1200 675"
aspect-ratio: 16 / 9
```

O SVG deve funcionar bem em:

- projeção em sala;
- desktop;
- tela reduzida;
- captura para PDF/PPTX.

## Estrutura de arquivos

```text
src/assets/lessons/<tecnologia>/<aula>/
├── conceito-01.svg
├── conceito-02.svg
└── conceito-03.svg
```

Exemplo:

```text
src/assets/lessons/html/aula-02/
├── content-hierarchy.svg
├── links-network.svg
└── alt-fallback.svg
```

## Direção visual

Os SVGs devem preferir:

- cartões arredondados;
- linhas e conexões claras;
- azul profundo para estrutura;
- amarelo apenas como ponto de atenção;
- fundo branco ou cinza muito claro;
- sombras discretas;
- poucos elementos por cena;
- hierarquia visual evidente;
- diagramas que façam sentido mesmo sem animação.

Evitar:

- excesso de gradientes;
- efeitos 3D sem função pedagógica;
- neon;
- partículas decorativas em excesso;
- animações cinematográficas;
- texto muito pequeno;
- dependência de fontes externas;
- imagens raster embutidas em base64.

## Animação

A animação deve ensinar alguma relação ou transformação.

São adequados:

- fluxo;
- hierarquia;
- deslocamento;
- conexão;
- destaque progressivo;
- entrada por etapas;
- comparação de estados.

Exemplo:

```css
.path {
  stroke-dasharray: 12 16;
  animation: dash 8s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .path {
    animation: none;
  }
}
```

## Acessibilidade

Todo SVG deve conter:

```xml
<svg role="img" aria-labelledby="title desc">
  <title id="title">...</title>
  <desc id="desc">...</desc>
</svg>
```

Quando o SVG for carregado por `<img>`, o componente React também deve fornecer um `alt` equivalente.

O conteúdo essencial da aula não pode existir apenas dentro do SVG. Título, explicação e legenda pedagógica permanecem em HTML.

## Movimento reduzido

Todo SVG animado deve respeitar:

```css
@media (prefers-reduced-motion: reduce) {
  .animated {
    animation: none;
  }
}
```

O estado estático precisa continuar explicando o conceito.

## Critério para criar um SVG

Crie um visual quando pelo menos uma destas condições for verdadeira:

1. existe uma relação espacial difícil de explicar apenas com texto;
2. existe um fluxo ou transformação;
3. comparar estados facilita a compreensão;
4. a animação reduz carga cognitiva;
5. o conceito será reutilizado em outras aulas.

Não criar SVG para:

- blocos de código;
- tabelas simples;
- listas;
- checklists;
- referências;
- explicações que HTML/CSS já representam melhor.

## Padrão da Aula 02 de HTML

A Aula 02 usa três visuais:

### `content-hierarchy.svg`

Mostra a organização:

```text
h1
├── h2
├── h2
│   ├── h3
│   └── h3
└── h2
```

Objetivo: mostrar que headings representam estrutura, não tamanho visual.

### `links-network.svg`

Mostra documentos conectados por diferentes caminhos.

Objetivo: representar `href` como relação entre recursos.

### `alt-fallback.svg`

Compara:

```text
imagem informativa
imagem indisponível + alternativa textual
imagem decorativa + alt=""
```

Objetivo: explicar o propósito de `alt`, e não apenas sua sintaxe.
