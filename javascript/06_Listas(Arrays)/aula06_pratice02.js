// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for(let i = 0; i < list.length; i++){
    if(list[i] % 2 === 0){
        console.log(`O número ${list[i]} é par!`);
    }
}