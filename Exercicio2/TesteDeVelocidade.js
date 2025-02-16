const carOne = prompt("Qual é o nome do primeiro veículo?");
const velocityOne = parseFloat(
  prompt("Qual é a velocidade do primeiro veículo?")
);

const carTwo = prompt("Qual é o nome do segundo veículo?");
const velocityTwo = parseFloat(
  prompt("Qual é a velocidade do segundo veículo?")
);

if (velocityOne > velocityTwo) {
  alert(`${carOne}: É mais rápido que o ${carTwo}`);
} else if (velocityTwo > velocityOne) {
  alert(`${carTwo}: É mais rápido que o ${carOne}`);
} else {
  alert("As velocidades dos dois veículos são iguais");
}
