# Concept icons

Conjunto de 40 ícones SVG próprios para conceitos de engenharia de software, requisitos, modelagem e arquitetura.

## Padrão visual

- `24 × 24`;
- `viewBox="0 0 24 24"`;
- fundo transparente;
- traço branco `#FFFFFF`;
- `stroke-width="1.8"`;
- `stroke-linecap="round"`;
- `stroke-linejoin="round"`.

O mapeamento entre slug da plataforma e arquivo SVG fica em:

```text
src/brand/conceptIcons.ts
```

`technologyIcons.ts` incorpora esse mapa, portanto os ícones são reutilizados automaticamente na home, nos roadmaps e em outros componentes que chamam `getTechnologyIcon()`.
