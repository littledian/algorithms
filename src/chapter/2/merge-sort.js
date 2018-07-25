import BaseSort from './base-sort'

export default class MergeSort extends BaseSort {
  _merge (array, lo, mid, hi) {
    let i = lo
    let j = mid + 1

    let aux = []

    for (let k = lo; k <= hi; k++) {
      aux[k] = array[k]
    }

    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        array[k] = aux[j++]
      } else if (j > hi) {
        array[k] = aux[i++]
      } else if (aux[i] > aux[j]) {
        array[k] = aux[j++]
      } else {
        array[k] = aux[i++]
      }
    }
  }

  _sort (array, lo, hi) {
    if (hi <= lo) return
    let mid = lo + Math.floor((hi - lo) / 2)

    this._sort(array, lo, mid)
    this._sort(array, mid + 1, hi)
    this._merge(array, lo, mid, hi)
  }

  sort (array) {
    if (!Array.isArray(array)) {
      return
    }

    this._sort(array, 0, array.length - 1)

    return array
  }
}
