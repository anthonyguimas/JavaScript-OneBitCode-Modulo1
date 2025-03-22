const frase = prompt("Informe uma palavra:");
let invertFrase = "";

for (let i = frase.length - 1; i >= 0; i--) {
  invertFrase += frase[i];
}

if (frase === invertFrase) {
  alert(frase + " é um palíndromo!");
} else {
  alert(frase + " não é um palíndromo!\n\n" + frase + " !== " + invertFrase);
}
