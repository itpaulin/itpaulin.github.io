// ATIVIDADE 01

const button01 = document.querySelector("#somar")


const somar = (num1, num2) => num1 + num2

const obtemValor = seletor => {
    const val = document.querySelector(seletor)
    let num = isNaN(parseFloat(val.value)) ? 0 : parseFloat(val.value)
    val.value = ""
    return num
}

const escreveValor = (seletor, valor) => {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).textContent = ""
    document.querySelector(seletor).appendChild(nodeConteudo)
}


button01.addEventListener("click", () => {
    const num1 = obtemValor("#val01")
    const num2 = obtemValor("#val02")
    escreveValor("#result01", somar(num1, num2))

})

// ATIVIDADE 02

const button02 = document.querySelector("#descobrir")

const maiorT = (num1, num2) => {
    let resp = ""
    if (num1 > num2)
        resp = `O número ${num1} é maior que ${num2}`
    else if (num2 > num1)
        resp = `O número ${num2} é maior que ${num1}`
    else
        resp = `Os números são iguais`
    return resp
}

button02.addEventListener("click", () => {
    const num1 = obtemValor("#val03")
    const num2 = obtemValor("#val04")
    escreveValor("#result02", maiorT(num1, num2))
})

// ATIVIDADE 03

const button03 = document.querySelector("#PROCURA")

const ehPrimo = (num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return true;
};

button03.addEventListener("click", () => {
    const num = obtemValor("#val05")
    escreveValor("#result03", ehPrimo(num) ? "É primo!" : "Não é primo!")
})

// ATIVIDADE 04

const button04 = document.querySelector("#hipotenusa")

const calculaHipotenusa = (ca, co) => Math.hypot(ca, co);

button04.addEventListener("click", () => {
    const ca = obtemValor("#val06")
    const co = obtemValor("#val07")
    escreveValor("#result04", calculaHipotenusa(ca, co))
})

// ATIVIDADE 05

const button05 = document.querySelector("#salario")

const calculaSalario = (num1, percent) => {

    percent = percent / 100
    return num1 + (num1 * percent)

}

button05.addEventListener("click", () => {
    const num1 = obtemValor("#val08")
    const percent = obtemValor("#val09")
    escreveValor("#result05", calculaSalario(num1, percent))
})
