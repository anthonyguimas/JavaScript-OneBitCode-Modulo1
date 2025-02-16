const name = prompt("Qual é o seu nome?");
const lastName = prompt("Qual é o seu sobrenome?");
const study = prompt("Qual é o seu campo de estudo?");
let yearOfBirth = prompt("Em qual ano você nasceu?");

yearOfBirth = 2025 - yearOfBirth;

alert(
  "\nNome Completo: " +
    name +
    " " +
    lastName +
    "\nCampo de Estudo: " +
    study +
    "\nIdade: " +
    yearOfBirth
);
