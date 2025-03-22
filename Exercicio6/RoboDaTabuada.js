const number = parseFloat(
  prompt("Digite um número que você deseja calcular a tabuada")
);

let result = "";

for (let factor = 1; factor < 20; factor++) {
  result += " -> " + number + " x " + factor + " = " + number * factor + "\n";
}

alert("O Resultado da tabuada é de" + number + ":\n\n" + result);
