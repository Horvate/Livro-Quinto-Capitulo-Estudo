const form = document.querySelector('form');
const resp = document.querySelector('#outResp1');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const numChin = Number(form.inChinchilas.value);
  const numAno = Number(form.inAnos.value);
  let chinchilas = numChin;
  let lista = "";
  lista += `1º Ano: ${numChin} Chinchilas<br>`;
  for(let i = 2; i <= numAno; i++) {
    chinchilas *= 3;
    lista += `${i}º Ano: ${chinchilas} Chinchilas<br>`;
  }
  resp.innerHTML = lista;
});  