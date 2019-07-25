// function finalSolution (A) {
//   A.sort((a, b) => a - b)
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === A[i + 1]) {
//       A.splice(i, 2)
//       i = 0
//     }
//   }
//   return A[0]
// }
// const B = [7, 11, 6, 8, 3, 9, 8, 11, 7, 3, 6]
// finalSolution(B)

// function solution (A) {
//   for (let i = 0; i < A.length; i++) {
//     let count = 0
//     for (let j = 0; j < A.length; j++) {
//       if (A[i] === A[j]) {
//         count++
//       }
//     }
//     if (count % 2 !== 0) {
//       return A[i]
//     }
//   }
//   return -1
// }

function solution (A) {
  let result = 0

  for (const element of A) {
    // Apply Bitwise XOR to the current and next element
    result = result ^ element
  }

  return result
}

module.exports = solution
