const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

async function convertValues() {
  const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");


  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL")
    .then(response => response.json());

  const dolar = data.USDBRL.high;
  const euro = data.EURBRL.high;
  const libra = data.GBPBRL.high;
  const bitcoin = data.BTCBRL.high;

  let convertedValue = 0;

  if (currencySelect.value === "dolar") {
    convertedValue = inputCurrencyValue / dolar;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(convertedValue);
  }

  if (currencySelect.value === "euro") {
    convertedValue = inputCurrencyValue / euro;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(convertedValue);
  }

  if (currencySelect.value === "libra") {
    convertedValue = inputCurrencyValue / libra;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(convertedValue);
  }

  if (currencySelect.value === "bitcoin") {
    convertedValue = inputCurrencyValue / bitcoin;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      maximumFractionDigits: 8
    }).format(convertedValue);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./assets/estados-unidos (1) 1.png";
  }

  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/Euro.png";
  }

  if (currencySelect.value === "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImage.src = "./assets/libra 1.png";
  }

  if (currencySelect.value === "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin 1.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
