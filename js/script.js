// 1. Declarando as variáveis mutáveis (como pedido)
// const nome = prompt("Qual é o seu nome?");

//alert(`Bem vindo, ${nome}!`);




// 2. Mudando a cor do fundo para a bandeira LGBTQIA+
// (Limpamos a Hero primeiro para o fundo do body aparecer)
let hero = document.querySelector('.hero');
if (hero) {
    hero.style.background = "transparent";
}

document.body.style.background = "linear-gradient(to right, red, orange, yellow, green, blue, purple)";
document.body.style.backgroundAttachment = "fixed";

// 3. Mensagem personalizada no console (substituindo o teste antigo)
console.log("--- Sistema de Login ---");
console.log("Usuária: " + nome);
console.log("Status: Script carregado com sucesso!");
console.log("A cor do fundo foi alterada via JavaScript.");

