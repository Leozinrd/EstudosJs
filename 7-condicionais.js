console.log(`Trabalhando com condicionais`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(`Os destinos disponíveis para viagem são ${salvador}, ${saoPaulo} e ${rioDeJaneiro}`);

const listaDeDestinos = new Array(
	`Salvador`,
	`São Paulo`,
	`Rio de Janeiro`,
);

// console.log(listaDeDestinos);

// console.log(`A lista de destinos é ${listaDeDestinos}`);

// listaDeDestinos.push(`Fortaleza`); Como adicionar ao final da lista um item

console.log(listaDeDestinos);

const idade = 17;
const estaAcompanhada = true;
const passagemComprada = false;

// console.log(`A lista de destinos é ${listaDeDestinos}`);

// listaDeDestinos.splice(1, 1);  Como remover o item x de quantidade y da lista .splice(x,y)
// console.log(listaDeDestinos);

// console.log(`Lista de destinos ${listaDeDestinos[1]}, ${listaDeDestinos[0]}`);


// Primeira maneira de usar if com uma condicional por lógica
// if (idade >= 18) {
// 	console.log(`Você está apto a comprar uma passagem porque você é maior de 18 anos`);
// 	//é menor de idade 
// } else if (estaAcompanhada == true) {
// 	console.log(`Seu acompanhante pode comprar a passagem para você`);
// } else {
// 	console.log(`Você não pode comprar a passagem`);
// }


// Utilizando 'ou' || , utilizando 'e' &
// if (idade >= 18 || estaAcompanhada == true) {
// 	console.log(`Você está apto a comprar uma passagem`);
// } else {
// 	console.log(`Você não pode comprar a passagem`);
// }

// Pode embarcar ou não
if (idade >=18 || estaAcompanhada == true && passagemComprada == true) {
	console.log(`Boa viagem`);
} else {
	console.log(`Descuple, mas você não pode embarcar`);
}