# Assets visuais — Aula 01 de HTML

A Aula 01 foi desenhada para projeção: pouco texto, explicação oral e recursos visuais como elemento principal.

Os recursos abaixo são os únicos que valem produção externa neste momento. Todo o restante continua em SVG/CSS/HTML para manter responsividade, acessibilidade e boa performance.

## Entrega recomendada

Coloque os arquivos finais em:

```text
src/assets/lessons/html/aula-01/
```

Nomes esperados:

```text
01-hypertext-network.json
02-browser-server-flow.json
03-html-document-tree.json
04-semantic-page.json
```

Opcionalmente mantenha os projetos editáveis fora do bundle:

```text
creative-source/html/aula-01/*.aep
```

## Direção visual obrigatória

- fundo preferencialmente transparente;
- azul principal: `#0D47A1`;
- azul secundário: `#1565C0`;
- amarelo: `#F2C53D`;
- branco: `#F7F7F7`;
- evitar texto dentro da animação;
- sem logotipos externos;
- 30 fps;
- loop entre 6 e 9 segundos;
- shape layers sempre que possível;
- compatível com Bodymovin/Lottie;
- composição principal 1920×1080;
- conteúdo essencial dentro de uma safe area central compatível com recorte vertical 1080×1920;
- animação deve continuar compreensível em uma tela projetada à distância.

---

## Prioridade 1 — nascimento do hipertexto

**Arquivo:** `01-hypertext-network.json`

**Onde entra:** depois do slide histórico e antes de Internet x Web.

### Prompt para After Effects

> Crie uma animação vetorial educacional que explique hipertexto sem usar palavras. Comece com quatro documentos isolados, representados por cartões simples. Em seguida, linhas azuis conectam os documentos. Pequenos pulsos amarelos percorrem essas linhas. Um cursor minimalista seleciona um documento e segue uma conexão até outro. A animação precisa comunicar visualmente “documentos independentes conectados por referências”. Estética tecnológica, sóbria e didática; fundo transparente; paleta #0D47A1, #1565C0, #F2C53D e #F7F7F7. Sem texto, pessoas, fotografias ou logotipos. Loop perfeito de 7 segundos, 30 fps, apenas shape layers, compatível com Bodymovin/Lottie.

---

## Prioridade 2 — navegador → servidor → resposta

**Arquivo:** `02-browser-server-flow.json`

**Onde entra:** slide “Do endereço digitado à página renderizada”.

### Prompt para After Effects

> Crie uma animação vetorial didática do fluxo de uma requisição Web. Mostre, da esquerda para a direita, um navegador, uma rede abstrata, um servidor e novamente o navegador. Um pacote amarelo sai do navegador, atravessa a rede e chega ao servidor. Na volta, três pequenos pacotes azuis retornam e se organizam dentro da janela do navegador como blocos de uma página. Não use texto. O movimento deve deixar evidente pedido → processamento → resposta → renderização. Fundo transparente, paleta #0D47A1, #1565C0, #F2C53D e #F7F7F7. Loop perfeito de 8 segundos, 30 fps, shape layers e exportação Lottie.

---

## Prioridade 3 — árvore do documento HTML

**Arquivo:** `03-html-document-tree.json`

**Onde entra:** antes do primeiro documento HTML completo.

### Prompt para After Effects

> Crie uma animação vetorial de uma árvore de documento sendo montada progressivamente. Um nó raiz aparece e se divide em dois ramos principais. Cada ramo ganha nós filhos em sequência. Não escreva tags dentro da animação; o slide HTML adicionará os rótulos sobre os nós. O movimento deve ensinar hierarquia, aninhamento, relação pai/filho e fechamento de estrutura. Destaque o ramo ativo em amarelo e os demais em azul. Fundo transparente, estética minimalista, loop de 7 segundos, 30 fps, shape layers, compatível com Bodymovin/Lottie.

---

## Prioridade 4 — página semântica

**Arquivo:** `04-semantic-page.json`

**Onde entra:** bloco de HTML semântico.

### Prompt para After Effects

> Crie uma animação vetorial de uma janela de navegador vazia que gradualmente se divide em regiões: faixa superior, navegação, conteúdo principal, duas áreas internas e rodapé. As regiões entram em sequência e ficam organizadas como um wireframe de página. Uma borda amarela percorre as áreas na ordem lógica de leitura. Não inserir palavras ou tags; os rótulos serão sobrepostos pelo HTML. Fundo transparente, shape layers, paleta #0D47A1, #1565C0, #F2C53D e #F7F7F7, loop de 8 segundos, 30 fps e exportação Bodymovin/Lottie.

---

## O que não precisa de After Effects

Não vale produzir externamente:

- anatomia de uma tag;
- cards de conceitos;
- snippets de código;
- checklist;
- laboratório;
- comparação entre tags;
- referências.

Esses elementos ficam melhores como HTML/CSS porque precisam permanecer legíveis, selecionáveis, responsivos e acessíveis.

## Blender

**Não é necessário para a Aula 01 de HTML.**

3D aqui acrescentaria impacto visual, mas não compreensão suficiente para justificar custo, peso e manutenção. Blender passa a fazer sentido apenas quando o assunto depender de espaço, profundidade, transformação ou objeto tridimensional.

## Critério para incorporar qualquer asset

1. Deve ensinar algo que uma imagem estática não ensina tão bem.
2. O slide continua compreensível caso o asset não carregue.
3. Texto permanece no HTML.
4. Respeitar `prefers-reduced-motion`.
5. Não depender de hover.
6. O JSON final deve ser otimizado antes de entrar no bundle.
