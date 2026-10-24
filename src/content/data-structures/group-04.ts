import type { DataLessonSpec } from './lesson-builder';

export const group04: DataLessonSpec[] = [
  {
    number: 10, slug: 'aula-10-heaps-filas-prioridade',
    title: 'Heap binário e fila de prioridade', short: 'Heap e prioridades',
    subtitle: 'Sempre retire o item mais urgente sem ordenar toda a coleção.',
    opening: {
      title: 'Emergências não seguem ordem de chegada',
      lead: 'Um suporte precisa atender incidentes críticos antes dos chamados rotineiros.',
      detail: 'Uma fila de prioridade organiza retirada conforme uma chave de prioridade, normalmente com heap binário.'
    },
    concepts: [
      { title: 'Heap mantém propriedade local', lead: 'Em min-heap, pai ≤ cada filho.',
        detail: 'Heap não é vetor inteiramente ordenado; apenas garante que a raiz seja o menor elemento.' },
      { title: 'Array armazena árvore quase completa', lead: 'Para índice i, filhos são 2i+1 e 2i+2.',
        detail: 'O pai de i > 0 é Math.floor((i-1)/2). A representação compacta evita ponteiros em nós.' },
      { title: 'Inserir requer subir na árvore', lead: 'O novo item sobe até respeitar a propriedade.',
        detail: 'Heap binário tem altura O(log n), logo inserção costuma custar O(log n).' },
      { title: 'Extrair raiz requer descer', lead: 'A última posição substitui a raiz e desce.',
        detail: 'Extrair mínimo custa O(log n); consultar mínimo é O(1). Defina política para empates de prioridade.' }
    ],
    contrasts: [
      { title: 'FIFO', detail: 'Retira o pedido mais antigo.' },
      { title: 'Fila de prioridade', detail: 'Retira conforme urgência definida.' },
      { title: 'Heap', detail: 'Representação eficiente para fila de prioridade.' }
    ],
    costs: [
      { title: 'Consultar raiz', detail: 'O(1) em heap não vazio.' },
      { title: 'Inserir', detail: 'O(log n) por subida na altura do heap.' },
      { title: 'Extrair mínimo', detail: 'O(log n) por descida e correção da propriedade.' }
    ],
    pitfalls: [
      { title: 'Confundir heap com BST', detail: 'Heap não ordena toda subárvore por chave.' },
      { title: 'Achar que array inteiro está ordenado', detail: 'Somente relação pai-filho é garantida.' },
      { title: 'Não definir empate', detail: 'Use contador de chegada se precisar estabilidade.' }
    ],
    questions: [
      { prompt: 'No min-heap, qual valor sempre está na raiz?',
        choices: ['Menor valor', 'Maior valor', 'Último inserido'], answer: 0,
        why: 'A propriedade local garante o mínimo na raiz.' },
      { prompt: 'Filho esquerdo do índice 2 em heap baseado em zero:',
        choices: ['3', '5', '4'], answer: 1,
        why: '2 × 2 + 1 = 5.' },
      { prompt: 'Extrair mínimo tem custo típico:',
        choices: ['O(1) garantido', 'O(n²)', 'O(log n)'], answer: 2,
        why: 'A reorganização percorre no máximo a altura da árvore.' }
    ],
    starterCode: 'const heap = [2, 4, 3, 9, 6];\nconst minimo = heap[0];\nheap[0] = heap.pop();\nlet i = 0;\nwhile (true) {\n  let m = i, e = 2*i+1, d = e+1;\n  if (e < heap.length && heap[e] < heap[m]) m = e;\n  if (d < heap.length && heap[d] < heap[m]) m = d;\n  if (m === i) break;\n  [heap[i], heap[m]] = [heap[m], heap[i]];\n  i = m;\n}\nconsole.log(minimo);\nconsole.log(heap[0]);',
    expected: '2\n3', incorrect: ['2\n4', '3\n2'],
    codeTask: 'Troque uma prioridade e explique por que a raiz muda após a extração.',
    codeExplanation: 'A raiz removida é 2. O último elemento ocupa a raiz e desce até que 3 vire o menor restante.',
    exercises: [
      { title: 'Heap manual', problem: 'Insira 5,2,8,1 em min-heap e mostre o vetor após cada passo.',
        steps: ['Comece com heap vazio.', 'Insira ao final.', 'Compare com pai e suba.', 'Valide propriedade local.'],
        success: ['Raiz 1', 'Todos os pais ≤ filhos', 'Quatro estados registrados'], minutes: 35 },
      { title: 'Extrair prioridades', problem: 'Remova três mínimos de [1,3,2,7,5,4].',
        steps: ['Retire raiz.', 'Mova último para raiz.', 'Desça conforme filhos.', 'Verifique a ordem dos extraídos.'],
        success: ['Extraídos 1,2,3', 'Heap restante válido', 'Custos O(log n)'], minutes: 40 },
      { title: 'Fila de chamados', problem: 'Implemente insert(prioridade, protocolo) e extractMin() para suporte.',
        steps: ['Defina critério de prioridade.', 'Armazene par prioridade-protocolo.', 'Implemente subida e descida.', 'Teste empates e vazio.'],
        success: ['Mais urgente primeiro', 'Empate definido', 'Casos extremos testados'], minutes: 45 }
    ],
    checklist: ['Conheço propriedade de heap.', 'Calculo pai e filhos.', 'Sei inserir subindo.', 'Sei extrair descendo.', 'Distingo prioridade de FIFO.'],
    references: [{ label: 'OpenDSA · Heaps and Priority Queues', url: 'https://opendsa-server.cs.vt.edu/' }]
  },
  {
    number: 11, slug: 'aula-11-grafos-bfs-dfs',
    title: 'Grafos, listas de adjacência e percursos BFS e DFS', short: 'Grafos · BFS e DFS',
    subtitle: 'Conexões, alcance, caminhos e componentes.',
    opening: {
      title: 'Como descobrir salas acessíveis por corredores?',
      lead: 'Os espaços são vértices e as passagens são arestas.',
      detail: 'Grafos representam redes de rotas, dependências e relacionamentos, com ciclos e múltiplos caminhos.'
    },
    concepts: [
      { title: 'Grafo tem vértices e arestas', lead: 'Conexões podem ser direcionadas ou não.',
        detail: 'Escolha se a relação A→B implica B→A e se os caminhos recebem pesos como distância ou custo.' },
      { title: 'Adjacência é representação prática', lead: 'Map<vertice, vizinhos[]> descreve conexões.',
        detail: 'Lista de adjacência usa O(V+E) espaço em grafos esparsos; matriz usa O(V²) posições.' },
      { title: 'BFS percorre por camadas', lead: 'Uma fila explora primeiro os vizinhos próximos.',
        detail: 'Em grafo não ponderado, BFS encontra menor número de arestas de origem a cada vértice alcançável.' },
      { title: 'DFS aprofunda antes de retornar', lead: 'Pilha ou recursão controlam exploração.',
        detail: 'Use conjunto visitados para encerrar ciclos; ambos percursos são O(V+E) com lista de adjacência.' }
    ],
    contrasts: [
      { title: 'BFS', detail: 'Fila; visita por distância em arestas.' },
      { title: 'DFS', detail: 'Pilha; aprofunda caminho antes de voltar.' },
      { title: 'Dijkstra', detail: 'Menores caminhos com pesos não negativos; não é o mesmo que BFS.' }
    ],
    costs: [
      { title: 'Adjacência', detail: 'O(V+E) espaço para lista de vizinhos.' },
      { title: 'BFS', detail: 'O(V+E) tempo com conjunto de visitados.' },
      { title: 'DFS', detail: 'O(V+E) tempo com lista de adjacência.' }
    ],
    pitfalls: [
      { title: 'Não marcar visitado', detail: 'Ciclos podem gerar repetição infinita.' },
      { title: 'Usar BFS para peso arbitrário', detail: 'Menor número de arestas não é menor custo ponderado.' },
      { title: 'Confundir dirigido e não dirigido', detail: 'Crie aresta de volta apenas quando a relação for bidirecional.' }
    ],
    questions: [
      { prompt: 'Em grafo não ponderado, qual busca encontra menos arestas a partir da origem?',
        choices: ['BFS', 'DFS sempre', 'Ordenação bubble'], answer: 0,
        why: 'BFS visita nós por camadas crescentes.' },
      { prompt: 'Para evitar ciclo infinito durante percurso:',
        choices: ['Retire todas as arestas', 'Use conjunto de visitados', 'Ordene rótulos alfabeticamente'],
        answer: 1, why: 'Visitados impede revisitar o mesmo vértice.' },
      { prompt: 'Qual custo de BFS em lista de adjacência?',
        choices: ['O(1)', 'O(V²) sempre', 'O(V+E)'], answer: 2,
        why: 'Cada vértice e aresta relevante é processado número constante de vezes.' }
    ],
    starterCode: 'const grafo = new Map([\n  ["A", ["B", "C"]], ["B", ["A", "D"]],\n  ["C", ["A"]], ["D", ["B"]]\n]);\nconst fila = ["A"], vistos = new Set(["A"]);\nconst ordem = [];\nfor (let head = 0; head < fila.length; head++) {\n  const atual = fila[head]; ordem.push(atual);\n  for (const vizinho of grafo.get(atual) ?? []) {\n    if (!vistos.has(vizinho)) {\n      vistos.add(vizinho); fila.push(vizinho);\n    }\n  }\n}\nconsole.log(ordem.join(","));',
    expected: 'A,B,C,D', incorrect: ['A,B,D,C', 'D,C,B,A'],
    codeTask: 'Adicione aresta C–D e compare a ordem de visita; implemente também DFS.',
    codeExplanation: 'BFS começa em A, insere B e C; quando B é atendido, D entra na fila, resultando A,B,C,D.',
    exercises: [
      { title: 'Mapa de corredores', problem: 'Crie grafo não dirigido com cinco salas e seis conexões.',
        steps: ['Liste os vértices.', 'Adicione arestas em ambas direções.', 'Escolha origem.', 'Identifique alcançáveis.'],
        success: ['Cinco vértices', 'Seis conexões sem duplicação lógica', 'Alcance correto'], minutes: 35 },
      { title: 'BFS e distância', problem: 'Encontre menor número de passagens de A a E.',
        steps: ['Crie fila de vértices.', 'Registre visitados na descoberta.', 'Guarde distâncias ou pais.', 'Reconstrua o caminho.'],
        success: ['Sem ciclos infinitos', 'Distância em arestas', 'Caminho reconstruído'], minutes: 40 },
      { title: 'DFS e componentes', problem: 'Conte componentes conexas num grafo não dirigido.',
        steps: ['Varra todos os vértices.', 'Inicie DFS para cada não visitado.', 'Marque todo componente.', 'Teste vértice isolado.'],
        success: ['Componentes contadas', 'Isolado identificado', 'O(V+E) justificado'], minutes: 45 }
    ],
    checklist: ['Distingo vértices e arestas.', 'Modelo grafo dirigido e não dirigido.', 'Implemento BFS.', 'Implemento DFS.', 'Explico O(V+E) e caminho mínimo sem pesos.'],
    references: [{ label: 'OpenDSA · Graphs', url: 'https://opendsa-server.cs.vt.edu/' }]
  },
  {
    number: 12, slug: 'aula-12-projeto-integrador-escolha-estruturas',
    title: 'Projeto integrador: sistema de chamados e seleção de estruturas', short: 'Projeto integrador',
    subtitle: 'Escolha, implemente, teste e defenda sua arquitetura de dados.',
    opening: {
      title: 'Uma estrutura não resolve tudo',
      lead: 'Chamados possuem protocolos, ordem de chegada, prioridade, tags e dependências.',
      detail: 'Monte um modelo de dados que combine estruturas adequadas às operações reais e valide consistência entre elas.'
    },
    concepts: [
      { title: 'Requisitos determinam representação', lead: 'Busca por protocolo, prioridade e histórico são operações diferentes.',
        detail: 'Map encontra chamado por chave; Set deduplica tags; fila ou heap decide ordem de atendimento; grafo modela dependências.' },
      { title: 'Consistência entre índices importa', lead: 'Um registro pode aparecer em múltiplas estruturas.',
        detail: 'Ao concluir um chamado, atualize ou invalide representações derivadas para evitar estado divergente.' },
      { title: 'Testes de contrato cobrem bordas', lead: 'Vazio, duplicata, empate e exclusão precisam ser testados.',
        detail: 'Use entradas previsíveis, assertivas e casos de regressão para cada operação.' },
      { title: 'Decisão técnica exige trade-offs', lead: 'Custo e clareza valem mais que sofisticação sem benefício.',
        detail: 'Documente operações esperadas, Big-O com hipóteses, consumo de memória, alternativas e evidência do código.' }
    ],
    contrasts: [
      { title: 'Map por protocolo', detail: 'Consulta direta sem percorrer histórico.' },
      { title: 'Set por etiqueta', detail: 'Tags não duplicadas por chamado.' },
      { title: 'Heap por prioridade', detail: 'Ordena próximos atendimentos por urgência.' }
    ],
    costs: [
      { title: 'Map', detail: 'Busca esperada eficiente, dependente da implementação.' },
      { title: 'Fila', detail: 'Enfileirar e atender em ordem com implementação adequada.' },
      { title: 'Heap', detail: 'Inserir/extrair conforme prioridade em O(log n).' }
    ],
    pitfalls: [
      { title: 'Estado duplicado sem atualização', detail: 'Identifique fonte de verdade e invalidação.' },
      { title: 'Prioridade sem regra de empate', detail: 'Use sequência monotônica de chegada.' },
      { title: 'Benchmark sem contexto', detail: 'Avalie tamanho, operações, memória e hardware.' }
    ],
    questions: [
      { prompt: 'A operação mais frequente é consulta por protocolo. Qual estrutura?',
        choices: ['Map', 'Pilha de desfazer', 'Array ordenado a cada consulta'],
        answer: 0, why: 'Map é uma opção natural para acesso associativo por chave.' },
      { prompt: 'Um chamado recebe "rede" duas vezes. Para remover duplicatas use:',
        choices: ['Fila', 'Set', 'BST degenerada'], answer: 1,
        why: 'Set mantém um único valor equivalente.' },
      { prompt: 'A política é atender mais urgente primeiro. Qual estrutura principal?',
        choices: ['Pilha LIFO', 'Array com shift sempre', 'Fila de prioridade / heap'],
        answer: 2, why: 'Heap oferece extração pela chave de urgência.' }
    ],
    starterCode: 'const chamados = new Map();\nfunction abrir(id, nivel, tags = []) {\n  if (chamados.has(id)) return false;\n  chamados.set(id, { nivel, tags: new Set(tags), status: "aberto" });\n  return true;\n}\nabrir("T01", 2, ["rede", "rede"]);\nabrir("T02", 1, ["wifi"]);\nconsole.log(chamados.size);\nconsole.log(chamados.get("T01").tags.size);\nconsole.log(chamados.get("T02").nivel);',
    expected: '2\n1\n1', incorrect: ['2\n2\n1', '3\n1\n2'],
    codeTask: 'Impeça protocolo duplicado, atualize status e acrescente fila por prioridade preservando Map como fonte de verdade.',
    codeExplanation: 'Há dois protocolos únicos; Set elimina a repetição de "rede"; T02 tem nível 1.',
    exercises: [
      { title: 'Projeto e contratos', problem: 'Especifique abrir, buscar, priorizar, atender e concluir chamados.',
        steps: ['Defina operações e pré-condições.', 'Associe uma estrutura a cada operação.', 'Desenhe fluxo do registro.', 'Escreva cinco casos de aceite.'],
        success: ['Cinco contratos', 'Escolhas justificadas', 'Critérios observáveis'], minutes: 35 },
      { title: 'Implementação integrada', problem: 'Construa Map + Set + fila de prioridade ou fila FIFO justificada.',
        steps: ['Use Map como fonte de verdade.', 'Deduplicate tags em Set.', 'Organize atendimento por política escolhida.', 'Teste atualização e invalidação.'],
        success: ['Busca funcional', 'Sem duplicatas', 'Atendimento consistente'], minutes: 40 },
      { title: 'Entrega e defesa técnica', problem: 'Apresente código, testes, casos-limite, custos e trade-offs.',
        steps: ['Execute no mínimo dez asserts.', 'Compare duas alternativas de estrutura.', 'Documente Big-O com hipóteses.', 'Explique limites e próximos passos.'],
        success: ['Dez testes reprodutíveis', 'Complexidade defendida', 'Relatório final e demonstração'], minutes: 45 }
    ],
    checklist: ['Relaciono requisito à operação.', 'Combino estruturas sem inconsistência.', 'Trato duplicatas e empates.', 'Executo casos-limite.', 'Defendo arquitetura, custos e testes.'],
    references: [
      { label: 'MDN · Estruturas indexadas e com chave', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections' },
      { label: 'OpenDSA · Data Structures', url: 'https://opendsa-server.cs.vt.edu/' }
    ]
  }
];
