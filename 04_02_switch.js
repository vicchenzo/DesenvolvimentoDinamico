/*
É uma estrutura de controle que permite selecionar um dos vários blocos de código baseado no valor de uma expressão (escolha);
É uma alternativa mais organizada ao invés do if.. else repetidamente 
-- SWITCH CASE: mais fácil
-- MAIS ORGANIZADA
-- FLUXOGRAMA
-- DEFAULT: Caso nao encontre nenhum bloco correto;
-- Todo SWITCH CASE precisa de um caso e um campo DEFAULT(Saída inesperada)
*/

//HANDSON
// Funcao que recebe a cor do semáforo e decide a acao do pedestre
// Parametro que vai ser testado vai ser a cor da luz
function checkTrafficLight(lightColor) {
    
    switch (lightColor) {
        case 'verde':
            console.log("Pode atravessar a rua");
            //break
        case 'amarelo':
            console.log("Prepara-se para parar!");
            break
        case 'vermelho':
            console.log("Pare! Não atravesse a rua")
            break
        default:
            console.log("Cor inválida! Aguarde até o semáfaro esteja em uma cor válida")
    }
    //

    // Prepare-se para parar

    // Pare! Não atravesse a rua

    // Cor inválida! Aguarde até o semáfaro esteja em uma cor válida
}

//Exemplos de uso
checkTrafficLight("verde");
//checkTrafficLight("amarelo");
//heckTrafficLight("vermelho");
//checkTrafficLight("azul");

/* EXPLICAÇÃO BREAK: COR VERDE
quando comentamos no break da cor verde ele passa para o próximo, e o chama novamente, aparecendo o console do amarelo duas vezes;
-- Para entendermos melhor a professora comenta todas as cores do exemplo de uso, deixando somente a cor verde, quando rodamos novamente o código ele mostra o console do amarelo uma vez já que o mesmo está comentado, caso contrário ele apareceria duas vezes;

*/
