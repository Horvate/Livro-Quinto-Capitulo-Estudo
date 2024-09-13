const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(form.inNumero.value);
  let divisores = "";
  let lista = "";

  for (let i = 1; i < num; i++) {
    if(num % i == 0) {
    
    divisores += `${i} ,`; 
   
    }
  }
    
     lista += `Divisores do ${num}: ${divisores.slice(0, -1)} (Soma: ${num})<br>`;
     resp.innerHTML = lista;
  
  

  if (num % 2 == 0) {
    lista += `${num} É um número perfeito.`;
    resp.innerHTML = lista;
  } else {
    lista += `${num} Não é um número perfeito.`;
    resp.innerHTML = lista;
  }
  
  form.inNumero.focus();
  form.reset();
  
  
});