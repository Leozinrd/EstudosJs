console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
	`Salvador`,
	`São Paulo`,
	`Rio de Janeiro`,
);

console.log(listaDeDestinos);

const idade = 17;
const estaAcompanhada = true;
const passagemComprada = false;

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