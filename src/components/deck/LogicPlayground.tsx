import { useId, useState, type KeyboardEvent, type SyntheticEvent } from 'react';
import { ArrowRight, RotateCcw, Minus, Plus, Play } from 'lucide-react';
import type { Slide } from '../../types/course';
import './LogicPlayground.css';

type LogicSlide = Extract<Slide, { kind: 'logic-playground' }>;

function isolate(event: SyntheticEvent) {
  event.stopPropagation();
}

function isolateKeyboard(event: KeyboardEvent) {
  event.stopPropagation();
}

function Fox({ active = false }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 150 166" role="img" aria-label="Personagem raposa que acompanha a demonstração" className={'logic-fox' + (active ? ' is-active' : '')}>
      <path d="M30 106Q12 127 22 160H128Q138 120 120 106Z" fill="#F49148" />
      <path d="M24 66L29 7L58 38Q75 32 92 38L121 7L126 66Q135 116 75 125Q15 116 24 66Z" fill="#F9A45B" stroke="#C86E30" strokeWidth="3" />
      <path d="M29 9L33 45L53 39Z M121 9L117 45L97 39Z" fill="#F9DAC0" />
      <ellipse cx="52" cy="76" rx="5" ry="7" fill="#23314A" /><ellipse cx="98" cy="76" rx="5" ry="7" fill="#23314A" />
      <path d="M40 95Q75 128 110 95L97 118Q75 135 53 118Z" fill="#FFF1DB" />
      <path d="M67 96Q75 91 83 96L75 105Z" fill="#3F3335" />
      <path d="M75 105Q75 112 67 112" stroke="#3F3335" strokeWidth="2" fill="none" />
    </svg>
  );
}

function Owl() {
  return (
    <svg viewBox="0 0 150 166" role="img" aria-label="Coruja azul, personagem assistente" className="logic-owl">
      <path d="M25 108Q6 132 27 160H123Q145 132 125 108Z" fill="#3779D5" />
      <path d="M20 63Q12 13 34 23L57 41Q75 33 93 41L116 23Q138 13 130 63L119 118Q75 142 31 118Z" fill="#85BEF3" stroke="#307AC7" strokeWidth="3" />
      <circle cx="52" cy="79" r="21" fill="#FFF" /><circle cx="98" cy="79" r="21" fill="#FFF" />
      <circle cx="55" cy="79" r="8" fill="#284363" /><circle cx="95" cy="79" r="8" fill="#284363" />
      <path d="M65 104L75 115L85 104Z" fill="#F2B348" />
      <path d="M32 47L49 36L61 47M89 47L101 36L118 47" stroke="#307AC7" strokeWidth="4" fill="none" />
    </svg>
  );
}

const sandwichSteps = [
  { action: 'Separar duas fatias de pão', line: '1. Separe o pão', result: 'Pão separado' },
  { action: 'Adicionar o recheio', line: '2. Coloque o recheio', result: 'Recheio adicionado' },
  { action: 'Fechar o sanduíche', line: '3. Feche o sanduíche', result: 'Sanduíche pronto' }
] as const;

function SequenceDemo() {
  const [step, setStep] = useState(0);
  const current = sandwichSteps[step - 1];
  return (
    <div className="logic-playground">
      <div className="logic-scene">
        <div className="logic-scene-heading"><span>Missão: preparar um lanche</span><span>{step}/3 etapas</span></div>
        <div className="logic-characters"><Fox active={step > 0}/><Owl /></div>
        <div className="logic-sandwich" role="img" aria-label={'Sanduíche com ' + step + ' etapas realizadas'}>
          {step >= 1 && <div className="logic-bread logic-bread-bottom" />}
          {step >= 2 && <><div className="logic-lettuce" /><div className="logic-cheese" /></>}
          {step >= 3 && <div className="logic-bread logic-bread-top" />}
          {step === 0 && <span className="logic-empty">Aguardando instruções</span>}
        </div>
        <p className="logic-scene-caption" aria-live="polite">{current?.result ?? 'Clique em Executar passo para começar.'}</p>
      </div>
      <div className="logic-panel">
        <span className="logic-action-label">SUA VEZ · CLIQUE NO BOTÃO</span>
        <strong>Execute um passo por vez</strong>
        <p>Use o botão <b>Executar passo</b>. A lista abaixo apenas mostra as instruções.</p>
        <span className="logic-readonly-label">ROTEIRO · SOMENTE LEITURA</span>
        <ol className="logic-steps">
          {sandwichSteps.map((item, index) => (
            <li key={item.line} className={step > index ? 'is-complete' : step === index ? 'is-current' : ''}>
              <span aria-hidden="true">{step > index ? "✓" : index + 1}</span>{item.line}
            </li>
          ))}
        </ol>
        <div className="logic-actions">
          <button type="button" disabled={step >= 3} onClick={() => setStep(value => Math.min(3, value + 1))}><Play size={17}/> Executar passo</button>
          <button type="button" className="logic-secondary" onClick={() => setStep(0)}><RotateCcw size={16}/> Reiniciar</button>
        </div>
        {step === 3 && <p className="logic-success" role="status">Concluído: a ordem das instruções produziu o resultado.</p>}
      </div>
    </div>
  );
}

function Umbrella() {
  const gradientId = useId();
  return (
    <svg className="logic-umbrella" viewBox="0 0 190 190" role="img" aria-label="Guarda-chuva azul aberto sobre a raposa">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6db7fa" />
          <stop offset="100%" stopColor="#1458ae" />
        </linearGradient>
      </defs>
      <path d="M96 13V9" stroke="#16395f" strokeWidth="5" strokeLinecap="round" />
      <path d="M12 83Q28 20 96 16Q163 20 180 83Q161 68 143 83Q125 68 108 83Q91 68 74 83Q57 68 38 83Q24 71 12 83Z" fill={`url(#${gradientId})`} stroke="#194c8c" strokeWidth="4" strokeLinejoin="round" />
      <path d="M96 18Q70 43 74 83M96 18Q122 43 108 83" stroke="#d4edff" strokeWidth="2.5" opacity=".8" fill="none" />
      <path d="M96 83V162Q96 180 109 180Q122 180 122 168" stroke="#2c4a65" strokeWidth="5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function DecisionDemo() {
  const [raining, setRaining] = useState(true);
  const [result, setResult] = useState<boolean | null>(null);
  const choose = (value: boolean) => { setRaining(value); setResult(null); };
  return (
    <div className="logic-playground">
      <div className="logic-scene">
        <div className="logic-scene-heading"><span>Missão: sair de casa</span><span>SE / SENÃO</span></div>
        <div className="logic-weather" aria-label={raining ? 'Céu com chuva' : 'Céu ensolarado'} role="img">
          {raining ? <><span className="logic-cloud" /><span className="logic-rain">╱ ╱ ╱ ╱</span></> : <span className="logic-sun" />}
        </div>
        <div className="logic-characters"><div className="logic-fox-rain-wrap"><Fox active={result !== null}/>{result === true && <Umbrella />}</div><Owl /></div>
        <p className="logic-scene-caption" aria-live="polite">
          {result === null ? 'Observe o clima e execute a condição.' : result ? 'Está chovendo: leve o guarda-chuva.' : 'Não está chovendo: pode sair sem guarda-chuva.'}
        </p>
      </div>
      <div className="logic-panel">
        <span className="logic-action-label">SUA VEZ · SELECIONE E EXECUTE</span>
        <strong>Teste uma condição</strong>
        <p><b>1.</b> Selecione um clima nos botões. <b>2.</b> Clique em Executar decisão.</p>
        <div role="group" aria-label="Condição do tempo" className="logic-options">
          <button type="button" aria-pressed={raining} className={raining ? 'is-selected' : ''} onClick={() => choose(true)}>Chovendo</button>
          <button type="button" aria-pressed={!raining} className={!raining ? 'is-selected' : ''} onClick={() => choose(false)}>Sem chuva</button>
        </div>
        <span className="logic-readonly-label">CÓDIGO · SOMENTE LEITURA</span>
        <div className="logic-code" aria-label="Pseudocódigo de decisão, apenas para leitura">
          <div>SE (chovendo) ENTÃO</div>
          <div className={result === true ? 'is-running' : ''}>　levar guarda-chuva</div>
          <div>SENÃO</div>
          <div className={result === false ? 'is-running' : ''}>　sair sem guarda-chuva</div>
          <div>FIM SE</div>
        </div>
        <div className="logic-actions">
          <button type="button" onClick={() => setResult(raining)}><Play size={17}/> Executar decisão</button>
          <button type="button" className="logic-secondary" onClick={() => { setRaining(true); setResult(null); }}><RotateCcw size={16}/> Reiniciar</button>
        </div>
      </div>
    </div>
  );
}

function LoopDemo() {
  const [quantity, setQuantity] = useState(3);
  const [watered, setWatered] = useState(0);
  const change = (value: number) => { setQuantity(value); setWatered(0); };
  return (
    <div className="logic-playground">
      <div className="logic-scene">
        <div className="logic-scene-heading"><span>Missão: regar o jardim</span><span>{watered}/{quantity} plantas</span></div>
        <div className="logic-characters"><Fox active={watered > 0}/><Owl /></div>
        <div className="logic-garden" role="img" aria-label={watered + ' de ' + quantity + ' plantas regadas'}>
          {Array.from({ length: quantity }, (_, i) => (
            <div className={'logic-plant' + (i < watered ? ' is-watered' : '')} key={i}>
              <span className="logic-flower">✿</span><span className="logic-stem"/><span className="logic-pot" />
            </div>
          ))}
        </div>
        <p className="logic-scene-caption" aria-live="polite">{watered === quantity ? 'Todas as plantas foram regadas!' : watered === 0 ? 'Uma ação repetida para várias plantas.' : 'Regamos a planta ' + watered + '. Continue.'}</p>
      </div>
      <div className="logic-panel">
        <span className="logic-action-label">SUA VEZ · AJUSTE E EXECUTE</span>
        <strong>Quantas repetições?</strong>
        <p><b>1.</b> Ajuste a quantidade usando + e −. <b>2.</b> Clique em Próxima repetição.</p>
        <div className="logic-quantity" role="group" aria-label="Quantidade de plantas">
          <button type="button" onClick={() => change(Math.max(1, quantity - 1))} disabled={quantity <= 1} aria-label="Diminuir quantidade"><Minus size={18}/></button>
          <output>{quantity} plantas</output>
          <button type="button" onClick={() => change(Math.min(5, quantity + 1))} disabled={quantity >= 5} aria-label="Aumentar quantidade"><Plus size={18}/></button>
        </div>
        <span className="logic-readonly-label">CÓDIGO · SOMENTE LEITURA</span>
        <div className="logic-code" aria-label="Pseudocódigo de repetição, apenas para leitura">
          <div>PARA planta DE 1 ATÉ {quantity}</div>
          <div className={watered > 0 ? 'is-running' : ''}>　regar(planta)</div>
          <div>FIM PARA</div>
        </div>
        <div className="logic-actions">
          <button type="button" disabled={watered >= quantity} onClick={() => setWatered(value => Math.min(quantity, value + 1))}><ArrowRight size={17}/> Próxima repetição</button>
          <button type="button" className="logic-secondary" onClick={() => setWatered(0)}><RotateCcw size={16}/> Reiniciar</button>
        </div>
      </div>
    </div>
  );
}

/** Simulações executadas no navegador, sem reprodução de vídeo ou áudio. */
export function LogicPlayground({ slide }: { slide: LogicSlide }) {
  return (
    <div data-deck-interactive="true" onPointerDown={isolate} onPointerUp={isolate} onClick={isolate} onKeyDown={isolateKeyboard} className="logic-interaction-root">
      {slide.scenario === 'sequence' ? <SequenceDemo/> : slide.scenario === 'decision' ? <DecisionDemo/> : <LoopDemo/>}
    </div>
  );
}
