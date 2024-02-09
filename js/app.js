function comprar() {
    let tiposDeIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeSelecionada = document.getElementById("qtd").value;
    let quantidadeIngressos = document.getElementById(`qtd-${tiposDeIngresso}`);

    if(parseFloat(quantidadeSelecionada) > parseFloat(quantidadeIngressos.textContent)) {
        alert(`Restam apenas ${quantidadeIngressos.textContent} ingressos para ${tiposDeIngresso}!`);
        if(!tiposDeIngresso) {
            alert("Selecione um ingresso válido!");
        }
    }
    else if(quantidadeSelecionada <= 0|| quantidadeSelecionada == "") {
        alert("Insira uma quantidade válida!");
    }
    else if(parseFloat(quantidadeSelecionada) <= parseFloat(quantidadeIngressos.textContent)) {
        quantidadeIngressos.textContent = parseFloat(quantidadeIngressos.textContent) - parseFloat(quantidadeSelecionada);
    }
    document.getElementById("qtd").value = "";
}