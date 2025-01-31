let mensagem = 'Olá Impressionador'; // string
let preco = 50.0; // tipo number decimal
let logado = true; // booleano

//Undefined: Valor que uma variável recebe quando ela não é inicializada, como se não tivessemos atribuído valor a ela
// Quando vem indefenido nosso programa nao esta conseguindo fazer a leitura do nosso valor
let produto;
let carrinho = undefined
console.log(produto)// tipo de dado do meu produto
console.log(carrinho)


//Null: também é uma ausencia de valor, porém, utilizamos ele a um valor atribuído a uma variável que vai indicar explicitamente que a variável está vazia ou não possui nenhum valor
let lista = null; // estou atribuindo um valor vazio
console.log(lista)
console.log(typeof lista)// retorna tipo object

// TYPEOF: quando queremos saber o tipo de dados de alguma coisa
console.log(typeof produto); // tipo de dado do meu produto
console.log(typeof carrinho);// ambos os casos ele vai ser o tipo de dado e o valor dessa informação
