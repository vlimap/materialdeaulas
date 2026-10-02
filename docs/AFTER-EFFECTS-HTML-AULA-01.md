# After Effects / Lottie — Aula 01 de HTML

Os slides já possuem animações vetoriais em CSS/SVG. Os assets abaixo são opcionais para elevar a qualidade visual sem tornar o conteúdo dependente de vídeo.

## Diretrizes gerais

- Estilo: tecnológico, didático, limpo e vetorial.
- Identidade:
  - fundo: `#111111`;
  - azul principal: `#0D47A1`;
  - azul secundário: `#1565C0`;
  - amarelo de destaque: `#F2C53D`;
  - texto claro: `#F7F7F7`.
- Não inserir logotipos institucionais de terceiros.
- Evitar texto dentro da animação; o texto fica no HTML para responsividade e acessibilidade.
- Criar composição principal 1920×1080 e manter todos os elementos essenciais dentro de uma safe area central que também funcione em recorte 1080×1920.
- Duração: 6–9 segundos.
- Loop perfeito.
- 30 fps.
- Apenas formas vetoriais sempre que possível.
- Sem blur pesado, efeitos 3D complexos ou plugins de terceiros.
- Preparar para exportação com Bodymovin/Lottie.
- Fundo transparente quando possível.
- Entregar `.aep` e `.json` Lottie.

## Asset 01 — nascimento do hipertexto

### Prompt

> Crie uma animação vetorial educacional sobre o nascimento do hipertexto. Comece com quatro cartões de documentos isolados em um espaço escuro. Linhas luminosas azuis começam a conectar os cartões; pequenos pulsos amarelos percorrem essas linhas representando hiperlinks. Um cursor minimalista visita um documento e segue um link até outro. O movimento deve comunicar “documentos independentes conectados por referências”. Visual técnico, minimalista, moderno, fundo transparente, paleta #111111, #0D47A1, #1565C0, #F2C53D e branco. Sem texto, sem logos, sem pessoas, sem elementos fotográficos. Loop de 7 segundos. Composição 1920x1080 com safe area compatível com corte vertical 1080x1920. Construir apenas com shape layers e preparar para Bodymovin/Lottie.

## Asset 02 — requisição navegador → servidor

### Prompt

> Crie uma animação vetorial didática mostrando o fluxo de uma página Web: navegador → rede → servidor → resposta → navegador renderizado. Use cinco nós simples conectados por uma linha horizontal. Um pacote luminoso amarelo percorre o caminho de ida; na volta, três pequenos pacotes azuis representam HTML, imagem e metadados. Ao chegar ao navegador, blocos geométricos se organizam como uma página. Não usar texto dentro da composição. Fundo transparente. Paleta #111111, #0D47A1, #1565C0, #F2C53D e #F7F7F7. Movimento suave, legível, sem excesso de elementos. Loop de 8 segundos, 30 fps, shape layers, exportável em Lottie.

## Asset 03 — árvore do documento HTML

### Prompt

> Crie uma animação vetorial que monte uma árvore de documento HTML progressivamente. Um nó raiz surge no topo, divide-se em dois ramos e depois em sub-ramos. A estrutura deve sugerir html → head/body → elementos filhos, porém sem colocar texto nas formas. Use retângulos arredondados conectados por linhas, com o ramo principal destacado em amarelo e os demais em azul. A animação deve ensinar visualmente hierarquia, aninhamento e relação pai/filho. Fundo transparente, estilo técnico minimalista, paleta do Material de Aulas, loop de 7 segundos, 30 fps, Lottie-safe.

## Asset 04 — página semântica

### Prompt

> Crie uma animação vetorial de uma janela de navegador vazia que vai sendo dividida em regiões semânticas: faixa superior, navegação, área principal, duas seções internas e rodapé. Cada região entra com movimento curto e recebe uma borda azul; uma borda amarela percorre as regiões em sequência para indicar ordem lógica de leitura. Não incluir palavras ou tags: o HTML da aula adicionará os rótulos por cima. Fundo transparente, shape layers, sem plugins, loop de 8 segundos, 1920x1080 com safe area vertical, exportação Bodymovin/Lottie.

## Critério de uso no projeto

Antes de incorporar um Lottie:

1. a animação deve acrescentar explicação, e não apenas decoração;
2. o slide deve continuar compreensível se a animação não carregar;
3. o arquivo JSON deve ser otimizado;
4. respeitar `prefers-reduced-motion`;
5. no mobile, não depender de hover;
6. manter o conteúdo textual fora do asset para SEO, GEO e acessibilidade.
