export type TruthOperator = 'and' | 'or' | 'not';
export type TruthRow = { a: boolean; b?: boolean; output: boolean };

export const TRUTH_OPERATORS: Readonly<Record<TruthOperator, { label: string; expression: string; rule: string }>> = {
  and: {
    label: 'E',
    expression: 'A E B',
    rule: 'E (conjunção): o resultado é verdadeiro somente quando A e B são verdadeiros.'
  },
  or: {
    label: 'OU',
    expression: 'A OU B',
    rule: 'OU (disjunção inclusiva): basta A ou B ser verdadeiro; ambos verdadeiros também resultam em verdadeiro.'
  },
  not: {
    label: 'NÃO',
    expression: 'NÃO A',
    rule: 'NÃO (negação): trabalha com apenas uma condição e inverte seu valor lógico.'
  }
};

export function evaluateTruth(operator: TruthOperator, a: boolean, b = false): boolean {
  switch (operator) {
    case 'and': return a && b;
    case 'or': return a || b;
    case 'not': return !a;
  }
}

/** Enumerate every possible input; NOT is unary, so it has exactly two rows. */
export function getTruthRows(operator: TruthOperator): TruthRow[] {
  if (operator === 'not') {
    return [false, true].map(a => ({ a, output: evaluateTruth(operator, a) }));
  }
  return ([false, true] as const).flatMap(a =>
    ([false, true] as const).map(b => ({ a, b, output: evaluateTruth(operator, a, b) }))
  );
}

export function explainTruth(operator: TruthOperator, a: boolean, b = false): string {
  if (operator === 'not') {
    return a
      ? 'A é verdadeiro. NÃO A inverte essa condição e produz falso.'
      : 'A é falso. NÃO A inverte essa condição e produz verdadeiro.';
  }
  if (operator === 'and') {
    if (a && b) return 'A e B são verdadeiros. Como as duas condições foram satisfeitas, A E B é verdadeiro.';
    if (!a && !b) return 'A e B são falsos. Nenhuma condição foi satisfeita; A E B é falso.';
    return 'Somente uma condição é verdadeira. O operador E exige as duas, portanto o resultado é falso.';
  }
  if (!a && !b) return 'A e B são falsos. Como nenhuma condição é verdadeira, A OU B é falso.';
  if (a && b) return 'A e B são verdadeiros. O OU inclusivo aceita que ambas sejam verdadeiras, então o resultado é verdadeiro.';
  return 'Uma das condições é verdadeira. Isso já é suficiente para A OU B ser verdadeiro.';
}

export const truthLabel = (value: boolean) => value ? 'Verdadeiro' : 'Falso';
