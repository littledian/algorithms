import BaseSort from './base-sort'

export default class SelectionSort extends BaseSort {
  sort (array) {
    if (!Array.isArray(array)) {
      return
    }

    const length = array.length
    for (let i = 0; i < length; i++) {
      let min = i

      for (let j = i + 1; j < length; j++) {
        if (array[min] > array[j]) {
          min = j
        }
      }

      this.exchange(array, i, min)
    }

    return array
  }
}
