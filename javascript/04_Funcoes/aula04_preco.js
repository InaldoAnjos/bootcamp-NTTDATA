/* Elabore um algoritmo que calcule o que deve ser pado por um produto, 
 considerando o preço normal de etiqueta e a escolha da condição de pagamento.
 Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
 escolhida e efetuar o cálculo adequado.
 
 Código condição de pagamento:
 - À vista no dinheiro ou PIX, recebe 15% de desconto;
 - À vista no débito, recebe 10% de desconto;
 - Em até 2x, preço normal de etiqueta;
 - Mais de 2x, juros de 10%.*/

 function main(){
     const precoEtiqueta = 100.00;
     const formaPagamento = 2; 

     if (formaPagamento == 1){
        console.log(`Total a pagar: ` + aplicarDesconto(precoEtiqueta, 15));
     }else if (formaPagamento == 2){
        console.log(`Total a pagar: ` + aplicarDesconto(precoEtiqueta, 10));
     }else if (formaPagamento == 3){
        console.log(`Total a pagar: ` + precoEtiqueta);
     }else{
        console.log(`Total a pagar: ` + aplicarJuros(precoEtiqueta, 10));
     }
 }

 main();

 function aplicarDesconto(precoEtiqueta, desconto){
    return (precoEtiqueta - (precoEtiqueta * desconto / 100));
 }

 function aplicarJuros(precoEtiqueta, juros){
    return (precoEtiqueta + (precoEtiqueta * juros / 100));
 }