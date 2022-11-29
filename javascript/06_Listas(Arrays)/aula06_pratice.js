// Crie um programa que dado um número imprima a sua tabuada.

const numero = 9;
const tabuada = 4;

if(tabuada === 1){
    console.log("TABUADA DE SOMA");
    for(let i = 0; i < 10; i++){
        console.log(`${numero} + ${i} = ${numero + i}`);
    }
}else if(tabuada === 2){
    console.log("TABUADA DE SUBTRAÇÃO");
    for(let i = 0; i < 10; i++){
        console.log(`${numero} - ${i} = ${numero - i}`);
    }
}else if(tabuada === 3){
    console.log("TABUADA DE MULTIPLICAÇÃO");
    for(let i = 0; i < 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}else{
    console.log("TABUADA DE DIVISÃO");
    for(let i = 1; i < 10; i++){
        console.log(`${numero} / ${i} = ${(numero / i).toFixed(1)}`);
    }
}
