let Feet= parseFloat(prompt("nhập giá trị Feet"))
let Meters= parseFloat(prompt("nhập giá trị Meters"))

function feetToMeters(feet) {
    a = 0.305 * feet
    return a
}
function metersToFeet(met) {
    b = 3.279 * met
    return b
}

alert(Feet + " feet " + "= " + feetToMeters(Meters) + " meter")
alert(Meters+ " meters " + "= " + metersToFeet(Feet) + " feet")
