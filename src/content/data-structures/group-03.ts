import type { DataLessonSpec } from './lesson-builder';

export const group03: DataLessonSpec[] = [
  {
    number: 7, slug: 'aula-07-hash-map-set-colisoes',
    title: 'Tabelas hash, Map, Set e colisões', short: 'Map, Set e Hash',
    subtitle: 'Acesso por chave, unicidade e garantias médias.',
    opening: {
      title: 'Como recuperar um chamado pelo protocolo?',
      lead: 'Procurar uma chave em uma lista cresce com a quantidade de registros.',
      detail: 'Map associa chave a valor; Set guarda itens únicos. Implementações baseadas em hashing dependem de funções, dispersão e tratamento de colisões.'
    },
    concepts: [
      { title: 'Map modela chave e valor', lead: 'Uma chave permite localizar seu registro.',
        detail: 'Use set, get, has e delete. Map aceita chaves não restritas a strings e mantém ordem de inserção na iteração.' },
      { title: 'Set garante valores únicos', lead: 'Inserir o mesmo valor duas vezes não cria duplicatas.',
        detail: 'É adequado para permissões, tags, visitantes únicos e verificações de pertinência.' },
      { title: 'Hash transforma chave em posição lógica', lead: 'Colisões são possíveis e precisam de tratamento.',
        detail: 'Tabelas hash podem usar encadeamento ou endereçamento aberto; detalhes não são expostos pelo objeto Map da linguagem.' },
      { title: 'Complexidade média não é garantia absoluta', lead: 'Busca costuma ter custo médio próximo de O(1).',
        detail: 'Distribuição das chaves, política de expansão e colisões afetam resultados; pior caso de implementações clássicas pode ser O(n).' }
    ],
    contrasts: [
      { title: 'Map', detail: 'Chave → valor e atualização por chave.' },
      { title: 'Set', detail: 'Coleção de valores distintos.' },
      { title: 'Array', detail: 'Sequência indexada, permite valores repetidos.' }
    ],
    costs: [
      { title: 'get/has', detail: 'Em tabela hash típica, O(1) esperado/amortizado; não prometido pelo contrato ECMAScript.' },
      { title: 'Colisão', detail: 'Mais de uma chave pode disputar a mesma posição de hash.' },
      { title: 'Espaço', detail: 'Tabela reserva capacidade adicional e metadados.' }
    ],
    pitfalls: [
      { title: 'Objeto como chave sem identidade', detail: 'Chaves objeto em Map usam igualdade por referência.' },
      { title: 'Confundir hash com criptografia', detail: 'Hash para tabela não fornece proteção de senha.' },
      { title: 'Afirmar O(1) em todo caso', detail: 'Trate condições, distribuição e caso pior.' }
    ],
    questions: [
      { prompt: 'Qual estrutura armazena protocolo → chamado?',
        choices: ['Set somente', 'Map', 'Pilha'], answer: 1,
        why: 'Map associa identificador único a objeto de detalhes.' },
      { prompt: 'Se um Set recebe "A", "B" e "A", seu tamanho é:',
        choices: ['2', '3', '1'], answer: 0, why: 'Valores repetidos não criam uma nova entrada.' },
      { prompt: 'Duas chaves podem produzir o mesmo hash?',
        choices: ['Nunca', 'Somente com números negativos', 'Sim, ocorre colisão'],
        answer: 2, why: 'A capacidade finita da tabela torna colisões possíveis.' }
    ],
    starterCode: 'const chamados = new Map();\nchamados.set("A12", "Aberto");\nchamados.set("B31", "Fechado");\nchamados.set("A12", "Em análise");\nconst perfis = new Set(["aluno", "docente", "aluno"]);\nconsole.log(chamados.get("A12"));\nconsole.log(chamados.size);\nconsole.log(perfis.size);',
    expected: 'Em análise\n2\n2', incorrect: ['Aberto\n3\n3', 'Em análise\n3\n2'],
    codeTask: 'Inclua nova chave, teste has e delete, e compare com adicionar valor repetido no Set.',
    codeExplanation: 'set atualiza A12 sem aumentar o tamanho do Map. O Set contém dois perfis distintos.',
    exercises: [
      { title: 'Índice de chamados', problem: 'Crie Map para localizar protocolos e atualizar status.',
        steps: ['Insira três protocolos.', 'Recupere um registro.', 'Atualize uma chave.', 'Teste chave ausente.'],
        success: ['Map atualizado', 'Consulta por chave', 'Ausência tratada'], minutes: 35 },
      { title: 'Perfis únicos', problem: 'Conte usuários distintos a partir de uma lista com repetições.',
        steps: ['Crie dados com duplicatas.', 'Construa Set.', 'Compare tamanhos.', 'Explique igualdade de objetos.'],
        success: ['Duplicatas removidas', 'Quantidade correta', 'Sem confundir identidade'], minutes: 40 },
      { title: 'Colisões didáticas', problem: 'Simule hash de inteiros modulo 5 com tratamento por encadeamento.',
        steps: ['Calcule 7 % 5 e 12 % 5.', 'Crie buckets com arrays.', 'Armazene ambos sem perda.', 'Busque cada chave.'],
        success: ['Colisão identificada', 'Dados preservados', 'Busca funciona'], minutes: 45 }
    ],
    checklist: ['Uso Map para chave e valor.', 'Uso Set para valores únicos.', 'Reconheço colisões.', 'Diferencio hash de criptografia.', 'Não confundo custo esperado com garantia.'],
    references: [
      { label: 'MDN · Map', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map' },
      { label: 'MDN · Set', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set' }
    ]
  },
  {
    number: 8, slug: 'aula-08-arvores-binarias-percursos',
    title: 'Árvores binárias, altura e percursos', short: 'Árvores binárias',
    subtitle: 'Relações hierárquicas com percursos em profundidade e largura.',
    opening: {
      title: 'Como representar departamentos e equipes?',
      lead: 'Uma estrutura hierárquica é mais adequada do que uma lista plana para representar dependências.',
      detail: 'Uma árvore possui raiz, nós, arestas, folhas e subárvores; cada nó binário tem no máximo dois filhos.'
    },
    concepts: [
      { title: 'Raiz, pai, filho e folha descrevem posições', lead: 'A árvore representa uma hierarquia sem ciclos.',
        detail: 'Em uma árvore enraizada, cada nó exceto a raiz possui exatamente um pai. Uma árvore binária limita os filhos a esquerda e direita.' },
      { title: 'Altura influencia custos', lead: 'Percorrer caminhos depende da profundidade.',
        detail: 'Uma árvore degenerada pode ter altura O(n); uma bem balanceada tem altura O(log n).' },
      { title: 'Percursos têm ordens diferentes', lead: 'Pré-ordem: raiz, esquerda, direita.',
        detail: 'Em ordem: esquerda, raiz, direita. Pós-ordem: esquerda, direita, raiz. BFS visita por níveis.' },
      { title: 'Percorrer todos os nós custa O(n)', lead: 'Uma visita por nó exige trabalho linear.',
        detail: 'Recursão DFS utiliza pilha proporcional à altura; BFS requer fila proporcional à largura máxima.' }
    ],
    contrasts: [
      { title: 'Pré-ordem', detail: 'Raiz antes das subárvores.' },
      { title: 'Em ordem', detail: 'Esquerda, raiz, direita.' },
      { title: 'Pós-ordem', detail: 'Subárvores antes da raiz.' }
    ],
    costs: [
      { title: 'Percurso total', detail: 'O(n) para visitar n nós.' },
      { title: 'DFS recursivo', detail: 'Pilha auxiliar O(h), sendo h a altura.' },
      { title: 'BFS', detail: 'Fila cresce conforme a largura visitada.' }
    ],
    pitfalls: [
      { title: 'Confundir árvore binária com BST', detail: 'Árvore binária não exige regra de ordenação.' },
      { title: 'Esquecer caso null', detail: 'Todo percurso deve encerrar em subárvore vazia.' },
      { title: 'Confundir ordem de visita', detail: 'Compare as três ordens na mesma árvore.' }
    ],
    questions: [
      { prompt: 'Em árvore binária, um nó tem no máximo:',
        choices: ['Dois filhos', 'Três filhos', 'Filhos ilimitados'],
        answer: 0, why: 'Binária limita esquerda e direita.' },
      { prompt: 'No percurso pré-ordem, o primeiro visitado é:',
        choices: ['A folha mais à direita', 'A raiz', 'A menor chave'],
        answer: 1, why: 'Pré-ordem começa pela raiz.' },
      { prompt: 'Visitar todos os n nós ao menos uma vez custa:',
        choices: ['O(1)', 'O(log n) sempre', 'O(n)'],
        answer: 2, why: 'Há ao menos n visitas de nós.' }
    ],
    starterCode: 'const arvore = {\n  valor: "A",\n  esq: { valor: "B", esq: null, dir: null },\n  dir: { valor: "C", esq: null, dir: null }\n};\nfunction preOrdem(no, out = []) {\n  if (!no) return out;\n  out.push(no.valor);\n  preOrdem(no.esq, out);\n  preOrdem(no.dir, out);\n  return out;\n}\nconsole.log(preOrdem(arvore).join(","));',
    expected: 'A,B,C', incorrect: ['B,A,C', 'B,C,A'],
    codeTask: 'Altere a travessia para em ordem e pós-ordem; compare as três saídas.',
    codeExplanation: 'Pré-ordem visita a raiz A, depois B, depois C.',
    exercises: [
      { title: 'Desenhe a árvore', problem: 'Modele diretoria, duas coordenações e quatro equipes.',
        steps: ['Defina a raiz.', 'Crie filhos até profundidade 2.', 'Marque folhas.', 'Conte nós e altura.'],
        success: ['Relações corretas', 'Folhas identificadas', 'Altura coerente'], minutes: 35 },
      { title: 'Três percursos', problem: 'Implemente pré, em e pós-ordem para a mesma árvore.',
        steps: ['Defina caso base null.', 'Ordene chamadas recursivas.', 'Execute três variantes.', 'Compare saídas.'],
        success: ['Pré A,B,C', 'Em B,A,C', 'Pós B,C,A'], minutes: 40 },
      { title: 'Largura por níveis', problem: 'Implemente BFS com fila de índice head.',
        steps: ['Comece com raiz.', 'Atenda um nó por vez.', 'Enfileire filhos existentes.', 'Teste árvore vazia.'],
        success: ['Visita por níveis', 'Fila sem shift', 'Caso vazio tratado'], minutes: 45 }
    ],
    checklist: ['Identifico raiz e folhas.', 'Calculo altura.', 'Distingo pré, em e pós-ordem.', 'Conheço BFS por níveis.', 'Explico tempo e memória.'],
    references: [{ label: 'OpenDSA · Binary Trees', url: 'https://opendsa-server.cs.vt.edu/' }]
  },
  {
    number: 9, slug: 'aula-09-arvore-busca-binaria-balanceamento',
    title: 'Árvore de busca binária e efeito do balanceamento', short: 'Árvore de busca · BST',
    subtitle: 'A ordenação das chaves define o caminho de busca.',
    opening: {
      title: 'Como manter códigos em ordem sem ordenar toda consulta?',
      lead: 'Uma BST mantém chaves menores à esquerda e maiores à direita.',
      detail: 'A altura, não só a quantidade de nós, determina a eficiência das buscas e inserções.'
    },
    concepts: [
      { title: 'BST tem uma invariante de ordenação', lead: 'Todos os valores da esquerda são menores; da direita, maiores.',
        detail: 'Defina uma regra explícita para chaves duplicadas. A invariante vale para cada subárvore, não só para os filhos imediatos.' },
      { title: 'Busca compara e escolhe um ramo', lead: 'O caminho segue a direção adequada.',
        detail: 'Para encontrar 4 na raiz 8, procure à esquerda; repetir elimina outras subárvores.' },
      { title: 'Altura pode destruir eficiência', lead: 'Inserir valores já ordenados pode criar uma cadeia.',
        detail: 'Busca, inserção e remoção são O(h): h ≈ log n quando balanceada; h ≈ n quando degenerada.' },
      { title: 'Balanceamento exige regras extras', lead: 'AVL e rubro-negras limitam a altura.',
        detail: 'Árvores autobalanceadas ajustam a estrutura após atualizações; o custo adicional compra garantia logarítmica.' }
    ],
    contrasts: [
      { title: 'Árvore binária', detail: 'Até dois filhos, sem ordem necessária.' },
      { title: 'BST', detail: 'Mantém invariante de ordem por chave.' },
      { title: 'BST balanceada', detail: 'Mantém altura proporcional a log n.' }
    ],
    costs: [
      { title: 'Busca/inserção', detail: 'O(h), onde h é altura atual.' },
      { title: 'BST degenerada', detail: 'h = O(n) no pior caso.' },
      { title: 'BST balanceada', detail: 'Busca O(log n) sob invariantes de balanceamento.' }
    ],
    pitfalls: [
      { title: 'Afirmar O(log n) sempre', detail: 'BST simples não garante balanceamento.' },
      { title: 'Ignorar duplicatas', detail: 'Documente rejeição, contagem ou política consistente.' },
      { title: 'Alterar nó sem preservar ordem', detail: 'Após remover, confirme a invariante de toda subárvore.' }
    ],
    questions: [
      { prompt: 'Em BST com raiz 8, para procurar 3 vá:',
        choices: ['Direita', 'Esquerda', 'Para qualquer ramo'],
        answer: 1, why: 'Valores menores pertencem à subárvore esquerda.' },
      { prompt: 'Inserir 1,2,3,4 em BST simples pode causar:',
        choices: ['Altura linear', 'Balanceamento automático', 'Tempo de busca O(1)'],
        answer: 0, why: 'Chaves ordenadas formam um único caminho.' },
      { prompt: 'Uma BST com altura h procura chave em:',
        choices: ['O(1) garantido', 'O(n²) sempre', 'O(h)'],
        answer: 2, why: 'Uma busca percorre no máximo um ramo por nível.' }
    ],
    starterCode: 'const raiz = { valor: 8, esq: {\n  valor: 4, esq: { valor: 2, esq: null, dir: null },\n  dir: { valor: 6, esq: null, dir: null }\n}, dir: { valor: 12, esq: null, dir: null } };\nfunction buscar(no, alvo) {\n  while (no) {\n    if (no.valor === alvo) return true;\n    no = alvo < no.valor ? no.esq : no.dir;\n  }\n  return false;\n}\nconsole.log(buscar(raiz, 6));\nconsole.log(buscar(raiz, 9));',
    expected: 'true\nfalse', incorrect: ['false\ntrue', 'true\ntrue'],
    codeTask: 'Procure 2, 12 e 20. Conte quantos nós cada busca examina.',
    codeExplanation: '6 é encontrado seguindo 8 → 4 → 6; 9 não está entre os nós da árvore.',
    exercises: [
      { title: 'Inserção manual', problem: 'Desenhe BST após inserir 8,4,12,2,6.',
        steps: ['Comece pela raiz 8.', 'Compare cada nova chave.', 'Insira na folha adequada.', 'Confirme ordem por percurso em ordem.'],
        success: ['Invariante preservada', 'Cinco nós corretos', 'Percurso 2,4,6,8,12'], minutes: 35 },
      { title: 'Experimento degenerado', problem: 'Compare inserção 1,2,3,4 com 2,1,4,3.',
        steps: ['Monte as duas árvores.', 'Meça alturas.', 'Conte comparações da busca.', 'Explique diferenças.'],
        success: ['Alturas medidas', 'Custos O(h)', 'Limite sem balanceamento'], minutes: 40 },
      { title: 'Implementar busca', problem: 'Implemente contains(root, key) sem recursão.',
        steps: ['Defina saída booleana.', 'Compare chave a cada nó.', 'Escolha ramo e atualize referência.', 'Teste existência e ausência.'],
        success: ['Busca determinística', 'Casos de borda', 'Custo justificado'], minutes: 45 }
    ],
    checklist: ['Conheço invariante BST.', 'Busco seguindo um ramo.', 'Calculo custo O(h).', 'Sei explicar degradação.', 'Entendo motivo do balanceamento.'],
    references: [{ label: 'OpenDSA · Binary Search Trees', url: 'https://opendsa-server.cs.vt.edu/' }]
  }
];
