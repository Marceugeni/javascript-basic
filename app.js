//exercici 1

console.log ('Hola ITacademy!');

//exercici 2

alert ('Hola en dic Marc');

//exercici 3
const nom = "Marc "
const cognom = "Eugeni"

console.log (nom + cognom);

//exercici 4
let numero1 = 3
let numero2 = 4
let resultat = numero1 + numero2

console.log ('La suma entre ' + numero1 + ' i ' + numero2 + ' es ' + resultat);

//exercici 5

let nota_examen = 4

if(nota_examen > 5){
  alert('Estas aprovat amb la nota '+ nota_examen);
} 
else {
    alert('ohhh has suspès amb la nota '+ nota_examen);
}

//exercici 6

let frase = 'tinc un cotxe de color verd'
let resultaten = frase.replace('verd', 'blau')
let resultaten2 = frase.replace(/o/g, 'u')

console.log(resultaten);
console.log(resultaten2);


//exercici 7

let objectes = ['taula', 'cadira', 'ordinador', 'libreta']

objectes.forEach(function (item, index) {
    console.log('el objecte', item, 'es a la posició', index, 'del fucking array');
});


//exercici 8

// const calcu = function(operador = "resta", valor1 = 3, valor2 = 2){
//     let resta = ((valor1) - (valor2));
//     console.log (`el resultat de la teva operació es ${resta}`);
// };

// calcu();


let calcu = function calculadora (operador, valor1, valor2){
    if(operador == "suma") console.log(valor1+valor2);
    else if(operador == "resta") console.log(valor1-valor2);
    else if(operador == "multiplicar") console.log(valor1*valor2);
    else console.log("La operació que dius no es pot fer!");
}

calculadora("multiplicar", 3, 3);
