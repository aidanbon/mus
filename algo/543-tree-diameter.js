/*
 * 543 - Tree Diameter
 */

// constructor
function TreeNode (val) {
    this.val = val
    this.left = this.right = null
}

let maxDepth = -1
let maxDiameter = []

const getDepth = (node) => {
    if (node === null) {
        return 0
    }
    const leftDepth = getDepth(node.left)
    const rightDepth = getDepth(node.right)
    const myDepth = Math.max(leftDepth, rightDepth) + 1
    maxDepth = Math.max(maxDepth, leftDepth + rightDepth + 1)
    // console.log(`node ${node.val} : ${myDepth}`)
    return myDepth
}

const getPath = (node) => {
    if (node === null) {
        return []
    }
    const leftPath = getPath(node.left)
    const rightPath = getPath(node.right)
    const myPath = leftPath.length > rightPath.length ? leftPath : rightPath
    // console.log(node.val, typeof(leftPath), typeof(rightPath), typeof(longerPath))
    const myDiameter = leftPath.concat(node.val, rightPath)
    if (maxDiameter.length < myDiameter.length) {
        maxDiameter = myDiameter
    }
    myPath.push(node.val)
    return myPath
}

const t10 = new TreeNode(10)
const t6 = new TreeNode(6)
const t12 = new TreeNode(12)
const t4 = new TreeNode(4)
const t8 = new TreeNode(8)
const t2 = new TreeNode(2)
const t5 = new TreeNode(5)

t10.left = t6
t10.right = t12
t6.left = t4
t6.right = t8
t4.left = t2
t4.right = t5

// calculate count only
console.log(getDepth(t10))
console.log(`maxDepth = ${maxDepth}`)

// calculate full path
console.log(getPath(t10))
console.log(`maxDiameter = ${maxDiameter}`)

