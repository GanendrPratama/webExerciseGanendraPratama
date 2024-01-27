document.addEventListener("DOMContentLoaded", function () {
    var currConv = document.getElementById("convertMon");
    currConv.addEventListener("click", convCurrency);
});

function convCurrency() {
    var money = document.getElementById("money").value;
    var fromCurr = document.getElementById("fromCurr").value;
    var toCurr = document.getElementById("toCurr").value;

    const appId = 'ff22679eb1da4b7699ceaa8d85007c88';
    const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;

    var stdMon; // Declare stdMon before using it

    switch (toCurr) {
        case 'IDR': {
            stdMon = 1000;
        } break;

        case 'USD': {
            stdMon = 1;
        } break;

        case 'JPY': {
            stdMon = 100;
        } break;

        case 'BTC': {
            stdMon = 1;
        } break;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var exchangeRate = data.rates[toCurr];
            var convertedAmount = (money * exchangeRate).toFixed(2);
            var stdEx = (stdMon * exchangeRate).toFixed(2);
            var resultElement = document.getElementById("currRes");
            var stdElement = document.getElementById("stdEx");
            resultElement.innerHTML = `<p>${money} ${fromCurr} is ${convertedAmount} ${toCurr}</p>`;
            stdElement.innerHTML = `<p>${stdMon} ${toCurr} is ${stdEx} ${fromCurr} </p>`;
        })
        .catch(error => {
            console.error("Error fetching exchange rates:", error);
        });
}
