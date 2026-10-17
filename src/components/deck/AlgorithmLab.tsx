import { useMemo, useState, type KeyboardEvent, type SyntheticEvent } from 'react';
import { ArrowRight, RotateCcw, CheckCircle2, Settings } from 'lucide-react';
import type { Slide } from '../../types/course';
import './AlgorithmLab.css';

type LabSlide = Extract<Slide, { kind: 'algorithm-lab' }>;
type Scenario = LabSlide['scenario'];
type TraceStep = { line: number; state: string; message: string };
export type AlgorithmExecution = {
  title: string;
  inputLabel: string;
  inputValue: string;
  source: string[];
  steps: TraceStep[];
  result: string;
};

const step = (line: number, state: string, message: string): TraceStep => ({ line, state, message });

/** Each execution is pure: recomputing with the same inputs yields the same trace. */
export function buildAlgorithmTrace(scenario: Scenario, n: number, repair = false): AlgorithmExecution {
  const value = Math.max(1, Math.min(5, Math.trunc(n)));
  switch (scenario) {
    case 'flowchart': {
      const high = value >= 3;
      return {
        title: 'Fluxo: número suficiente?',
        inputLabel: 'Quantidade', inputValue: String(value),
        source: ['LER quantidade', 'SE quantidade >= 3 ENTÃO', '    ESCREVER "Suficiente"', 'SENÃO', '    ESCREVER "Insuficiente"', 'FIM SE'],
        steps: [step(0, 'quantidade = ' + value, 'Leitura do dado de entrada.'),
          step(1, high ? 'condição = verdadeiro' : 'condição = falso', 'Avalie a condição do losango.'),
          step(high ? 2 : 4, high ? 'Suficiente' : 'Insuficiente', 'Apenas um dos caminhos é percorrido.')],
        result: high ? 'Suficiente' : 'Insuficiente'
      };
    }
    case 'variables':
      return {
        title: 'Acompanhe uma variável',
        inputLabel: 'Valor inicial', inputValue: String(value),
        source: ['numero ← entrada', 'copia ← numero', 'numero ← numero + 2', 'ESCREVER numero', 'ESCREVER copia'],
        steps: [step(0, 'numero = ' + value, 'A variável recebe a entrada.'),
          step(1, 'copia = ' + value, 'O valor é copiado, não vinculado.'),
          step(2, 'numero = ' + (value + 2), 'Somente numero mudou.'),
          step(3, 'numero = ' + (value + 2), 'Primeira saída.'),
          step(4, 'copia = ' + value, 'A cópia preserva o valor anterior.')],
        result: 'numero = ' + (value + 2) + '; copia = ' + value
      };
    case 'operators':
      return {
        title: 'Prioridade das operações',
        inputLabel: 'Valor de x', inputValue: String(value),
        source: ['x ← entrada', 'produto ← 3 * x', 'resultado ← 2 + produto', 'ESCREVER resultado'],
        steps: [step(0, 'x = ' + value, 'Leia a entrada.'),
          step(1, 'produto = ' + (3 * value), 'Faça a multiplicação primeiro.'),
          step(2, 'resultado = ' + (2 + 3 * value), 'Some dois ao produto.'),
          step(3, 'saída = ' + (2 + 3 * value), 'Exiba o resultado.')],
        result: String(2 + 3 * value)
      };
    case 'conditions': {
      const eligible = value >= 3 && value <= 4;
      return {
        title: 'Duas condições ao mesmo tempo',
        inputLabel: 'Quantidade', inputValue: String(value),
        source: ['quantidade ← entrada', 'SE quantidade >= 3 E quantidade <= 4', '    desconto ← 10', 'SENÃO', '    desconto ← 0', 'ESCREVER desconto'],
        steps: [step(0, 'quantidade = ' + value, 'Receba a quantidade.'),
          step(1, eligible ? 'verdadeiro E verdadeiro' : 'expressão = falso', 'O operador E exige duas condições verdadeiras.'),
          step(eligible ? 2 : 4, 'desconto = ' + (eligible ? 10 : 0), 'Execute um único caminho.'),
          step(5, 'saída = ' + (eligible ? '10%' : '0%'), 'Exiba o desconto.')],
        result: eligible ? '10%' : '0%'
      };
    }
    case 'loops': {
      let sum = 0;
      const steps: TraceStep[] = [step(0, 'soma = 0', 'Inicialize o acumulador.')];
      for (let i = 1; i <= value; i++) {
        sum += i;
        steps.push(step(2, 'i = ' + i + '; soma = ' + sum, 'Adicione ' + i + ' ao total.'));
      }
      steps.push(step(4, 'resultado = ' + sum, 'O laço terminou.'));
      return {
        title: 'Contador e acumulador', inputLabel: 'Repetições', inputValue: String(value),
        source: ['soma ← 0', 'PARA i DE 1 ATÉ n', '    soma ← soma + i', 'FIM PARA', 'ESCREVER soma'],
        steps, result: String(sum)
      };
    }
    case 'arrays': {
      const array = [4, 7, 2, 9, 5];
      let sum = 0;
      const steps: TraceStep[] = [step(0, 'valores = [4, 7, 2, 9, 5]', 'Uma lista armazena vários valores.')];
      for (let i = 0; i < value; i++) {
        sum += array[i];
        steps.push(step(2, 'índice = ' + i + '; soma = ' + sum, 'Leia o valor ' + array[i] + ' da posição ' + i + '.'));
      }
      steps.push(step(4, 'total = ' + sum, 'Finalize após percorrer ' + value + ' posições.'));
      return {
        title: 'Percorrendo um vetor', inputLabel: 'Itens a somar', inputValue: String(value),
        source: ['valores ← [4, 7, 2, 9, 5]', 'PARA indice DE 0 ATÉ n - 1', '    soma ← soma + valores[indice]', 'FIM PARA', 'ESCREVER soma'],
        steps, result: String(sum)
      };
    }
    case 'functions':
      return {
        title: 'Parâmetro e retorno', inputLabel: 'Argumento', inputValue: String(value),
        source: ['FUNÇÃO dobro(valor)', '    RETORNAR valor * 2', 'FIM FUNÇÃO', 'x ← dobro(n)', 'ESCREVER x'],
        steps: [step(3, 'chamada: dobro(' + value + ')', 'O argumento é passado à função.'),
          step(0, 'valor = ' + value, 'O parâmetro recebe uma cópia.'),
          step(1, 'retorno = ' + (value * 2), 'A função produz um resultado.'),
          step(4, 'x = ' + (value * 2), 'Quem chamou recebe o retorno.')],
        result: String(value * 2)
      };
    case 'debugging': {
      let sum = 0;
      const steps: TraceStep[] = [step(0, 'total = 0', 'Prepare o acumulador.')];
      for (let i = 1; i <= value; i++) {
        sum = repair ? sum + i : i;
        steps.push(step(2, 'i = ' + i + '; total = ' + sum,
          repair ? 'Acumulou ' + i + ' corretamente.' : 'Erro: substituiu o total em vez de somar.'));
      }
      steps.push(step(4, 'obtido = ' + sum + '; esperado = ' + (value * (value + 1) / 2),
        repair ? 'Resultado conferido.' : 'Compare obtido e esperado.'));
      return {
        title: 'Localize o defeito', inputLabel: 'Quantidade', inputValue: String(value),
        source: ['total ← 0', 'PARA i DE 1 ATÉ n', repair ? '    total ← total + i' : '    total ← i', 'FIM PARA', 'ESCREVER total'],
        steps, result: String(sum)
      };
    }
    case 'integrated': {
      const can = value <= 3;
      return {
        title: 'Verificação de estoque', inputLabel: 'Itens solicitados', inputValue: String(value),
        source: ['estoque ← 3', 'LER pedido', 'SE pedido <= estoque ENTÃO', '    estoque ← estoque - pedido', '    ESCREVER "Confirmado"', 'SENÃO', '    ESCREVER "Sem estoque"'],
        steps: [step(0, 'estoque = 3', 'Conheça o estoque disponível.'),
          step(1, 'pedido = ' + value, 'Receba a solicitação.'),
          step(2, 'pode atender? ' + (can ? 'sim' : 'não'), 'A decisão compara pedido e estoque.'),
          ...(can ? [step(3, 'estoque = ' + (3 - value), 'Atualize somente depois de validar.')] : []),
          step(can ? 4 : 6, can ? 'Confirmado' : 'Sem estoque', 'Emita uma resposta coerente.')],
        result: can ? 'Confirmado; restante: ' + (3 - value) : 'Sem estoque'
      };
    }
    case 'project': {
      const cost = value * 12;
      return {
        title: 'Protótipo: reserva de vagas', inputLabel: 'Vagas solicitadas', inputValue: String(value),
        source: ['vagas ← 4', 'LER pedido', 'SE pedido <= vagas ENTÃO', '    preço ← pedido * 12', '    ESCREVER preço', 'SENÃO', '    ESCREVER "Indisponível"'],
        steps: [step(0, 'vagas = 4', 'Estado inicial do sistema.'),
          step(1, 'pedido = ' + value, 'Receba a entrada do usuário.'),
          step(2, value <= 4 ? 'disponível' : 'indisponível', 'Valide o limite de vagas.'),
          ...(value <= 4 ? [step(3, 'preço = ' + cost, 'Calcule o total.'), step(4, 'R$ ' + cost + ',00', 'Mostre a confirmação.')] :
            [step(6, 'Indisponível', 'Mostre a rejeição, sem cobrar.')])],
        result: value <= 4 ? 'Reserva: R$ ' + cost + ',00' : 'Indisponível'
      };
    }
  }
}

function ignore(event: SyntheticEvent) { event.stopPropagation(); }
function ignoreKey(event: KeyboardEvent) { event.stopPropagation(); }

export function AlgorithmLab({ slide }: { slide: LabSlide }) {
  const [value, setValue] = useState(3);
  const [index, setIndex] = useState(0);
  const [repair, setRepair] = useState(false);
  const trace = useMemo(() => buildAlgorithmTrace(slide.scenario, value, repair), [slide.scenario, value, repair]);
  const current = trace.steps[index - 1];
  const done = index === trace.steps.length;

  function changeInput(next: number) {
    setValue(next);
    setIndex(0);
  }
  return (
    <section className="algorithm-lab" aria-label={'Laboratório interativo: ' + trace.title}
      onPointerDown={ignore} onPointerUp={ignore} onClick={ignore} onKeyDown={ignoreKey}>
      <div className="algorithm-simulation">
        <div className="algorithm-label">EXECUÇÃO VISUAL</div>
        <div className="algorithm-machine" aria-hidden="true">
          <div className="algorithm-machine-input"><small>ENTRADA</small><b>{trace.inputValue}</b></div>
          <span className="algorithm-machine-arrow">→</span>
          <div className={'algorithm-machine-unit' + (index ? ' is-running' : '')}>
            <Settings className="algorithm-machine-gear" aria-hidden="true" />
            <small>ALGORITMO</small>
          </div>
          <span className="algorithm-machine-arrow">→</span>
          <div className={'algorithm-machine-output' + (done ? ' is-complete' : '')}>
            <small>SAÍDA</small><b>{done ? trace.result : '?'}</b>
          </div>
        </div>
        <div className="algorithm-progress" aria-label={index + ' de ' + trace.steps.length + ' instruções executadas'}>
          <progress value={index} max={trace.steps.length} />
          <span>{index} de {trace.steps.length} etapas</span>
        </div>
        <div className="algorithm-result" role="status" aria-live="polite">
          <strong>{current?.state ?? 'Pronto para executar'}</strong>
          <span>{current?.message ?? 'Selecione uma entrada e avance.'}</span>
        </div>
      </div>
      <div className="algorithm-controls">
        <strong className="algorithm-heading">{trace.title}</strong>
        <label className="algorithm-input-label" htmlFor={'algorithm-input-' + slide.id}>{trace.inputLabel}</label>
        <div className="algorithm-input-row">
          <select id={'algorithm-input-' + slide.id} value={value} onChange={event => changeInput(Number(event.target.value))}>
            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          {slide.scenario === 'debugging' && (
            <label className="algorithm-repair"><input type="checkbox" checked={repair}
              onChange={event => { setRepair(event.target.checked); setIndex(0); }} />
              Corrigir o erro</label>
          )}
        </div>
        <span className="algorithm-code-label">PSEUDOCÓDIGO · LEITURA</span>
        <pre className="algorithm-code"><code>
          {trace.source.map((line, lineNo) => (
            <span key={lineNo} className={current?.line === lineNo ? 'is-highlighted' : ''}>{line}</span>
          ))}
        </code></pre>
        <div className="algorithm-buttons">
          <button type="button" disabled={done}
            onClick={() => setIndex(previous => Math.min(trace.steps.length, previous + 1))}>
            {done ? <CheckCircle2 size={17}/> : <ArrowRight size={17}/>}
            {done ? 'Concluído' : 'Executar passo'}
          </button>
          <button type="button" className="is-secondary" onClick={() => setIndex(0)}>
            <RotateCcw size={16}/> Reiniciar
          </button>
        </div>
      </div>
    </section>
  );
}
