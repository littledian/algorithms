import binarySearch from './binary-search'

/**
 * twoSumFast
 * @param array
 * @returns {number}
 */
export default function twoSumFast (array) {
  const arr = array.sort((a, b) => a - b)

  const n = arr.length
  let count = 0

  for (let i = 0; i < n; i++) {
    if (binarySearch(-arr[i], arr) > i) {
      count++
    }
  }

  return count
}
