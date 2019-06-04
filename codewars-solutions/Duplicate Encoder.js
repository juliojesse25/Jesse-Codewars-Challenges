function duplicateEncode (word) {
  const resultArray = word.toLowerCase().split('')
  const answer = []

  const charCount = function (char) {
    let count = 0
    resultArray.forEach(letter => {
      if (letter === char) {
        count++
      }
    })
    return count
  }

  resultArray.forEach(char => {
    if (charCount(char) > 1) {
      answer.push(')')
    } else {
      answer.push('(')
    }
  })
  return answer.join('')
}

module.exports = duplicateEncode
