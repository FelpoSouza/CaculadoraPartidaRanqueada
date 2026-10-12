function calculadoraSaldo(vitoria, derrota){
    let saldoTotal = vitoria - derrota
    return saldoTotal
}


function calculadoraRank(vitoria, derrota){
    let saldoTotal = calculadoraSaldo(vitoria, derrota)
    let rank = "nulo"
    if (saldoTotal <= 10) {
        rank = "Ferro"
    } else if(saldoTotal > 10 && saldoTotal <= 20){
        rank = "Bronze"
    } else if(saldoTotal > 20 && saldoTotal <= 50){
        rank = "Prata"
    } else if(saldoTotal > 50 && saldoTotal <= 80){
        rank = "Ouro"
    } else if(saldoTotal > 80 && saldoTotal <= 90){
        rank = "Diamante"
    } else if(saldoTotal > 90 && saldoTotal <= 100){
        rank = "Lendário"
    } else if(saldoTotal > 100){
        rank = "Imortal"
    }
    return rank
}


let vitoria = 54
let derrota = 3
let nivel = calculadoraRank(vitoria, derrota)
let saldoVitorias = calculadoraSaldo(vitoria, derrota)
console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)