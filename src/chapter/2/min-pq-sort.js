import BaseSort from './base-sort'

export default class MinPQSort extends BaseSort {
  sink (array, j, n) {
    while (j * 2 <= n) {
      let k = j * 2
      if (k < n && array[k] > array[k + 1]) {
        k++
      }
      if (array[j] > array[k]) {
        this.exchange(array, j, k)
        j = k
      } else {
        break
      }
    }
  }

  sort (array) {
    if (!Array.isArray(array)) {
      return
    }

    let n = array.length
    array[n] = array[0]

    for (let k = Math.floor(n / 2); k >= 1; k--) {
      this.sink(array, k, n)
    }

    while (n > 1) {
      this.exchange(array, 1, n--)
      this.sink(array, 1, n)
    }

    array.splice(0, 1)
    return array
  }
}
