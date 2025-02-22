let measure = parseFloat(prompt("Digite a sua medida em metros"));

const options = prompt(
  "Para qual unidade de medida deseja converter?\n1 - milímetro (mm)\n2 - centímetro (cm)\n3 - decímetro (dm)\n4 - decâmetro (dam)\n5 - hectômetro (hm)\n6 - quilômetro (km)"
);

function measuresMeters(meters) {
  return meters * 1000;
}

function measuresCentimeter(centimeter) {
  return centimeter * 100;
}

function measuresDecimeter(decimeter) {
  return decimeter * 10;
}

function measuresDecameter(decameter) {
  return decameter / 10;
}

function measuresHectometer(hectometer) {
  return hectometer / 100;
}

function measuresKilometers(kilometer) {
  return kilometer / 1000;
}

switch (options) {
  case "1":
    let millimeter = measuresMeters(measure);
    alert(`A conversão de metros para milímetros é ${millimeter}`);
    break;
  case "2":
    let centimeter = measuresCentimeter(measure);
    alert(`A conversão de metros para centímetros é ${centimeter}`);
    break;
  case "3":
    let decimeter = measuresDecimeter(measure);
    alert(`A conversão de metros para decímetro é ${decimeter}`);
    break;
  case "4":
    let decameter = measuresDecameter(measure);
    alert(`A conversão de metros para decâmetro é ${decameter}`);
    break;
  case "5":
    let hectometer = measuresHectometer(measure);
    alert(`A conversão de metros para hectômetros é ${hectometer}`);
    break;
  case "6":
    let kilometer = measuresKilometers(measure);
    alert(`A conversão de metros para quilômetros é ${kilometer}`);
    break;
  default:
    alert("Você digitou uma opção inválida por favor tente novamente!");
    break;
}
