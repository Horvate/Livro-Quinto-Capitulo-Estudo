const form = document.querySelector('form');       //obtém elementos da página
const resp1 = document.querySelector('h3');

form.addEventListener('submit', (e) => {     // "escuta" evento subit do form
  e.preventDefault();                       // evita o envio do form

  const num = Number(form.inNumero.value);     // obtém número informado 
  let numDivisores = 0;                   // declara e inicializa o contador

  for (let i = 1; i <= num; i++) {        // percore todos possíveis divisores do num
    if (num % i == 0){        // verifica se i (1,2,3...) é divisor do num
      numDivisores++         // se é, incrementa contador
    } 
  }
    if (numDivisores == 2) {     // se pussi apenas 2 divisores, é primo
      resp1.innerHTML = num + " É primo"
    } else {
      resp1.innerHTML = num + " Não é primo"
    }
});