function comprar() {
    let tiposDeIngressos = document.getElementById("tipo-ingresso").value;
    let quantidadeSelecionada = parseFloat(document.getElementById("qtd").value);
    let quantidadePista = parseFloat(document.getElementById("qtd-pista").textContent);
    let quantidadeSuperior = parseFloat(document.getElementById("qtd-superior").textContent);
    let quantidadeInferior = parseFloat(document.getElementById("qtd-inferior").textContent);
    
    switch(tiposDeIngressos) {
        case "pista":
            if(quantidadeSelecionada < quantidadePista && quantidadeSelecionada > 0) {
                document.getElementById(`qtd-${tiposDeIngressos}`).textContent = quantidadePista - quantidadeSelecionada;
            }
            else if(quantidadeSelecionada <= 0) {
                alert("Por favor, insira uma quantidade válida!");
            }
            else if(quantidadeSelecionada > quantidadePista) {
                alert(`Restam apenas ${quantidadePista} ingressos para ${tiposDeIngressos}`);
            } break;

            case "superior":
            if(quantidadeSelecionada < quantidadeSuperior && quantidadeSelecionada > 0) {
                document.getElementById(`qtd-${tiposDeIngressos}`).textContent = quantidadeSuperior - quantidadeSelecionada;
            }
            else if(quantidadeSelecionada <= 0) {
                alert("Por favor, insira uma quantidade válida!");
            }
            else if(quantidadeSelecionada > quantidadeSuperior) {
                alert(`Restam apenas ${quantidadeSuperior} ingressos para ${tiposDeIngressos}`);
            } break;

            case "inferior":
            if(quantidadeSelecionada < quantidadeInferior && quantidadeSelecionada > 0) {
                document.getElementById(`qtd-${tiposDeIngressos}`).textContent = quantidadeInferior - quantidadeSelecionada;
            }
            else if(quantidadeSelecionada <= 0) {
                alert("Por favor, insira uma quantidade válida!");
            }
            else if(quantidadeSelecionada > quantidadeSuperior) {
                alert(`Restam apenas ${quantidadeInferior} ingressos para ${tiposDeIngressos}`);
            } break;
    }
    

    limparQuantidade();
}

function limparQuantidade() {
    quantidadeSelecionada = document.getElementById("qtd");
    quantidadeSelecionada.value = "";
}