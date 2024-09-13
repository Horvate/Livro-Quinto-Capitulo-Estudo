const form = document.querySelector('form');
const resp1 = document.querySelector('h3');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(form.inNumero.value);
  const produto = form.inFruta.value;
  let lista = "";

 for (let i = 1; i <= num; i++) {
   lista += ` ${produto} * `
 }
   resp1.innerHTML = lista;
});