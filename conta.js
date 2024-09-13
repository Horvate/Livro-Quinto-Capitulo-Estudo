const valor = Number(prompt("Valor da Conta"));  // lê o valor do carnet ...
const num = Number(prompt("N° de Parcelas")); // e números de parcelas
const valorParcelas = Math.floor(valor / num);  // calcula o valor sem decimais
const valorFinal = valorParcelas + (valor % num);   // calcula parcela final 

for(let i = 1; i < num; i++) { // enquanto i < num
  console.log(i + " Parcela " + "R$: " + valorParcelas.toFixed(2));
}
console.log(num + " Parcela " + "R$: " + valorFinal.toFixed(2)); // última parcela

