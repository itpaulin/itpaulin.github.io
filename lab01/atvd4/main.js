const button = document.querySelector("#submit-button");

button.addEventListener("click", () => {
  let x = 1;
  let ant,
    nextTerm = 0;
  for (i = 1; i <= 100; i++) {
    document.querySelector("#result").innerHTML += `${nextTerm} <br>`;
    ant = x;
    x = nextTerm;
    nextTerm = ant + x;
  }
});
