# Runway — Assets animados da Aula 02 de HTML

A Aula 02 deve continuar funcional sem vídeo. Os clipes do Runway entram apenas como reforço visual e nunca carregam texto essencial.

## Contrato técnico

Destino recomendado quando os clipes forem gerados:

```text
src/assets/lessons/html/aula-02/
├── 01-links-network.mp4
└── 02-alt-fallback.mp4
```

Requisitos:

- proporção 16:9;
- duração entre 5 e 8 segundos;
- movimento legível em projeção;
- sem narração;
- sem texto embutido;
- sem logotipos;
- estética vetorial/minimalista;
- azul principal `#0D47A1`;
- azul secundário `#1565C0`;
- amarelo `#F2C53D`;
- branco `#F7F7F7`;
- composição que continue compreensível sem áudio;
- o slide deve possuir fallback HTML/SVG;
- respeitar `prefers-reduced-motion`.

---

## Asset 01 — Links conectam recursos

**Arquivo:** `01-links-network.mp4`

**Uso:** bloco de hipertexto e tipos de link.

### Prompt Runway

> Minimalist educational motion graphic, 16:9. Start with three isolated document cards on a clean light background. A blue connection line grows from the first document to the second, then to the third. Small yellow pulses travel along the connections to represent navigation. A simple cursor icon selects the first card and visually follows the path to the next card. No text, no letters, no logos, no people. Flat vector-like shapes, high contrast, classroom projection friendly. Color palette: deep blue #0D47A1, secondary blue #1565C0, yellow #F2C53D, off-white #F7F7F7. Smooth motion, no camera shake, no cinematic depth of field. The concept must clearly communicate “documents connected by hyperlinks”. End in a composition close to the opening frame so it can loop cleanly.

### Objetivo pedagógico

Mostrar que um link não é apenas “texto azul”: ele representa uma relação entre o documento atual e outro recurso.

---

## Asset 02 — Imagem indisponível e alternativa textual

**Arquivo:** `02-alt-fallback.mp4`

**Uso:** bloco de `img`, `alt` e acessibilidade.

### Prompt Runway

> Minimalist educational motion graphic, 16:9. Show a simple browser-like content card containing an image area and surrounding paragraph blocks. First, the image is visible as a clear illustration. Then the image area briefly fails and becomes an empty placeholder while the surrounding content remains organized and understandable. A small neutral text-like placeholder bar appears where the alternative description would conceptually be represented, but do not render actual words or letters. Finally restore the image and return smoothly to the starting composition. No readable text, no logos, no people. Flat vector-like shapes, high contrast, classroom projection friendly. Use deep blue #0D47A1, secondary blue #1565C0, yellow #F2C53D, off-white #F7F7F7. The concept must communicate “content should remain understandable when an image cannot be perceived or loaded”. Smooth motion and loop-friendly ending.

### Objetivo pedagógico

Reforçar que `alt` representa uma alternativa de conteúdo e não uma legenda visual decorativa.

---

## O que permanece em HTML/SVG

Não gerar vídeo para:

- snippets de código;
- anatomia de `<a>`;
- anatomia de `<img>`;
- comparação `ol` x `ul`;
- caminhos relativos;
- laboratório;
- checklist;
- referências.

Esses conteúdos precisam ser legíveis, selecionáveis e acessíveis.

## Integração futura

Quando os arquivos forem produzidos, o componente de slide deverá:

1. carregar o vídeo com `muted`, `playsInline` e `loop`;
2. fornecer fallback SVG/HTML;
3. não usar autoplay quando `prefers-reduced-motion: reduce`;
4. manter descrição acessível fora do vídeo;
5. não depender do vídeo para a resposta de exercícios ou desafios.
