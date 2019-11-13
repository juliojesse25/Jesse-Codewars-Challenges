function findMedianSortedArrays (nums1, nums2) {
  // merge the two arrays
  // sort the two arrays in ascending order
  const mergedArray = nums1.concat(nums2).sort(function (a, b) {
    return a - b
  })
  // remove the last and first elements from the sorted array
  // until there are two elements left
  while (mergedArray.length > 2) {
    mergedArray.shift()
    mergedArray.pop()
  }

  // if the remaining length === 2, find the average
  if (mergedArray.length === 2) {
    return (mergedArray[0] + mergedArray[1]) / 2
  }
  // if the remaining length === 1, return the 1 element
  if (mergedArray.length === 1) {
    return mergedArray[0]
  }
  console.log(mergedArray)
}

module.exports = findMedianSortedArrays
