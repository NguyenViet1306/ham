

function bai5() {
if ( num1 < num2 && num1 < num3 ){
    return num1
} else {
    if ( num2 > num3 ) {
        return num3
    }
    else  {
        return num2
    }
}

}let num1= +prompt("nhập vào số thứ 1")
let num2= +prompt("nhập vào số thứ 2")
let num3= +prompt("nhập vào số thứ 3")
bai5()
console.log(bai5())

