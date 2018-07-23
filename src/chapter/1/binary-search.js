/**
 * binarySearch
 * @param key
 * @param array
 * @returns {number}
 */
export default function binarySearch (key, array) {
  if (!Array.isArray(array)) return -1

  const arr = array.sort((a, b) => a - b)
  let lo = 0
  let hi = arr.length - 1

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    if (arr[mid] > key) {
      hi = mid - 1
    } else if (arr[mid] < key) {
      lo = mid + 1
    } else {
      return mid
    }
  }

  return -1
}
