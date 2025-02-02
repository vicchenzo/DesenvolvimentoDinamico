/*
WHILE: ENQUANTO | Enquanto condicao verdadeira faca o bloco de código
n = 1
while(true) {
    bloco de código
n++}
*/

//Imagina que voce esta fazendo exercícios físicos para se manter saudavel
// Voce decide fazer flexões até ficar cansado

//WHILE
// Aqui, usaremos um loop WHILE para simular esse processo
let quantidadeFlexoes = 0;
let cansaco = false;

while(!cansaco) { //! significa negacao, portanto, enquanto NÃO estiver cansado, eu sigo
    quantidadeFlexoes++;
    console.log("eu fiz", quantidadeFlexoes, "flexões");

    if (quantidadeFlexoes === 10) { // condição de parada
        cansaco = true;
    }
}

// DO-WHILE
//Imagine que voce esta tentando aprender a andar de bicicleta.
//Voce decide praticar até conseguir andar pelo menos 1 minuto sem cair

// Aqui, usaremos um loop DO-WHILE para simular esse processo:
let tempoDeAndar = 0;
let caiu = false;// no comeco ainda nao caimos

do {
    tempoDeAndar++;
    console.log('andei de bicicleta por ', tempoDeAndar, 'minutos...');

    if (tempoDeAndar === 10){ // quando parar
        caiu = true;
    }
} while(!caiu && tempoDeAndar < 10); //condicao