const form = document.querySelector('form');       // obtém elementos da página
const resp1 = document.querySelector('#outEspaco');

form.addEventListener('submit', (e) => {    // "escuta" evento submit do form
  e.preventDefault();        // evitaenvio do form

  const num = Number(form.inNumero.value);    // obtém número informado 
  let estrela = "";        // variável que irá concatenar as estrelas/lacos

  for (let i = 1; i <= num; i++) { // cria laço de repetição de 1 até num
    if (i % 2 == 1) {
      estrelas += "*";          // na posição impar do i: *
    } else {
      estrelas += "-";     // naposição par: -
    }
  }
     resp1.innerHTML = estrelas;      // exibe as estrelas
});