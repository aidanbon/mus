// IXI

const r2i = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const convert = str => 
  str.split('')
    .map(char => r2i[char.toUpperCase()])
    .reduce((sofar, val, idx, arr) => {
       const adjVal = (arr[idx+1] && arr[idx+1] > val) ? -val : val
       return sofar + adjVal
      }, 0)

if (!process.argv[2]) {
  console.log('missing input roman str')
  process.exit(-1)
}
const res = convert(process.argv[2])
console.log(res)


