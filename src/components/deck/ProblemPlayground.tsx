import { useState, type KeyboardEvent, type ReactNode, type SyntheticEvent } from 'react';
import { ArrowDown, ArrowUp, BookOpen, Check, ClipboardList, Play, RotateCcw, Search } from 'lucide-react';
import type { Slide } from '../../types/course';
import './ProblemPlayground.css';

type ProblemSlide = Extract<Slide, { kind: 'problem-playground' }>;
type Task = { id: string; label: string; necessary: boolean };

const taskOptions: Task[] = [
  { id: 'identify', label: 'Identificar o estudante', necessary: true },
  { id: 'search', label: 'Localizar o livro solicitado', necessary: true },
  { id: 'check', label: 'Verificar disponibilidade', necessary: true },
  { id: 'register', label: 'Registrar o empréstimo', necessary: true },
  { id: 'advertise', label: 'Enviar propaganda da biblioteca', necessary: false },
  { id: 'theme', label: 'Alterar as cores do sistema', necessary: false }
];
const essential = taskOptions.filter(task => task.necessary).map(task => task.id);

const orderSteps = [
  { id: 1, label: 'Selecionar o livro', description: 'Saber qual título será emprestado.' },
  { id: 2, label: 'Verificar se está disponível', description: 'Impedir empréstimo de um exemplar indisponível.' },
  { id: 3, label: 'Registrar o empréstimo', description: 'Associar o livro ao estudante.' },
  { id: 4, label: 'Confirmar ao estudante', description: 'Entregar a resposta depois do registro.' }
] as const;

function StopEvents({ children }: { children: ReactNode }) {
  const isolate = (event: SyntheticEvent) => event.stopPropagation();
  const stopKeys = (event: KeyboardEvent) => event.stopPropagation();
  return (
    <section className="problem-interaction" data-deck-interactive="true"
      onPointerDown={isolate} onPointerUp={isolate} onClick={isolate} onKeyDown={stopKeys}>
      {children}
    </section>
  );
}

function Scene({ heading, children, status }: { heading: string; children: ReactNode; status: string }) {
  return (
    <div className="problem-scene">
      <div className="problem-scene-label"><BookOpen size={18} aria-hidden="true" /><span>{heading}</span></div>
      <div className="problem-scene-art">{children}</div>
      <p className="problem-scene-status" role="status" aria-live="polite">{status}</p>
    </div>
  );
}

function DecomposeDemo() {
  const [chosen, setChosen] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const toggle = (id: string) => {
    setChecked(false);
    setChosen(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id]);
  };
  const correct = essential.every(id => chosen.includes(id)) && chosen.length === essential.length;
  return (
    <StopEvents>
      <div className="problem-layout">
        <Scene heading="Problema: empréstimo de livros"
          status={!checked ? 'Divida o problema em tarefas menores.' : correct ? 'Boa decomposição: quatro tarefas essenciais identificadas.' : 'Revise: faltam tarefas essenciais ou há ações fora do objetivo.'}>
          <div className="problem-book-illustration" aria-hidden="true">
            <div className="problem-books"><span/><span/><span/></div>
            <div className="problem-reader"><Search size={34}/><span>?</span></div>
          </div>
          <div className="problem-pipeline" aria-label="Tarefas selecionadas">
            {essential.map((id, i) => (
              <div key={id} className={'problem-node' + (chosen.includes(id) ? ' is-complete' : '')}>
                <span>{i + 1}</span>{chosen.includes(id) ? <Check size={19}/> : '?'}
              </div>
            ))}
          </div>
        </Scene>
        <div className="problem-control">
          <strong>O que realmente precisamos resolver?</strong>
          <p>Selecione somente as tarefas necessárias para emprestar um livro a um estudante.</p>
          <div className="problem-tasks" role="group" aria-label="Tarefas candidatas">
            {taskOptions.map(task => (
              <button key={task.id} type="button"
                aria-pressed={chosen.includes(task.id)}
                className={'problem-task' + (chosen.includes(task.id) ? ' is-chosen' : '')}
                onClick={() => toggle(task.id)}>
                <span className="problem-task-checkbox">{chosen.includes(task.id) ? <Check size={17}/> : null}</span>
                {task.label}
              </button>
            ))}
          </div>
          <div className="problem-actions">
            <button type="button" onClick={() => setChecked(true)}>Conferir seleção</button>
            <button className="is-secondary" type="button" onClick={() => { setChosen([]); setChecked(false); }}><RotateCcw size={16}/> Reiniciar</button>
          </div>
          {checked && <p className={correct ? 'problem-ok' : 'problem-tip'}>
            {correct ? 'Concluído: você definiu o escopo essencial.' : 'Dica: pense no objetivo principal, não em funcionalidades extras.'}
          </p>}
        </div>
      </div>
    </StopEvents>
  );
}

function OrderDemo() {
  const [steps, setSteps] = useState([4, 2, 1, 3]);
  const [checked, setChecked] = useState(false);
  const correct = steps.every((id, i) => id === i + 1);
  const move = (index: number, delta: number) => {
    const to = index + delta;
    if (to < 0 || to >= steps.length) return;
    setSteps(previous => {
      const result = [...previous];
      [result[index], result[to]] = [result[to], result[index]];
      return result;
    });
    setChecked(false);
  };
  return (
    <StopEvents>
      <div className="problem-layout">
        <Scene heading="Fluxo de empréstimo"
          status={!checked ? 'Organize as etapas da primeira até a última.' : correct ? 'Sequência validada: agora a confirmação vem depois do registro.' : 'A sequência ainda contém uma dependência fora de ordem.'}>
          <div className="problem-ordered-preview" aria-label="Fluxo organizado">
            {steps.map((id, index) => {
              const step = orderSteps.find(item => item.id === id)!;
              return <div className={'problem-preview-step' + (checked && correct ? ' is-complete' : '')} key={id}>
                <span>{index + 1}</span><strong>{step.label}</strong>
              </div>;
            })}
          </div>
        </Scene>
        <div className="problem-control">
          <strong>Coloque as instruções em ordem</strong>
          <p>Use as setas para mover cada instrução. Verifique se uma etapa depende da anterior.</p>
          <ol className="problem-sort">
            {steps.map((id, index) => {
              const step = orderSteps.find(item => item.id === id)!;
              return <li key={id}>
                <span className="problem-sort-number">{index + 1}</span>
                <span className="problem-sort-label">{step.label}</span>
                <div className="problem-move">
                  <button type="button" disabled={index === 0} aria-label={'Mover ' + step.label + ' para cima'} onClick={() => move(index, -1)}><ArrowUp size={17}/></button>
                  <button type="button" disabled={index === steps.length - 1} aria-label={'Mover ' + step.label + ' para baixo'} onClick={() => move(index, 1)}><ArrowDown size={17}/></button>
                </div>
              </li>;
            })}
          </ol>
          <div className="problem-actions">
            <button type="button" onClick={() => setChecked(true)}>Validar algoritmo</button>
            <button type="button" className="is-secondary" onClick={() => {setSteps([4, 2, 1, 3]); setChecked(false);}}><RotateCcw size={16}/> Reiniciar</button>
          </div>
          {checked && <p className={correct ? 'problem-ok' : 'problem-tip'}>
            {correct ? 'A ordem está correta.' : 'Dica: selecionar → verificar → registrar → confirmar.'}
          </p>}
        </div>
      </div>
    </StopEvents>
  );
}

function TraceDemo() {
  const UNIT_PRICE = 8;
  const [quantity, setQuantity] = useState(2);
  const [output, setOutput] = useState<{ quantity: number; total: number } | null>(null);
  const setInput = (value: number) => { setQuantity(value); setOutput(null); };
  return (
    <StopEvents>
      <div className="problem-layout">
        <Scene heading="Problema: calcular uma compra"
          status={output ? output.quantity + ' caderno(s) × R$ 8 = R$ ' + output.total + ',00' : 'Defina a entrada e execute o algoritmo.'}>
          <div className="problem-notebooks" aria-label={quantity + ' cadernos para a compra'} role="img">
            {Array.from({ length: quantity }, (_, i) => <div className="problem-notebook" key={i}><ClipboardList size={30}/></div>)}
          </div>
          <div className="problem-dataflow">
            <div><small>ENTRADA</small><strong>{quantity} caderno(s)</strong></div>
            <span aria-hidden="true">→</span>
            <div><small>PROCESSAMENTO</small><strong>{output ? quantity + ' × 8' : '?'}</strong></div>
            <span aria-hidden="true">→</span>
            <div className={output ? 'is-complete' : ''}><small>SAÍDA</small><strong>{output ? 'R$ ' + output.total + ',00' : '?'}</strong></div>
          </div>
        </Scene>
        <div className="problem-control">
          <strong>Teste de mesa: entrada → saída</strong>
          <p>Cada caderno custa R$ 8,00. Escolha uma quantidade e execute o cálculo.</p>
          <label className="problem-quantity-label" htmlFor="problem-quantity">Quantidade de cadernos</label>
          <div className="problem-quantity">
            <button type="button" aria-label="Diminuir quantidade" disabled={quantity <= 1} onClick={() => setInput(Math.max(1, quantity - 1))}>−</button>
            <output id="problem-quantity">{quantity}</output>
            <button type="button" aria-label="Aumentar quantidade" disabled={quantity >= 5} onClick={() => setInput(Math.min(5, quantity + 1))}>+</button>
          </div>
          <div className="problem-pseudocode">
            <div>preço_unitário ← 8</div>
            <div>quantidade ← {quantity}</div>
            <div className={output ? 'is-highlighted' : ''}>total ← quantidade × preço_unitário</div>
            <div className={output ? 'is-highlighted' : ''}>mostrar(total)</div>
          </div>
          <div className="problem-actions">
            <button type="button" onClick={() => setOutput({ quantity, total: quantity * UNIT_PRICE })}><Play size={17}/> Executar</button>
            <button type="button" className="is-secondary" onClick={() => {setQuantity(2); setOutput(null);}}><RotateCcw size={16}/> Reiniciar</button>
          </div>
          <p className="problem-tip">Experimente 1, 3 e 5 cadernos: a mesma sequência funciona com entradas distintas.</p>
        </div>
      </div>
    </StopEvents>
  );
}

export function ProblemPlayground({ slide }: { slide: ProblemSlide }) {
  if (slide.scenario === 'decompose') return <DecomposeDemo />;
  if (slide.scenario === 'order') return <OrderDemo />;
  return <TraceDemo />;
}
