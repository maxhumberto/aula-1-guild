v1 = [];
v1[0] = 3.4;
v1[10] = 2;
v1[2] = 'abc';
console.log (v1.length); // tamanho do vetor

v2 = [1, 'xyz',  true];
console.log (v2.length);    

console.log ('v2');
for (let i=0; i<v2.length; i++) {
    console.log (v2[i]);
}

console.log ('v1');
for (let i=0; i<v1.length; i++) { // repeticao
    if(v1[i] != undefined){ // condicao
        console.log("posicao " + i + " valor " + v1[i]);
    }
    else{ // condicao falsa
        console.log ("posicao " + i + " vazia");

    }
    
}