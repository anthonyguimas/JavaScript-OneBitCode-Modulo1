function propertyRegistration() {
  let propertyOption = "";
  let properties = [];
  do {
    propertyOption = prompt(
      "Total de imóveis: " +
        properties.length +
        "\nO que você deseja?\n1 - Salvar um novo imóvel\n2 - Imóveis salvos\n3 - Sair"
    );

    switch (propertyOption) {
      case "1":
        const registerProperty = {};

        registerProperty.owner = prompt("Qual é o seu nome?");
        registerProperty.rooms = parseFloat(prompt("Quantidade de quartos"));
        registerProperty.bathrooms = parseFloat(
          prompt("Quantidade de banheiros")
        );
        registerProperty.garage = prompt("Possui garagem?");

        const confirmation = confirm(
          "Salvar este imóvel?\n" +
            "\nProprietário " +
            registerProperty.owner +
            "\nQuartos: " +
            registerProperty.rooms +
            "\nBanheiros: " +
            registerProperty.bathrooms +
            "\nPossui Garagem? " +
            registerProperty.garage
        );

        if (confirmation) {
          properties.push(registerProperty);
        }
        break;
      case "2":
        for (let i = 0; i < properties.length; i++) {
          alert(
            "Imóvel: " +
              (i + 1) +
              "\nProprietário: " +
              properties[i].owner +
              "\nQuartos: " +
              properties[i].rooms +
              "\nBanheiros: " +
              properties[i].bathrooms +
              "\nPossui Garagem? " +
              properties[i].garage
          );
        }
        break;
      case "3":
        alert("Encerrando o cadastro de imóveis!");
        break;
      default:
        alert("Opção Inválida. Tente novamente.");
        break;
    }
  } while (propertyOption !== "3");
}

propertyRegistration();
