/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça para dizer
    o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC(){
        const imc = this.calcularIMC();

        if(imc < 18.5){
            return (`Seu IMC é igual a ${(imc).toFixed(2)}, você está abaixo do peso!`);
         }else if(imc >= 18.5 && imc <= 25){
            return (`Seu IMC é igual a ${(imc).toFixed(2)}, você está com seu peso normal!`);
         }else if(imc > 25 && imc <= 30){
            return (`Seu IMC é igual a ${(imc).toFixed(2)}, você está acima do peso!`);
         }else if(imc > 30 && imc <= 40){
            return (`Seu IMC é igual a ${(imc).toFixed(2)}, você está obeso!`);
         }else{
            return (`Seu IMC é igual a ${(imc).toFixed(2)}, você está com obesidade grave!`);
         }
    }
}

const jose = new Pessoa('José', 70, 1.75).classificarIMC();
const inaldo = new Pessoa('Inaldo Junior', 92.6, 1.86);
const stephanny = new Pessoa('Stephanny Egito', 76, 1.65);

console.log(jose.classificarIMC());
console.log(inaldo.classificarIMC());
console.log(stephanny.classificarIMC());