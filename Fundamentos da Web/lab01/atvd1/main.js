const numInput = document.querySelector("#num");
const button = document.querySelector("#submit-button");

button.addEventListener("click", () => {
  let result = document.querySelector("#result");
  let num = numInput.value;
  console.log(num);
  let i, a, x;
  a = num;
  for (i = num - 1; i > 0; i--) {
    a = a * i;
    result = a;
  }
  document.querySelector(
    "#result"
  ).innerHTML += `Fatorial de ${num} = ${result} <br>`;
});
