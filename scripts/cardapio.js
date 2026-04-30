function mostrar(cardapio, botaoClicado) {
    // esconder cardápios
    document.getElementById("ifood").style.display = "none";
    document.getElementById("food99").style.display = "none";
    document.getElementById("keeta").style.display = "none";

    // mostrar o escolhido
    document.getElementById(cardapio).style.display = "grid";

    // remover ativo de todos os botões
    const botoes = document.querySelectorAll(".btn");
    botoes.forEach(btn => btn.classList.remove("ativo"));

    // adicionar ativo no clicado
    botaoClicado.classList.add("ativo");
}