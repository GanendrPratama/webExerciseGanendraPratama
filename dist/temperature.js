const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

document.addEventListener("DOMContentLoaded", function () {
    var tempConv = document.getElementById("convertTemp");
    tempConv.addEventListener("click", convTemp);
});

async function convTemp() {
    var toConvert = document.getElementById("input").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    var inOffset, botValue, outOffset, topValue, convUnit;

    switch (fromUnit) {
        case "celcius":
            inOffset = 0;
            botValue = 5;
            break;
        case "fahrenheit":
            inOffset = 32;
            botValue = 9;
            break;
        case "Reamur":
            inOffset = 0;
            botValue = 4;
            break;
        case "Kelvin":
            inOffset = 273;
            botValue = 5;
            break;
    }

    switch (toUnit) {
        case "celcius":
            outOffset = 0;
            topValue = 5;
            break;
        case "fahrenheit":
            outOffset = 32;
            topValue = 9;
            break;
        case "reamur":
            outOffset = 0;
            topValue = 4;
            break;
        case "kelvin":
            outOffset = 273;
            topValue = 5;
            break;
    }

    convUnit = (parseFloat(toConvert) - inOffset) * topValue / botValue + outOffset;

    var convRes = document.getElementById("convRes");

    // Display the process for a few seconds
    convRes.innerHTML = "<p> calculating..." +"<h2>"+ "(" + toConvert +"-"+ inOffset +")"+"*"+ topValue + "/" + botValue + "+" + outOffset +"</h2>"+"</p>"
    await sleep(2000); // Wait for 2000 milliseconds (2 seconds)

    // Construct the HTML string with the result
    var resultHtml = "<p> the result is:" + "<h2>" + convUnit + "</h2>";

    // Set the HTML content of convRes
    convRes.innerHTML = resultHtml;
}
