function comprar() {
    let tiposDeIngressos = document.getElementById("tipo-ingresso").value;
    let quantidadeSelecionada = parseFloat(document.getElementById("qtd").value);
    let quantidadePista = parseFloat(document.getElementById("qtd-pista").textContent);
    let quantidadeSuperior = parseFloat(document.getElementById("qtd-superior").textContent);
    let quantidadeInferior = parseFloat(document.getElementById("qtd-inferior").textContent);

    switch(tiposDeIngressos) {
        case "pista":
            quantidadeSelecionada <= 0 || document.getElementById("qtd").value == "" ? alert("Insira uma quantidade válida!") : quantidadeSelecionada > quantidadePista ? alert(`Restam apenas ${quantidadePista} ingressos para ${tiposDeIngressos}!`) : document.getElementById("qtd-pista").textContent = quantidadePista - quantidadeSelecionada;
            break;
        case "inferior":
            quantidadeSelecionada <= 0 || document.getElementById("qtd").value == "" ? alert("Insira uma quantidade válida!") : quantidadeSelecionada > quantidadeInferior ? alert(`Restam apenas ${quantidadeInferior} ingressos para ${tiposDeIngressos}!`) : document.getElementById("qtd-inferior").textContent = quantidadeInferior - quantidadeSelecionada;
            break;
        case "superior":
            quantidadeSelecionada <= 0 || document.getElementById("qtd").value == "" ? alert("Insira uma quantidade válida!") : quantidadeSelecionada > quantidadeSuperior ? alert(`Restam apenas ${quantidadeSuperior} ingressos para ${tiposDeIngressos}!`) : document.getElementById("qtd-superior").textContent = quantidadeSuperior - quantidadeSelecionada;
            break;
    }
    document.getElementById("qtd").value = "";
}