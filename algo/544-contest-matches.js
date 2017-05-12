/*
 * 544 - Contest Matches
 */
const group = (arr) => {
    const newArr = []
    const arrLen = arr.length
    const lastIdx = arrLen - 1
    const midIdx = Math.floor(arrLen / 2)
    let i
    for (i=0; i<midIdx; i++) {
        newArr.push(`(${arr[i]},${arr[lastIdx-i]})`)
    }
    console.log('---i =', i)
    if (newArr.length * 2 < arrLen) {
        newArr.push(`(${arr[i]})`)
    }
    return newArr
}

let arr = [1,2,3,4,5,6,7,8]
while (arr.length > 1) {
    arr = group(arr)
}
console.log(arr)
