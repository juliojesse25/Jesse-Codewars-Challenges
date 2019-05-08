function persistence (num, count = 0) {
  // Check if the num is a single digit
  if (String(+num).charAt(0) === num) {
    // return 0 if true
    return 0
  } else {
    // convert the number to a string and split the string
    const splitString = num.toString().split('')
    // declare a function to get the product of numbers in an array
    const multiply = (accumulator, currentValue) => accumulator * currentValue
    // multiply the numbers in the array returned from the split
    const product = splitString.reduce(multiply)
    // increase the multiplicative persistence by 1
    count++
    // check if the product is a single digit
    if (String(+product).charAt(0) === product) {
      // return the multiplicative persistence if the product is a single digit
      return count
      // else call the persistence function on the product
    } else {
      return persistence(product, count)
    }
  }
}

module.exports = persistence
