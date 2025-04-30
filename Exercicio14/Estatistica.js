const mediaAritmetica = (...n) => {
  if (n.length === 0) {
    return "Nenhum valor fornecido para calcular a média";
  }

  const soma = n.reduce((total, n) => total + n, 0);

  const media = soma / n.length;

  return `A média aritmética dos valores ${n.join(", ")} é: ${media.toFixed(
    2
  )}`;
};

console.log(mediaAritmetica(5, 5, 4, 3, 2));
