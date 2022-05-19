function doC(number) {
    var number = parseFloat(number)
    let ndC = (number - 32) / 1.8
    document.getElementById("outCelsius").innerHTML= ndC
}