let num = [1,2,3,4,5,6]

console.log(num)

/*
for(let pos=0; pos < num.length; pos++ ){
    console.log(`O índice ${pos} tem valor ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`O índice ${pos} tem o valor ${num[pos]}`)
}