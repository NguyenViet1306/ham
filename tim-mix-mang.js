function mixmang(arr) {
    let mix= arr[0]
    for ( let i=0 ; i< arr.length ; i++) {
        if ( mix> arr[i] ) {
            mix = arr[i]
        }
    }
    return mix
}
    let arr1= [3, 5, 1, 8, -3, 7, 8]
    let arr2= [7, 12, 6, 9, 20, 56, 89]
    let arr3= []
    let arr4= [0, 0, 0, 0, 0, 0]
    // let mix = mixmang(arr)
    // let mix= mixmang(arr1)
    console.log(mixmang(arr1))
    console.log(mixmang(arr2))
    console.log(mixmang(arr3))
    console.log(mixmang(arr4))

