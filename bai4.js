let num= prompt("nhập giá trị")
let flag = false
function bai4() {
    if ( !isNaN(num)) {
        flag=true

        return flag
    } else {
        flag = false
        return flag

    }
}

console.log(bai4())
