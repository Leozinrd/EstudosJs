console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Os destinos disponíveis para viagem são ${salvador}, ${saoPaulo} e ${rioDeJaneiro}`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

console.log(listaDeDestinos);

console.log(`A lista de destinos é ${listaDeDestinos}`);

listaDeDestinos.push(`Fortaleza`);

console.log(`A lista de destinos é ${listaDeDestinos}`);

listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);

console.log(`Lista de destinos ${listaDeDestinos[1]}, ${listaDeDestinos[0]}`);