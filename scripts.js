let num1;
let num2;
let resultado;
num1 = Number(prompt("adicione o primeiro número"));
num2 = Number(prompt("adicione o segundo número"));

resultDivisao = num1/num2;

alert(`Seu resultado é: ${resultDivisao.toFixed(2)}`);

resultado = num1 + num2;

alert(`o resultado da sua soma é:${resultado}`);

resultado = num1 * num2;

alert(`resultado da multiplicação é ${resultado}`);

let resultadosub = num1 - num2;
// Number e prompt faz a programação ver os números como numeros mesmo. Sem o texto.
alert(`O resultado da subtração é: ${resultadosub.toFixed(2)}`);
// Alert serve para aparecer a escrita na tela.

