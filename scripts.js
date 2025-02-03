const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.82
    const euroToday = 6.1
    const libraToday = 7.29
    const bitcoinToday = 98.142

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "bit") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-sv", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)




    console.log(inputCurrencyValue)

}
function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/USA.png"
    }

    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    }

    if (currencySelect.value == "libra") {

        currencyName.innerHTML = "libra"
        currencyImage.src = "./assets/libra.png"

    }

    if (currencySelect.value == "bit") {

        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"

    }
    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


