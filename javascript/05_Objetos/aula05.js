const pessoa = {
    nome :'Inaldo Junior',
    idade : 33,
    email : 'inaldoanjosjr@gmail.com',

    descrever: function(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e meu email para contato é ${this.email}`);
    }
};

console.log(pessoa);

//Inserindo uma nova chave

pessoa.altura = 1.86;
console.log(pessoa);

//Deletando uma chave

delete pessoa.email;
console.log(pessoa);

//Usando o this
pessoa.descrever();

//Usando o this de outra maneira

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e meu email para contato é ${this.email}!!`);
}

pessoa.descrever();