const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const nascimento = "27/07/2004";

function dataDeNascimento(dataNascimento) {
  const dataDeNascimento = dayjs(dataNascimento, "DD/MM/YYYY");

  if (!dataDeNascimento) {
    return "Data de nascimento inválida";
  }

  const hoje = dayjs();

  const idade = hoje.diff(dataDeNascimento, "year");
  console.log(`A sua idade é ${idade} anos.`);

  let proximoAniversario = dayjs()
    .year(hoje.year())
    .month(dataDeNascimento.month())
    .date(dataDeNascimento.date());

  if (hoje.isAfter(proximoAniversario)) {
    proximoAniversario = proximoAniversario.add(1, "year");
  }

  const diasRestantes = proximoAniversario.diff(hoje, "day");

  let mensagemDias;

  if (diasRestantes === 0) {
    mensagemDias = "Hoje é seu aniversário!";
  } else if (diasRestantes === 1) {
    mensagemDias = "Falta 1 dia para seu próximo aniversário";
  } else {
    mensagemDias = `Faltam ${diasRestantes} dias para seu próximo aniversário`;
  }

  console.log(mensagemDias);

  const dataFormatada = proximoAniversario.format("DD/MM/YYYY");
  console.log(`Seu próximo aniversário será em ${dataFormatada}`);

  return {
    idade: idade,
    proximoAniversario: dataFormatada,
    diasRestantes: diasRestantes,
  };
}

dataDeNascimento(nascimento);
