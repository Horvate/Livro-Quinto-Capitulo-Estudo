const form = document.querySelector('form');   // obtém os elementos da página
const resp = document.querySelector('pre');

form.addEventListener('submit', (e) => {         // "executa" evento submit do form
  e.preventDefault();                      // evita o envio do form

  const numero = Number(form.inNumero.value);         // obtém número informado
  let resposta = ""                 // variável do tipo string, para concatenar a resposta

  // cria um laço de repetição  (i começa em 1 e é incrementado até 10)

  for (let i = 1; i <= 10; i++) {
    // a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
    resposta = resposta + numero + 'x' +i + "=" + (numero * i) + "\n";
    // resposta = resposta + numero + "x" + i = (numero * i) + "\n"
  }
  // o conteúdo da tag pre é alterado para exibir a tabuada do número
  resp.innerHTML = resposta;
})