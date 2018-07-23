import BaseSort from './base-sort'

export default class InsertionSort extends BaseSort {
  sort (array) {
    if (!Array.isArray(array)) {
      return
    }

    debugger
    const n = array.length

    for (let i = 1; i < n; i++) {
      for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
        this.exchange(array, j, j - 1)
      }
    }

    return array
  }
}
