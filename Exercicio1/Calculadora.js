let firstValue = parseFloat(prompt("Digite o primeiro valor"));
let secondValue = parseFloat(prompt("Digite o segundo valor"));

const sum = firstValue + secondValue;
const less = firstValue - secondValue;
const multiplication = firstValue * secondValue;
const division = firstValue / secondValue;

alert(
  "Resultados:\n" +
    "\nSoma: " +
    sum +
    "\nSubtração: " +
    less +
    "\nMultiplicação: " +
    multiplication +
    "\nDivisão: " +
    division
);
