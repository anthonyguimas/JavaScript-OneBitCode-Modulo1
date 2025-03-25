const letters = [];

function showCards() {
  let cardsList = "A quantidade de cartas que você possui é:\n";
  for (let i = 0; i < letters.length; i++) {
    cardsList += `${i + 1} - ${letters[i]}\n`;
  }
  return cardsList;
}

function cardsQueue() {
  let cardOption = "";
  do {
    const cardsList = showCards();

    cardOption = prompt(
      cardsList +
        "\nO que você deseja?\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3- Sair"
    );

    switch (cardOption) {
      case "1":
        const newCard = prompt(
          "Qual é o nome da carta de você quer adicionar?"
        );
        if (newCard) {
          letters.unshift(newCard);
        }
        break;

      case "2":
        const pushCard = letters.shift();
        if (letters.length > 0) {
          alert(`A carta retirada foi ${pushCard}`);
        } else {
          alert("Não há cartas para serem retiradas.");
        }
        break;
      case "3":
        alert("Encerrando o programa.");
        return;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (cardOption !== "3");
}

cardsQueue();
