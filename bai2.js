let radius = prompt("nhập bán kính")
function bai2() {
    chuvi = radius * 2 * Math.PI
    return chuvi.toFixed(3)
}
function  bai21() {
    dientich = Math.pow(radius,2) * Math.PI
    return dientich.toFixed(3)
}

console.log( bai2())
console.log(bai21())