let num1= +prompt("nhập số thứ 1")
let num2= +prompt("nhập số thứ 2")

function bai7() {
    [ num1 , num2 ]= [ num2 , num1 ]
    console.log("số thứ 1 là: " + num1)
    console.log("số thứ 2 là: " + num2)
}

console.log(bai7())