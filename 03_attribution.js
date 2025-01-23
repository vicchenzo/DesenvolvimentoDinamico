/*
Atribuir um valor a uma variável, o mais básico é o =
Alguma variações: 
+= | Atribuição de soma
-= | Atribuição de subtração
*= | Atribuição de multiplicação
/= | Atribuição de divisão
%= | Atribuição de resto
*/ 

// Operador de atribuição básico(=)
let a = 10;
console.log(`valor de a: ${a}`)

// Operador de atribuição de adição (+=)
a += 5; // equivalente ao valor do a + 5
console.log(`Após a += 5, valor de a: ${a}`)

// Operador de atribuição de subtração (-=)
a -= 3; // equivalente a  = a - 3
console.log(`Após a -= 3, valor de a: ${a}`)

// Operador de atribuição de multiplicação (*=)
a *=2;// equivalente a = a * 2
console.log(`Após a *= 2, valor de a: ${a}`)

// Operador de atribuição de divisão (/=)
a /=4; //a = a / 4
console.log(`Após a *= 4, valor de a: ${a}`)

// Operador de atribuição de resto (%=)
a %=4; // a = a % 2
console.log(`Após a %= 4, valor de a: ${a}`)

// Operador de atribuição de exponenciacao (**=)
a **= 3;
console.log(`Após a ** = 3, valor de a: ${a}`)

//calculadora

//Função que simula a operação de uma calculadora
function calculadora (num1, num2) {
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;

    //Incremento num1
    let incrementar = num1;
    incrementar ++;

    //Decrementar num2
    let decrementar = num2;
    decrementar--;

    //Exibindo os resultados
    console.log(`Adição (${num1} + ${num2}) = ${adicao}`)
    console.log(`Subtração (${num1} - ${num2}) = ${subtracao}`)
    console.log(`Multiplicação (${num1} * ${num2}) = ${multiplicacao}`)
    console.log(`Divisao (${num1} / ${num2}) = ${divisao}`)
    console.log(`Modulo (${num1} % ${num2}) = ${modulo}`)
    console.log(`Exponencial (${num1} ** ${num2}) = ${exponencial}`)
    console.log(`Incrementar (${num1}) ++ = ${incrementar}`)
    console.log(`Decrementar (${num2}) -- = ${decrementar}`)
}
// Chamando a função calculadora:
calculadora(10, 5);

//calculadora();
//Quando rodamos sem parametro o JS roda porém com valor indefinido chamado 'undefined'
//NaN = Not A Number, quando chega num resultado que não é um número.
