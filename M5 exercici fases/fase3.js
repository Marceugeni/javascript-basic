let myNameth = ['M', 'A', 'R', 'C',' ', '3', 'U', 'G', 'E', 'N', 'I'];

let elNouArray = [];

let info = myNameth.map(function(lletra){
    if (elNouArray.hasOwnProperty(lletra)) {
        elNouArray[lletra] += 1;
    }
    else {
        elNouArray[lletra] = 1;
    }
});

console.log (elNouArray);




