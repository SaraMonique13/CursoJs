let num = document.getElementById('inumber')
let lista = document.getElementById('ilista')
let rest = document.getElementById('res')
let valores = []

//Checar se é um número válido dentro de 1-100
function isNumber(n){
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
if(isNumber(num.value)  && ! inLista(num.value, valores)){

    //valores.adicionar valor no array[]
    valores.push(Number(num.value))
    let item = document.createAttribute('option')
    item.text = `O valor ${num.value} foi adicionado`
    lista.appendChild(item)

}else{
    window.alert('Valor inválido ou já encontrado na lista')
}
}
