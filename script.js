let paragrafo = document.querySelector("#clique1");
clique1.addEventListener("click", mostrarMensagem);

function mostrarMensagem() {
    let paragrafo = document.querySelector("#mensagem");
    paragrafo.textContent = "Você clicou no botão! Seja bem vindo, Foi Dificil fazer isso. ";
}

// Quando o usuário clicar, uma mensagem(por exemplo uma frase de motivação, saudação, boas vindas, etc.) deverá aparecer abaixo do botão.