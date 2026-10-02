# Concept icons

Conjunto de **196 ícones SVG** próprios usados pelos conceitos e tópicos da plataforma.

Com os ícones de tecnologias já existentes, o catálogo passa a ter **249 itens com cobertura de ícone**.

## Padrão visual

- `24 × 24`;
- `viewBox="0 0 24 24"`;
- fundo transparente;
- traço branco `#FFFFFF`;
- `stroke-width="1.8"`;
- `stroke-linecap="round"`;
- `stroke-linejoin="round"`.

## Integração

O mapeamento entre slug e arquivo SVG fica em:

```text
src/brand/conceptIcons.ts
```

`technologyIcons.ts` incorpora esse mapa. Home, catálogo e roadmaps que usam `getTechnologyIcon()` recebem os ícones automaticamente.

O CI valida duas invariantes:

1. todo item do catálogo precisa ter ícone mapeado;
2. nenhum SVG em `src/brand/concept-icons/` pode ficar sem uso.
