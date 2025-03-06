const convertButton = document. querySelector(".convert-button")
const currencySelect = document. querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document. querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor en Real
    const currencyValueConverted = document.querySelector(".currency-value") //outras moedas
 

console.log(currencySelect.value)
    const dolarToday = 5.83
    const euroToday = 6.50
    const libraToday= 7.55
    const bitcoinToday= 546.628
   
    
    if (currencySelect.value == "dolar"){  //Se o select estiver selecionado Dolar, entre aqui
        currencyValueConverted .innerHTML = new Intl.NumberFormat("en-US" , {
            style:"currency",
            currency: "USD"
        })  .format(inputCurrencyValue / dolarToday)
    
    }

    if (currencySelect.value == "euro") {  //Se o select estiver selecionado Euro, entre aqui
        currencyValueConverted .innerHTML = new Intl.NumberFormat("de-DE" , {
            style:"currency",
            currency:"EUR"
        }) .format (inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {  //Se o select estiver selecionado Libra, entre aqui
        currencyValueConverted .innerHTML = new Intl.NumberFormat("de-UK" , {
            style:"currency",
            currency: "GBP"
        })  .format(inputCurrencyValue / libraToday)
    
    }

    if (currencySelect.value == "bitcoin"){  //Se o select estiver selecionado Bitcoin, entre aqui
        currencyValueConverted .innerHTML = new Intl.NumberFormat("en-US" , {
            style:"currency",
            currency: "BTC"
        })  .format(inputCurrencyValue / bitcoinToday)
    
    }

    
    currencyValueToConvert .innerHTML = new  Intl.NumberFormat("pt-BR", {  //formatação da moeda Intl.NumberFormat
        style:"currency",
        currency:"BRL"
     }) .format(inputCurrencyValue) 
}


function changeCurrency() {
   const currencyName = document. getElementById("currency-name")
   const currencyImage = document. querySelector(".currency-img")

    
   if (currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/estados-unidos (1) 1.png"
  }
   

   if (currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/Euro.png"
   }

   if (currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "assets/libra 1.png"
   }

   if (currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin 1.png"
   }


   convertValues()

}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)

