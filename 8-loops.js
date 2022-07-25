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
// for (inicialização do contador, condicional do contador, expressão)
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