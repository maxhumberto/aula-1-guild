const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];

const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log (apenasComA);

const primeiras = nomes.map((n) => n.charAt(0));
console.log (primeiras);

const todosComecamComA = nomes.every ((n)  => n.startsWith("A"));
console.log(todosComecamComA);

const numeros = [1, 2, 3, 4,5];
const soma = numeros.reduce((ac, v) => ac + v);
console.log(soma);

const palavra = "amor";
console.log (palavra.indexOf ('m'));

const nomesComo = nomes.filter((n) => n.indexOf('o')>-1);
console.log(nomesComo);
