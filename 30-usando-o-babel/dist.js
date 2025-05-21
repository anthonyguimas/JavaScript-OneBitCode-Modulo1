"use strict";

var mediaAritmeticaSimples = function mediaAritmeticaSimples() {
  for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
    n[_key] = arguments[_key];
  }
  if (n.length === 0) {
    return "Nenhum valor fornecido para calcular a média";
  }
  var soma = n.reduce(function (total, n) {
    return total + n;
  }, 0);
  var media = soma / n.length;
  return "A m\xE9dia aritm\xE9tica simples dos valores ".concat(n.join(", "), " \xE9: ").concat(media.toFixed(2));
};
console.log(mediaAritmeticaSimples(5, 5, 4, 3, 2));
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weigth = _ref.weigth;
    return accum + number * weigth;
  }, 0);
  var weigthSum = entries.reduce(function (accum, entry) {
    return accum + entry.weigth;
  }, 0);
  var media = sum / weigthSum;
  return "M\xE9dia Ponderada: ".concat(media);
};
console.log(mediaPonderada({
  number: 9,
  weigth: 3
}, {
  number: 7,
  weigth: 1
}, {
  number: 10,
  weigth: 1
}));
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  // 1, 2, 4, 5, 6, 9 ->
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return mediaAritmeticaSimples(firstMedian, secondMedian);
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
