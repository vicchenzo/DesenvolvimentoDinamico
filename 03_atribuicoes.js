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
