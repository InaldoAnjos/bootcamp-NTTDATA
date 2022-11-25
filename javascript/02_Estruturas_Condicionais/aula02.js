/* Faça um programa para calcular o valor de uma viagem. 

    Você terá  variáveis. Sendo elas:
    1 - Preço etanol;
    2 - Preço gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem.

   Imprima no console o valor que será gasto para realizar a viagem.

*/

let precoEtanol = 3.18;
let precoGasolina = 4.98;
let tipoCombustivel = 'gasolina';
let autonomia = 8.6;
let distancia = 1180;

let resultado = (distancia / autonomia);

if(tipoCombustivel === 'etanol'){
    console.log(`Você gastou ${resultado.toFixed(2)} litros de combustível e R$ ${(resultado * precoEtanol).toFixed(2)}`);
}else{
    console.log(`Você gastou ${resultado.toFixed(2)} litros de combustível e R$ ${(resultado * precoGasolina).toFixed(2)}`);
}