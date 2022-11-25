main();

function main(){
    const nome = 'Inaldo Junior';
    const idade = 33;

    // exibirNome(nome);
    ehMaiorDeIdade(nome, idade);
}; 

function exibirNome(nome){
    return 'Olá, ' + nome;
}

function ehMaiorDeIdade(nome, idade){
    if(idade > 17){
        console.log(exibirNome(nome) + `. Sua idade é ${idade}. Logo, você é maior de idade.`);
    }else{
        console.log(exibirNome(nome) + `. Sua idade é ${idade}. Logo, você é menor de idade.`);
    }
}

