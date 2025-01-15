let num = document.getElementById('inumber')
let lista = document.getElementById('ilista')
let rest = document.getElementById('res')
let valores = []

//Checar se é um número válido dentro de 1-100
function isNumero(n){
if(Number(n) >= 1 && Number(n) <= 100){
    return true
}else{
    return false
}

}

//checar se o numero ja foi digitado
function inLista(n, l){
if(l.indexOf(Number(n)) != -1){
    return true
}else{
    return false
}

}


function adicionar(){
if(isNumero(num.value)  && !inLista(num.value, valores)){

    //valores.adicionar valor no array[]
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `O valor ${num.value} foi adicionado`
    lista.appendChild(item)
    rest.innerHTML = ''

}else{
    window.alert('Valor inválido ou já encontrado na lista')
}
    num.value = ''
    num.focus()

}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores para finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]

             if(valores[pos] < menor)   
                menor = valores[pos]

            }
        
            media = soma / total
        rest.innerHTML = ''
        rest.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        rest.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        rest.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        rest.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        rest.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    }
}
