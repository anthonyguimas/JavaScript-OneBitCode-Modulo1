function geometricCalculator() {
  let calcGeometricForm = "";
  do {
    calcGeometricForm = prompt(
      "O que você deseja?\n1 - Calcular a área do triângulo\n2 - Calcular a área do retângulo\n3 - Calcular a área do quadrado\n4 - Calcular a área do trapézio\n5 - Calcular a área do círculo\n6 - Sair"
    );

    switch (calcGeometricForm) {
      case "1":
        let triangleBase = parseFloat(
          prompt("Digite o comprimento da sua base")
        );
        let triangleHeight = parseFloat(
          prompt("Digite a altura do seu triângulo")
        );
        let triangleResult = calcTriangleArea(triangleBase, triangleHeight);
        alert(triangleResult);
        break;
      case "2":
        let rectangleBase = parseFloat(
          prompt("Digite o comprimento da sua base")
        );
        let rectangleHeigth = parseFloat(
          prompt("Digite a altura do seu retângulo")
        );
        let rectangleResult = calcRectangleArea(rectangleBase, rectangleHeigth);
        alert(rectangleResult);
        break;
      case "3":
        let squareArea = parseFloat(prompt("Digite a área do quadrado"));
        let squareResult = calcSquareArea(squareArea);
        alert(squareResult);
        break;
      case "4":
        let trapezeLargeBase = parseFloat(
          prompt("Digite a base maior do trapézio")
        );
        let trapezeSmallerBase = parseFloat(
          prompt("Digite a base menor do trapézio")
        );
        let trapezeHeight = parseFloat(prompt("Digite a altura do trapézio"));
        let trapezeResult = calcTrapezeArea(
          trapezeLargeBase,
          trapezeSmallerBase,
          trapezeHeight
        );
        alert(trapezeResult);
        break;
      case "5":
        let ray = parseFloat(prompt("Digite o raio do círculo"));
        let circleResult = calcCircleArea(ray);
        alert(circleResult);
        break;
      case "6":
        alert("Saindo do programa!");
        break;
      default:
        alert("Você não digitou uma opção válida");
        break;
    }
  } while (calcGeometricForm !== "6");
}

geometricCalculator();

function calcTriangleArea(base, height) {
  let calcArea = (base * height) / 2;
  return "O cálculo total da área do triângulo é " + calcArea;
}

function calcRectangleArea(base, height) {
  let calcRectangle = base * height;
  return "O cálculo total da área do retângulo é " + calcRectangle;
}

function calcSquareArea(side) {
  let calcSquare = side ** 2;
  return "O cálculo total da área do quadrado é " + calcSquare;
}

function calcTrapezeArea(largeBase, smallerBase, height) {
  let calcTrapezeArea = ((largeBase + smallerBase) * height) / 2;
  return "O cálculo total da área do trapézio é " + calcTrapezeArea;
}

function calcCircleArea(ray) {
  let calcCircleArea = Math.PI * ray ** 2;
  return "O cálculo total da área do circulo é " + calcCircleArea;
}
