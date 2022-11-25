// Faça um programa para calcular o valor gasto de combustível em uma viagem.
// Você terá 3 variáveis. Sendo elas:
// - Preço do combustível;
// - Gasto médio de combustível do carro por Km;
// - Distância em Km da viagem.

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.

const precoCombustivel = 5.79;
const autonomia = 14.2;
const distancia = 1180;

let resultado = (distancia / autonomia) * precoCombustivel;

console.log(resultado.toFixed(2));