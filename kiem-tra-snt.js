let num = parseInt(prompt("nhập số"))
function primeNum() {

    let flag = false
    if (num < 2) {
        flag= true
        alert('kp số nt')
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
           if
           (num%i ===0) {
               flag = true
               break
           }
        }
    if (flag==false){
        alert(num+ "là số nguyên tố")}
    else{
            alert(num+"không phải số nguyên tố")}
}}

primeNum()