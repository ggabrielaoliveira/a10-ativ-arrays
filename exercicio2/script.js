const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
//length
const numeros=[5,4,7];
console.log(`A quantidade de numeros/itens são ${numeros.length}, presente nessa array`);

const frutas=["morango","laranja"];
console.log(`a quantidade de frutas presentes nessa array são ${frutas.length}`);

const mix=[2,3, "abacaxi","maracuja", false, false];
console.log(`A quantidade de numeros, frutas e booleanos ao todo são: ${mix.length}`);
//imprimir itens
const primeiroItem=numeros[0];
console.log(`O primeiro Item é:\n${primeiroItem}`);

const segundoItem=frutas[1];
console.log(`O segundo item é:\n${segundoItem}`);

const terceiroItem=mix[2];
console.log(`O terceiro item é:\n${terceiroItem}`);
//boolean
console.log(`No primeiro array possui o numero 7?: ${numeros.includes(7)}`);
console.log(`No terceiro array possui a fruta ameixa?: ${mix.includes("ameixa")}`);