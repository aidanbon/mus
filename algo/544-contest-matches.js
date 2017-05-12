/*
 * 544 - Contest Matches
 */
const group = (arr) => {
    if (arr.length === 0) {
        return '()'
    }
    if (arr.length === 1) {
        return arr[0]
    }
    const newArr = []
    let startIdx = 0
    let endIdx = arr.length - 1
    while (startIdx < endIdx) {
      newArr.push(`(${arr[startIdx]},${arr[endIdx]})`)
      startIdx++
      endIdx--
    }
    // console.log(newArr)
    return(group(newArr))
}

const compute = (n) => {
    const arr = []
    let i
    for (i=1; i<=n; i++) {
        arr.push(i)
    }
    return group(arr)
}

console.log(compute(10)) // (((1,10),(5,6)),((2,9),(4,7)))
