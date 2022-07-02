const button = document.querySelector("#submit-button");

button.addEventListener("click", () => {
  let a;
  a = 4;
  for (let i = 1; i <= 30; i++) {
    document.querySelector("#result").innerHTML += `4 ** ${i} = ${a ** i} <br>`;
  }
  console.log(result);
});
