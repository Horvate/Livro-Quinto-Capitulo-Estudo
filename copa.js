console.log('Anos de copa do mundo, digite 0 para sair.');
console.log('------------------------------------------');

do {
  const ano = Number(prompt("Ano: "));
  if(ano == 0) {
    break 
  } else if(ano == 1942 || ano == 1946) {
    console.log('Não ouve copa do mundo em ' + ano + '. Segunda Guerra Mundial.');
  } else if (ano % 4 == 2) {
    console.log('Sim ' + ano + ' é ano de Copa do Mundo!');
  } else {
    console.log('Não... ' + ano + ' Não é ano de copa do mundo.')
  }
} while(true)