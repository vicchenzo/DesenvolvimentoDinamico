/*
ESTRUTURA DE REPETIÇCAO 'FOR' : PARA
for(int i = 0; -- iniciamos com variavel i=0
i < 100; -- condição de parada, enquanto i<100 loop continua
i++){ -- por ultimo colocamos o incrimento, adicionamos o valor de 1 a nossa variável i
    bloco de código
}
*/

/*for([inicializaao];[condicao]; [expressao]) */

//aqui, usaremos um loop for para simular esse processo:

for(let rua = 1; rua <=10; rua++) {
    console.log('Entrega feira na rua: ', rua);
 }

 // Enquanto i < users ele passa o nome da lista
 // length = quantidade
 const users = ['Maria', 'Aline', 'Joao']
 
 for(let i = 0; i < users.length; i++) {
    console.log(users[i])
 }

 // FOR OF: Usado em ARRAYS
 // Esta percorrendo todo ARRAY[lista] e a cada item os valores do array vai entrar como o name dentro do for;
 // 1° passada: name = João
 // 2° passada: name = Maria
 const users1 = ['José', 'Maria', 'Leticía']
 
 for(let name of users1) {
    console.log(name)
 }

 //FOR IN: ITERA EM OBJETOS, ou seja, ele anda item por item do nosso objeto

 const users2 = {
    nome: "Rodolfo", 
    Age: 33, 
    street: "Rua dos bobos"
}

//Os dois exemplos abaixo vão encontra o valor dentro das chaves
console.log(users2.nome) // neste caso ele pega o que está dentro de nome
console.log(users2['nome']) // Forma diferente de encontrar o valor, porém msm resultado

//Agora ele irá mostrar todos os valores ao invés apenas da chave [key]
for(let key in users2) {
    console.log(key + ': ' + users2[key])
}

// melhor forma de mostrar
for(let key in users2) {
    console.log(`${key} : ${users2[key]}`)
}


//Vamos criar uma variável chamda 'key', é chamado assim porque no dentro do nosso objeto, sempre temos a chave e o valor 
// EXEMPLO: name1 = chave | "rodolfo" = valor
