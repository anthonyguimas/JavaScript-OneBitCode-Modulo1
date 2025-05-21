const mediaAritmeticaSimples = (...n) => {
  if (n.length === 0) {
    return "Nenhum valor fornecido para calcular a média";
  }

  const soma = n.reduce((total, n) => total + n, 0);

  const media = soma / n.length;

  return `A média aritmética simples dos valores ${n.join(
    ", "
  )} é: ${media.toFixed(2)}`;
};

console.log(mediaAritmeticaSimples(5, 5, 4, 3, 2));

const mediaPonderada = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weigth }) => accum + number * weigth,
    0
  );

  const weigthSum = entries.reduce((accum, entry) => accum + entry.weigth, 0);

  const media = sum / weigthSum;

  return `Média Ponderada: ${media}`;
};

console.log(
  mediaPonderada(
    {
      number: 9,
      weigth: 3,
    },
    {
      number: 7,
      weigth: 1,
    },
    {
      number: 10,
      weigth: 1,
    }
  )
);

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  // 1, 2, 4, 5, 6, 9 ->
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];

  return mediaAritmeticaSimples(firstMedian, secondMedian);
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);

  return quantities[0][0];
};

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);
