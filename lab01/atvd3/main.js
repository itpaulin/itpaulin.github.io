const result = document.querySelector("#result");
const button = document.querySelector("#submit-button");

button.addEventListener("click", () => {
  let aux = 0;
  for (let i = 0; i <= 1000; i++) {
    if (i % 2 == 0) {
      aux = aux + i;
    }
  }
  document.querySelector("#result").innerHTML += `${aux} <br>`;
});
