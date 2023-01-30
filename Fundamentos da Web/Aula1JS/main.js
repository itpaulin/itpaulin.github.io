const cabecalho = document.getElementById("teste");
const Button = document.querySelector("Button");

cabecalho.innerHTML = "mudança via codigo";

let alterarcabecalho = () => {
  cabecalho.style.color = "yellow";
};

const obtemValor = (seletor) => {
  const val = document.querySelector(seletor);
  return isNaN(parseFloat(val.value)) ? 0 : parseFloat(val.value);
};

const somar = (num1, num2) => num1 + num2;

const escreveValor = (seletor, valor) => {
  const nodeConteudo = document.createTextNode;
  document.querySelector(seletor).appendChild(nodeConteudo);
};

Button.addEventListener("click", () => {
  const num1 = obtemValor("#questao01-val01");
  const num2 = obtemValor("questao01-val02");
  escreveValor("#resp01", somar(num1, num2));
});
