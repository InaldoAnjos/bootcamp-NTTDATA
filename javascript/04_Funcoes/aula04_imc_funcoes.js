function calcularImc(peso, altura){
    return peso / (Math.pow(altura, 2));
}

function classifarImc(imc){
    if(imc < 18.5){
        return `Seu IMC é igual a ${(imc).toFixed(2)}, você está abaixo do peso!`;
     }else if(imc >= 18.5 && imc <= 25){
        return `Seu IMC é igual a ${(imc).toFixed(2)}, você está com seu peso normal!`;
     }else if(imc > 25 && imc <= 30){
        return `Seu IMC é igual a ${(imc).toFixed(2)}, você está acima do peso!`;
     }else if(imc > 30 && imc <= 40){
        return `Seu IMC é igual a ${(imc).toFixed(2)}, você está obeso!`;
     }else{
        return `Seu IMC é igual a ${(imc).toFixed(2)}, você está com obesidade grave!`;
     }
}

// Main

//Declara  a função e executa imediatamente sem a necessidade de chamá-la com um main(), por exemplo.

(function (){
    
    const peso = 92.6;
    const altura = 1.86;
    
    const imc = calcularImc(peso, altura);
    
    console.log(imc.toFixed(2));
    console.log(classifarImc(imc));

})();

//main();