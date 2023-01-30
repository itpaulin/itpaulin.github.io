/*for (position in numbers) {
    console.log(position);
}
for (number of numbers) {
    console.log(number);
}

numbers.forEach(function (number, index) {
    console.log("Numero : " + number + " na position: " + index);

})*/

// 1.Funções Numéricas

const numbers = [1, 2, 3];
const numbersTwo = [1, 2, 3, 4, 5, 6];

function sum(array) {
    let result = 0;
    for (number of array) {
        result = result + number;

    }
    console.log(result);
}
function sumOdds(array) {
    let result = 0;
    for (number of array) {
        if (number % 2 != 0) {
            result = result + number;
        }
    }
    console.log(result);
}
function product(array) {
    let result = 1;
    for (number of array) {
        result = result * number;
    }
    console.log(result);
}
// FIM

//2.Números Primos

