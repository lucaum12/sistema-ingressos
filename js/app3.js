let botao = document.querySelector("button");

botao.addEventListener("click", function() {
    comprarIngresso();
})

function comprarIngresso() {
    let tipoDeIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeIngresso = document.getElementById(`qtd-${tipoDeIngresso}`).textContent;
    let quantidadeSelecionada = parseFloat(document.getElementById("qtd").value);

    if(quantidadeSelecionada <= 0 || document.getElementById("qtd").value == "") {
        alert("Insira uma quantidade válida!");
    }
    else if(quantidadeSelecionada > parseFloat(quantidadeIngresso) && parseFloat(quantidadeIngresso) > 0) {
        alert(`Restam apenas ${quantidadeIngresso} ingressos para ${tipoDeIngresso}!`);
    }
    else if(parseFloat(quantidadeIngresso) == 0) {
        alert(`Ingressos esgotados para ${tipoDeIngresso}!`);
    }
    else if(quantidadeSelecionada <= parseFloat(quantidadeIngresso) && quantidadeSelecionada > 0) {
        document.getElementById(`qtd-${tipoDeIngresso}`).textContent = quantidadeIngresso - quantidadeSelecionada;
    }
    document.getElementById("qtd").value = "";
}