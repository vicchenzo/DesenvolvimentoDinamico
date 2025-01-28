// Declaração de uma variável chamada resultado e atribuição de uma função anonima a ela

let somarParametros = function (parametro1, parametro2) {
    console.log("Parametro 1: " + parametro1);
    console.log("Parametro 2: " + parametro2)

    let resultado = parametro1 + parametro2;
    console.log("Resultado: " + resultado)

    return resultado;
};

// Chadada da função anonima através da variável
let resultado = somarParametros(5, 10);
console.log("Resultado da chamada da função somarParametros: " + resultado);

// Defindo uma função que aceita outra função como argumento
function executarFuncao(funcao, valor1, valor2) {
    console.log("\nExecutando a função passada como argumento ou paramentro: ")
    return funcao(valor1, valor2);
}

// Passando a função anonima como argumento para outra função
let resultadoExecucao = executarFuncao(somarParametros, 7, 3);
console.log("Resultado da execução da função passada como argumento: " + resultadoExecucao)

// Definindo e chamadno uma função anonima imediatamente
let resultadoImediato = (function(a,b){
    console.log("\nFunção de chamada imediata: ")
    return a*b
})(4,6);
console.log("Resultado da função anônima chamada imediatamente: " + resultadoImediato)
