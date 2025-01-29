/*
OPERADORES LÓGICOS
Operações lógicas em valores booleanos
E: &&
OU: ||
NÃO: !

Operações de comparação, aritméticos lógicos
== Igual à
!= Diferente

=== Mesmo valor e mesmo tipo
!== Diferente em valor e tipo

< menor que
> maior que

<= menor ou igual a
>= maior ou igual à

QUANDO ENTRA O && 'LÓGICO' APENAS QUANDO AS DUAS CONDIÇÕES SÃO VERDADEIRAS ELE É VERDADEIRO


X               Y               X && Y
VERDADEIRO      VERDADEIRO      VERDADEIRO
VERDADEIRO      FALSO           FALSO
FALSO           VERDADEIRO      FALSO
FALSO           FALSO           FALSO
*/

//Operador E lógico[&&]
const a = true;
const b = false;

const resultadoE1 = a && b; // False
const resultadoE2 = a && a; // true

console.log(`true && false: ${resultadoE1}`)
console.log(`true && true: ${resultadoE2}`)

//Operador OU lógico[||]
const resultadoOU1 = a||b; //true
const resultadoOU2 = a||a; // false

console.log(`true || false: ${resultadoOU1}`)// saída: false
console.log(`false || false: ${resultadoOU2}`)// saída: true
