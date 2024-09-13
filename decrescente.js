const form = document.querySelector('form');  // obtém elementos da página
const resp = document.querySelector('h3');

form.addEventListener('submit', (e) => {
  e.preventDefault();                           // evita o envio do form

  const numero = Number(form.inNumero.value);      // obtém número informado
  let resposta = 'Entre ' + numero + ' e 1: '           // string para montar a resposta

  for (let i = numero; i > 0; i = i - 1) {           // cria um form decrescente
    resposta = resposta + i + ',';               // resposta acumula números (e virgula)
  }
  resp.innerText = resposta           // exibe a resposta 
});wa