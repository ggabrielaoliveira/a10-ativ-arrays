const letras=["a","h","g"];
const letrasCopia= letras.slice();
letrasCopia.push(7);

const numeros=[5,9,7,3];
const numerosCopia= numeros.slice();
numerosCopia.splice(3)

const animais=["gato","cachorro","pato"];
const animaisCopia=animais.slice();
animaisCopia.splice(1,1)
//add number
console.log(`Original: ${letras}`);
console.log(`Foi add o numero 7 na Cópia ${letrasCopia}`);
//remoção segundo item do segundo array
console.log(`Original: ${numeros}`);
console.log(`Foi removido o ultimo item:${numerosCopia}`);
//remoção segundo item do segundo array
console.log(`Original: ${animais}`);
console.log(`Foi removido o segundo item: ${animaisCopia}`);