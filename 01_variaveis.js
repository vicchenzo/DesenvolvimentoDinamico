// ᴛʏᴘᴇ ᴅᴇᴄʟᴀʀᴀᴛɪᴏɴ + ᴠᴀʀɪᴀʙʟᴇ ɴᴀᴍᴇ = ɪɴғᴏʀᴍᴀᴛɪᴏɴ
let mensagem = "Olá, Impressionador!";
console.log(mensagem)

// ʟᴇᴛ ᴛʏᴘᴇ ᴅᴇᴄʟᴀʀᴀᴛɪᴏɴ
let cor = 'Vermelho';
console.log(cor)

cor = 'Azul'; // ᴡᴇ ᴄᴀɴ ʀᴇᴀssɪɢɴ ᴛʜᴇ ᴠᴀʟᴜᴇ ᴏғ ᴛʜᴇ ᴠᴀʀɪᴀʙʟᴇ
console.log(cor);
// ʟᴇᴛ ᴛʏᴘᴇ ʜᴀs ᴛʜᴇ ᴄʜᴀʀᴀᴄᴛᴇʀɪsᴛɪᴄ ᴏғ ʙᴇɪɴɢ ᴀ ᴍᴜᴛᴀʙʟᴇ ᴛʏᴘᴇ;
// ᴡᴇ ᴄᴀɴɴᴏᴛ ᴄʀᴇᴀᴛᴇ ᴛʜᴇᴍ ᴀɢᴀɪɴ ʙᴜᴛ ᴛʜᴇʏ ᴄᴀɴ ʙᴇ ʀᴇᴅᴇᴄʟᴀʀᴇᴅ, ᴡᴇ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴛʜᴇ ᴠᴀʟᴜᴇ ɪɴsɪᴅᴇ ᴛʜɪs ʙᴏx;
// ᴛʜɪs ᴠᴀʀɪᴀʙʟᴇ ᴡɪʟʟ ʙᴇ ᴜsᴇᴅ ᴡʜᴇɴ ᴡᴇ ɴᴇᴇᴅ ᴛᴏ ʀᴇᴀssɪɢɴ ᴛʜɪs ᴠᴀʟᴜᴇ ᴡɪᴛʜɪɴ ᴏᴜʀ ᴘʀᴏɢʀᴀᴍ ᴀᴛ sᴏᴍᴇ ᴘᴏɪɴᴛ;

// ᴄᴏɴsᴛ ᴛʏᴘᴇ
const segundaMensagem = 'Bem vindo!'
console.log(segundaMensagem)

// Não podemos reatribuir o valor - const segundaMensagem = 'Quero trocar a mensagem da minha variável';
// Para usarmos o CONST o valor não deve mudar após a criação dela
// CONST garante a imutalidade de valor, ajuda a evitar erros acidentais onde durante o programa atibuimos valor à ela
console.log(segundaMensagem)


// TIPO VAR
// POSSO REDECLARAR
// POSSO REATRIBUIR
nome = 'Alon' // sem utilziar o tipo 'var' declaração incorreta [javascript entende autamticamente como var]
console.log(nome);

var nome = 'Millene';
console.log(nome)

var nome = 'Daniel' // redeclarar pode gerar erro
console.log(nome)

nome = 'Lira'
console.log(nome)
// Depois que o tipo LET e CONST foram inseridos o tipo VAR se tornou menos comum
// Os dois tipos oferecem controle, ajudam a evitar esse tipo de BUG.

// Exemplo de uso de var, LET e CONST em JavaScript
const externo = "Olá, eu sou uma constante global!"

// Declaração de uma variável usando var
function exemploVar() {
    if(true) { 
        var mensagem = "Olá, Faculdade Descomplica! Eu sou sou uma var..";
    }
    console.log(mensagem);
}
//Chamando a função exemploVar
exemploVar();


//Exemplo de erro e correção
var mensagem1 = "Olá, Faculdade Descomplica! Escopo exeterno"
console.log(mensagem1)

// Declaração de uma variável utilizando let
function exemploLet() {
    if(true) {
        let mensagem = "Olá, Faculdade Descomplica! Eu sou uma let"
        console.log(mensagem)
    }
}
// Chamando função exemploLet
exemploLet();

// Exemplo de erro e correção
let mensagem = "Olá, Descomplica! Let exeterno!";
console.log(mensagem);

// Declaração de uma constante usando const
function exemploConstante() {
    const mensagem = "Olá, Eu sou uma constante..";
    console.log(mensagem);
}
// Chamando Função
exemploConstante();

// Exemplo externo de const
console.log(externo)

// Exemplo externo tentar alterar constante global
 externo = "Nova Mensagem";


