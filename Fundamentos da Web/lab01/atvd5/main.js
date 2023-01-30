const button = document.querySelector("#submit-button");

function ehPrimo(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return true;
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return true;
};

button.addEventListener("click", () => {
  for (let i = 2; i <= 1000; i++) {
    if (ehPrimo(i) === true) {
      document.querySelector("#result").innerHTML += `${i} <br>`;
    }
  }
});
