
let myNames = ['M', 'A', 'R', 'C',' ', '3', 'U', 'G', 'E', 'N', 'I'];

let joined = myNames.join('');
console.log('Partim del nom', joined);

for(let i = 0; i<myNames.length; i++){
    if(myNames[i].match (/[aeiou]/gi) ) console.log ("He trobat la vocal: " + myNames[i]);
    else if (myNames[i].match (/[bcdfghjklmnpqrstvwxys]/gi)) console.log ("He trobat la consonant: " + myNames[i]);
    else if (myNames[i].match (/[0-9]/gi)) console.log ("Els noms de persones no tenen el numero: " + myNames[i]);
    else console.log ("ESPAI, SIMBOL O wtf!");
}