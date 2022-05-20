let num= +prompt("nhập vào số cần tính")
let res = 1
function bai3() {
    for (let i=1 ; i<=num ; i++ ) {
        res = res * i


    }
    return res

}
 alert(bai3())