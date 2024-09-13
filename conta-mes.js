const form = document.querySelector('form');            // obtém elementos da página
const resp1 = document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2')

let resposta = "";           // string com a resposta a ser exibida
let numContas = 0;           // inicializar contador... 
let valTotal = 0;           // e acmulador (variáveis globais)

form.addEventListener("submit", (e) => {        // "escuta" evento submit do form
  e.preventDefault();              // evita envio do form

  const descricao = form.inDescricao.value;       // obtém dados da conta
  const valor = Numb     er(form.inValor.value);

  numContas++              // adiciona valores no contador e acumulador
  valTotal += valor 
  resposta += descricao + " - R$: " + valor.toFixed(2) + "\n"

  resp1.innerHTML = resposta;
  resp2.innerHTML = numContas + ' Conta(s) - Total R$: ' + valTotal.toFixed(2);

  form.inDescricao = "";        // limpa campos do form
  form.inValor = "";
  form.inDescricao.focus();           // posiciona no campo inDescricao do form
});  