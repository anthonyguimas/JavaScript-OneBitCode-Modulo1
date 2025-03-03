const touristName = prompt("Qual é o seu nome?");

let cities = "";

let contagem = 0;

let visit = prompt("Você já visitou alguma cidade? (Sim/Não)");

while (visit == "Sim") {
  let city = prompt("Qual é o nome da cidade visitada?");
  cities += " - " + city + "\n";
  contagem++;
  visit = prompt("Você já visitou alguma cidade? (Sim/Não)");
}

alert(
  "Turista: " +
    touristName +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas:\n" +
    cities
);
