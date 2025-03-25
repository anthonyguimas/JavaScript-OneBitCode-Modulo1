const patients = [];

function showQueue() {
  let patientsList = "Fila de Espera:\n";
  for (let i = 0; i < patients.length; i++) {
    patientsList += `${i + 1}º ${patients[i]}\n`;
  }
  return patientsList;
}

function medicalQueue() {
  let option = "";
  do {
    const patientsList = showQueue();

    option = prompt(
      patientsList +
        "\nO que você deseja?\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
    );

    switch (option) {
      case "1":
        const newPatient = prompt("Escreva o nome do paciente");
        if (newPatient) {
          patients.push(newPatient);
        }
        break;

      case "2":
        if (patients.length > 0) {
          const calledPatient = patients.shift();
          alert(`Paciente ${calledPatient} foi chamado para consulta.`);
        } else {
          alert("Não há paciente na fila.");
        }
        break;
      case "3":
        alert("Encerrando o programa.");
        return;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (option !== "3");
}

medicalQueue();
