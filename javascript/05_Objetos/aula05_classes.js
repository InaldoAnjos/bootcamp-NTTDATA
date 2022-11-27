class Pessoa {
    nome;
    idade;
    email;

    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e meu email para contato é ${this.email}`);
    }
}


const junior = new Pessoa('Inaldo Junior', 33, 'inaldojr@meuemail.com');
const stephanny = new Pessoa('Stephanny Egito', 33, 'stephanny@meuemail.com');
const geovana = new Pessoa('Geovana dos Anjos Egito', 1, 'geovana@meuemail.com');

//console.log(junior);

function comparaIdade(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

comparaIdade(geovana, stephanny);

