else {
    quantidadeIngressos.innerHTML = `<span id="qtd-${tiposDeIngresso}"> ${parseFloat(quantidadeIngressos.textContent) - parseFloat(quantidadeSelecionada)} </span>`;
}