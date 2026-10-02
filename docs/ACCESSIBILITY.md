# Acessibilidade

A acessibilidade é requisito de conteúdo e interface. O objetivo é permitir que pessoas com diferentes deficiências, dispositivos, velocidades de conexão e níveis de experiência estudem com autonomia.

## Interface

- Use HTML semântico e headings em ordem.
- Mantenha o link “Pular para o conteúdo principal”.
- Todo controle deve funcionar com teclado e ter foco visível.
- Não use apenas cor para comunicar estado.
- Respeite `prefers-reduced-motion`.
- Garanta contraste suficiente entre texto, fundo, bordas e foco.
- Use `aria-label`, `aria-live` e `aria-pressed` somente quando agregarem informação.
- Botões devem dizer o que fazem; evite “clique aqui”.

## Conteúdo

- Descreva imagens, diagramas e gráficos; use `alt=""` em elementos decorativos.
- Não coloque informação essencial somente dentro de uma imagem.
- Forneça legendas e transcrições para áudio e vídeo.
- Use código selecionável e copiável.
- Prefira frases curtas e explique termos técnicos.
- Inclua alternativa para atividades que dependam de mouse, som, cor ou tempo.

## VLibras

O widget VLibras é carregado em `index.html` pelo script oficial. Ele ajuda na tradução de português para Libras, mas não substitui texto claro, descrição de imagens, legendas ou revisão humana.

Ao criar uma aula:

1. Escreva o texto visível por extenso.
2. Evite texto essencial dentro de imagens.
3. Teste o widget em uma página de aula.
4. Verifique se o botão não cobre controles ou conteúdo.
5. Registre limitações no PR.

## Validação manual

- Navegar com `Tab`, `Shift + Tab`, `Enter` e setas.
- Usar zoom de 200% sem perder conteúdo.
- Testar leitor de tela quando possível.
- Ativar redução de movimento.
- Abrir o VLibras e traduzir um trecho de aula.
- Confirmar que a aula continua compreensível sem imagens.
