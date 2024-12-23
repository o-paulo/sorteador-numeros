function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let de = parseInt(document.getElementById('de').value)
    let ate = parseInt(document.getElementById('ate').value)
    

    let sorteados = []
    let numero

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate)
        sorteados.push(numero)

        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate) // Este bloco WHILE nao permite que os numeros sejam repetidos
        }

        document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    }
    
    console.log(sorteados)
}

function obterNumeroAleatorio(min, max){
    return parseInt(Math.random() * (max - min + 1) + min)
}