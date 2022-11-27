/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível, retorne o valor
    gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    modelo;
    cor;
    consumoMedio;

    constructor(marca, modelo, cor, consumoMedio){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }

    calculaValorGasto(percurso, valorCombustivel){
        return percurso / this.consumoMedio * valorCombustivel;
    }
}

const hb20 = new Carro('Hyundai', 'HB20S', 'Cinza', '10.9');
const tracker = new Carro('Chevrolet', 'Tracker', 'Vermelho', '12.9');

let valorViagem = hb20.calculaValorGasto(1200, 4.79);
console.log(`O carro ${hb20.modelo} gastou o total de R$ = ${valorViagem.toFixed(2)}`);

valorViagem = tracker.calculaValorGasto(1200, 4.79);
console.log(`O carro ${tracker.modelo} gastou o total de R$ = ${valorViagem.toFixed(2)}`);
