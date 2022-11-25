/* Faça um algoritimo que dado as 3 notas tiradas por um aluno em um
 semestre da faculdade calcule e imprima a sua média e a sua classificação
 conforme a tabela abaixo.
 
 Média = (nota 1 + nota 2 + nota 3) / 3;
 
 Classificação:
 - Média menor que 5, reprovação;
 - Média entre 5 e 7, recuperação;
 - Média acima de 7, passou de semestre.*/

 let nota1 = 5;
 let nota2 = 4;
 let nota3 = 5;

 let media = (nota1 + nota2 + nota3) / 3;

 if(media < 5){
    console.log(`Sua média foi ${(media).toFixed(2)}, você está reprovado!`);
 }else if(media >= 7){
    console.log(`Sua média foi ${(media).toFixed(2)}, você está aprovado!`);
 }else{
    console.log(`Sua média foi ${(media).toFixed(2)}, você está de recuperação!`);
 }