alert('Digite 0 para sair');

do {
  const num = Number(prompt('Número:'));    // lê o número

  if (num == 0 || isNaN(num)) {            // se num=0 ou inválido

    const sair = confirm('Confirma saída?');   // solicita a corfirmação do usuário

    if (sair) {

      break                // sai da repetição

    } else {
      continue        // volta ao inicio do laço
    }

  }
  if (num % 2 == 0) {                                           // se par,
    alert('O dobro de ' + num + ' é: ' + num * 2);             // mostra o dobro
  } else {                                                     // senão,
    alert('O triplo de ' + num + ' é: ' + num * 3);            // mostra triplo
  }
} while (true)                  // enquanto verdade (só sai do laço, pelo break) 
 alert('Bey, bye...');