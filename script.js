function subtotal(quantidade, preco, sub) {
    let qtd = parseFloat(document.getElementById(quantidade).value)
    let valor = parseFloat(document.getElementById(preco).value)
    let result = qtd * valor;
    if (isNaN(result)) {
        document.getElementById(sub).value = "";
    } else {
        document.getElementById(sub).value = "" + result;
    }
}

function total(){
    let total = 0;
    let subs = [
        parseFloat(document.getElementById("subtotal1").value),
        parseFloat(document.getElementById("subtotal2").value),
        parseFloat(document.getElementById("subtotal3").value),
        parseFloat(document.getElementById("subtotal4").value),
        parseFloat(document.getElementById("subtotal5").value)
    ];
    for(let i = 0; i < subs.length; i++){
        if(!isNaN(subs[i])){
            total += subs[i];
        }
    }
    document.getElementById("total").innerHTML = "TOTAL R$ " + total;
}

function limpar(){
    document.getElementById("total").innerHTML = "TOTAL R$ ";
}