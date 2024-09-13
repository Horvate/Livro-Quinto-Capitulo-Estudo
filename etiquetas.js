const produto = prompt("Produto:");     // lê o nome do produto e ...
const num = Number(prompt("N° de Etiquetas:"));     // quantidade de etiquetas
// cria um laço de repetição até num/2 (pois imprime 2 etiquetas por linha)
for (let i = 1; i <= num / 2; i++) {
  
  console.log(produto.padEnd(30) + produto.padEnd(30));
}

if (num % 2 == 1) {    // se a quantidade de etiquet for impar ..
  console.log(produto);    // imprima mais uma etiqueta
}