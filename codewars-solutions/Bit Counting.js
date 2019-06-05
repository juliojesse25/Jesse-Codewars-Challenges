const countBits = function (n) {
  const nBin = n.toString(2)
  const result = nBin.split('')
  let count = 0
  result.forEach(char => {
    if (char === '1') {
      count++
    }
  })
  return count
}

module.exports = countBits
