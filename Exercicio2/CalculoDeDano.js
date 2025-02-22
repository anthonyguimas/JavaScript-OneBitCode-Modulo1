const attackerName = prompt("Digite o nome do personagem atacante");
const attackPower = parseFloat(prompt("Digite o seu poder de ataque"));

const defenserName = prompt("Digite o nome do personagem defensor");
let hitPoint = parseInt(prompt("Quantos pontos de vida você possui?"));
const defensePower = parseFloat(
  prompt("Quantos pontos de defesa você possui?")
);
const defenserShield = prompt("Você possui um escudo? (Sim/Não)");

let hitAttack = 0;
//
if (attackPower > defensePower && defenserShield === "Não") {
  hitAttack = attackPower - defensePower;
}

if (attackPower > defensePower && defenserShield === "Sim") {
  hitAttack = (attackPower - defensePower) / 2;
}

hitPoint -= hitAttack;

alert(`${attackerName} causou ${hitAttack} de poder de ataque ${defenserName}`);

alert(
  `${attackerName}: Poder de ataque ${attackPower}\n${defenserName}: Pontos de Vida: ${hitPoint} \nPoder de defesa: ${defensePower} \nPossui escudo ${defenserShield}`
);
