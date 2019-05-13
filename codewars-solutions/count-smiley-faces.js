// return the total number of smiling faces in the array
function countSmileys (arr) {
// Declare a counter to keep track of the smiley faces in arr
  let counter = 0
  // check if the provided arr is empty
  if (arr.length < 1) {
    // return 0 if it is empty
    return 0
  } else {
    // Declare an array with all the possible smiley faces
    const validSmileys = [':)', ':-)', ':~)', ':D', ':-D', ':~D', ';)', ';-)', ';~)', ';D', ';-D', ';~D']
    // For each item in arr, check if it is one of the smiley faces in the validSmileys array
    // Increase the counter if it is
    arr.forEach(item => validSmileys.includes(item) ? counter++ : counter)
    // return the counter value which is the number of all elements in arr which matched a valid smiley face.
    return counter
  }
}

module.exports = countSmileys
