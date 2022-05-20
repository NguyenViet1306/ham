 let  num = +prompt("nhập giá trị")
 let flag = true
function bai6() {
    if ( num > 0 ) {
        flag=true
    } else {
        flag=false
    }
    return flag
}
alert(bai6())