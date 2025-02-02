//Bloco de Código e Rótulos
// Identificadores => Rotulos: precedidos por ':'

//Imagine que voce esta organizando uma festa
//os blocos de código são como diferentes áreas de festa, onde diferentes atividades acontecem
// Por exemplo, voce pode ter uma área para dançar, uma área para jogos e uma área para comer

//Area para dançar
console.log('Hora de dançar!')

//Area para Jogos
console.log('Vamos Jogar!')

//Area para Comer
console.log('Hora de comer!')
//Aqui vao as instruções para buffet

//Rotulos são etiquetas que voce coloca em diferentes atividades durante a festa, para identifica-las

//Imagine que voce tem uma competicao de dança e uma competição de jogos acontecendo ao mesmo tempo


danca:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++){
        if(i === 1 && j === 1) {
            console.log("A competição de dança foi interrompita!");
            break danca;
        }
        console.log("Competidor " + (i+1) + " está dançando enquanto o competidor " + (j+1) + " está jogando")
    }
}

/*
Código simula uma situação em que há uma competição de dança e uma competição de jogos acontecendo simultanemante;
os loops for aninhados representam as duas competições;
onde cada competidor está envolvido tanto na dança quanto nos jogos.
Quando uma condição específica é atendida(no caso, i===1 &&& j===1),
A competição de dança é interrompida e uma mensagem é exibida;
Utilizando o rótulo 'danca' para sair do loop da competicao de danca;
isso demonstra o uso de rotulos para controlar o fluxo do código em situacoes específicas
*/