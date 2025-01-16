function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let de = parseInt(document.getElementById('de').value)
    let ate = parseInt(document.getElementById('ate').value)
    
    let sorteados = []
    let numero

    if(de > ate){ //Verifica se o numero DE é maior que o ATÉ....... Tambem seria possivel, ao final desse if, colocar um return, sem precisar colocar o else.
        alert("'Do numero' nao pode ser maior que 'Ate o numero'")
    } else {
        for(let i = 0; i < quantidade; i++){
            numero = obterNumeroAleatorio(de, ate)
            sorteados.push(numero)
    
            while(sorteados.includes(numero)){
                numero = obterNumeroAleatorio(de, ate) // Este bloco WHILE nao permite que os numeros sejam repetidos    
            }
    
            document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
        }
    }

    alterarStatusBotao()
}

function obterNumeroAleatorio(min, max){
    return parseInt(Math.random() * (max - min + 1) + min)
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar')
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    } else {
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}

function reiniciar(){
    let quantidade = parseInt(document.getElementById('quantidade').value = '')
    let de = parseInt(document.getElementById('de').value = '')
    let ate = parseInt(document.getElementById('ate').value = '')

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    
    alterarStatusBotao()
}