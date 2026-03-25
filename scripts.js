let numUmsub;
let numDoissub;
let resultadosub;
// Let serve para criar a variavel
numUmsub = Number(prompt("Escreva o seu primeiro número."));
numDoissub = Number(prompt("Escreva o seu segundo número."));
resultadosub = numUmsub - numDoissub;
// Number e prompt faz a programação ver os números como numeros mesmo. Sem o texto.
alert(`O resultado da subtração é: ${resultadosub.toFixed(2)}`);
// Alert serve para aparecer a escrita na tela.