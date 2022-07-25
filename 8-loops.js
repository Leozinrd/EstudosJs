const imprimir = console.log;

imprimir(`\n\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
	`Salvador`,
	`Fortaleza`,
	`Rio de Janeiro`,
);

imprimir(`\nLista de Destinos:`);
imprimir(listaDeDestinos);
imprimir(''); //somente para quebrar linha


const idade = 17;
const estaAcompanhada = true;
let passagemComprada = false;
const destino = 'Salvador';
const podeComprar = idade >=18 || estaAcompanhada == true;

// if (idade >=18 || estaAcompanhada == true) {
// 	console.log(`\nBoa viagem!\n`);
//     listaDeDestinos.splice(1,1);
//     passagemComprada = true;
// } else {
// 	console.log(`Descuple, mas você não pode embarcar\n`);
//     passagemComprada = false;
// }

// console.log(`Embarque:\n`);

// if (idade >= 18 || estaAcompanhada == true && passagemComprada == true) {
//     console.log(`Pode embarcar e boa viagem!\n`);
// } else {
//     console.log(`Desculpe, mas você não pode embarcar.\n`);
// }

// console.log(listaDeDestinos);

let contador = 0;
let destinoExiste = false;

// Usando o while
// while (contador < listaDeDestinos.length) {
// 	if (listaDeDestinos[contador] == destino) {
// 		destinoExiste = true;
// 		break;
// 	} else{
// 		destinoExiste = false;
// 	}
// 	contador += 1;
// }
// Usando o for
for (let cont = 0 ; cont < listaDeDestinos.length ; cont++) {
	if (listaDeDestinos[cont] == destino) {
		destinoExiste = true;
		break;
	} else{
		destinoExiste = false;
	}
}

imprimir(`Destino existe: ${destinoExiste}\n`);

if (destinoExiste == true && podeComprar == true) {
	imprimir(`Boa viagem!\n`);
} else {
	imprimir(`Desculpe, tivemos um erro`);
}