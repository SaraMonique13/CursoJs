function contar(){
let ini = document.getElementById('start')
let fim = document.getElementById('end')
let passo = document.getElementById('ipasso')

let mensagem = document.getElementById('resul')

//se não tiver preenchido 
if(ini.value.length == 0 || fim.value.lenght == 0 || passo.value.length == 0){
    mensagem.innerHTML = 'Impossível contar!'
}else{
    mensagem.innerHTML = 'Contando... <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p <= 0){
        window.alert('Passo inválido! CONSIDERANDO PASSO 1')
        p = 1
    }

    if(i < f){//crescente
    for(let c = i; c <= f; c += p){
        mensagem.innerHTML += `${c} `
    }
    }else{//decrescente
        for(let c = i; c >= f; c-= p){
            mensagem.innerHTML += `${c} \u{1f449} `
        }
    }
    mensagem.innerHTML = `\u{}`
}












}