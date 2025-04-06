const convertButton = document.querySelector(".convert-button")
const firstSelect = document.querySelector(".first-select")
const secondSelect = document.querySelector(".second-select")

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValue = document.querySelector(".currency-value-one")
    const currencyValueConverted = document.querySelector(".currency-value-two")

    const dolarToday = 5.60
    const euroToday = 6.19
    const libraToday = 7.35
    const bitcoinToday = 460.302

    if (firstSelect.value == "real") {
        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)
    }
    if (secondSelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)
    }
    if (secondSelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
    }
    if (secondSelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday)
    }
    if (secondSelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency / bitcoinToday)
    }
}

function changeToSelect(){
    const firstCurrencyParagraph = document.querySelector("#first-currency-paragraph")
    const firstImage = document.querySelector("#first-flag")
    const secondCurrencyParagraph = document.querySelector("#second-currency-paragraph")
    const secondImage = document.querySelector("#second-flag")

    if (firstSelect.value == "real"){
        firstCurrencyParagraph.innerHTML = "Real"
        firstImage.src = "./assets/real.png"
    }
    if (secondSelect.value == "dolar"){
        secondCurrencyParagraph.innerHTML = "Dólar americano"
        secondImage.src = "./assets/dolar.png"
    }
    if (secondSelect.value == "euro"){
        secondCurrencyParagraph.innerHTML = "Euro"
        secondImage.src = "./assets/euro.png"
    }
    if (secondSelect.value == "libra"){
        secondCurrencyParagraph.innerHTML = "Libra"
        secondImage.src = "./assets/libra.png"
    }
    if (secondSelect.value == "bitcoin"){
        secondCurrencyParagraph.innerHTML = "Bitcoin"
        secondImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}

secondSelect.addEventListener("change", changeToSelect)
convertButton.addEventListener("click", convertValues)