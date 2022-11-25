/* Elabore um algoritmo que calcule o que deve ser pado por um produto, 
 considerando o preço normal de etiqueta e a escolha da condição de pagamento.
 Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
 escolhida e efetuar o cálculo adequado.
 
 Código condição de pagamento:
 - À vista no dinheiro ou PIX, recebe 15% de desconto;
 - À vista no débito, recebe 10% de desconto;
 - Em até 2x, preço normal de etiqueta;
 - Mais de 2x, juros de 10%.*/

 const precoEtiqueta = 100.00;
 const formaPagamento = '3x'; 

 if(formaPagamento === 'Dinheiro' || formaPagamento === 'PIX'){
    const totalAPagar = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log(`Total a pagar = R$ ${totalAPagar.toFixed(2)}. Obrigado!`);
 }else if(formaPagamento === 'Débito'){
    const totalAPagar = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log(`Total a pagar = R$ ${totalAPagar.toFixed(2)}. Obrigado!`);
 }else if(formaPagamento === '2x'){
    const totalAPagar = precoEtiqueta;
    console.log(`Total a pagar = R$ ${totalAPagar.toFixed(2)}. Obrigado!`);
 }else{
    const totalAPagar = precoEtiqueta + (precoEtiqueta * 0.1);
    console.log(`Total a pagar = R$ ${totalAPagar.toFixed(2)}. Obrigado!`);
}