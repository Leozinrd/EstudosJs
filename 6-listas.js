console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Os destinos disponíveis para viagem são ${salvador}, ${saoPaulo} e ${rioDeJaneiro}`);

// Como declarar array -> const 'x' = new Array ();
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

console.log(listaDeDestinos);

console.log(`A lista de destinos é ${listaDeDestinos}`);

// Como adicionar um item ao array 'x.push()'
listaDeDestinos.push(`Fortaleza`);

console.log(`A lista de destinos é ${listaDeDestinos}`);

// Como remover um item do array 'x.splice(posição, quantidade)'
listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);

// Como imprimir somente itens específicos do array 'x[posição]' -> [0] é a 1ª posição
console.log(`Lista de destinos ${listaDeDestinos[1]}, ${listaDeDestinos[0]}`);