import binarySearch from './binary-search'

/**
 * threeSumFast
 * @param array
 * @returns {number}
 */
export default function threeSumFast (array) {
  if (!Array.isArray(array)) return -1

  const arr = array.sort((a, b) => a - b)

  const n = arr.length
  let count = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (binarySearch(-(arr[i] + arr[j]), arr) > j) {
        count++
      }
    }
  }

  return count
}
