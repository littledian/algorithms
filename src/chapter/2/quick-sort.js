import BaseSort from './base-sort'

export default class QuickSort extends BaseSort {
  _partition (array, lo, hi) {
    let i = lo
    let j = hi + 1
    let v = array[lo]

    while (true) {
      while (array[++i] < v) {}

      while (array[--j] > v) {}

      if (i >= j) break

      this.exchange(array, i, j)
    }
    this.exchange(array, j, lo)

    return j
  }

  _sort (array, lo, hi) {
    if (hi <= lo) return
    const j = this._partition(array, lo, hi)
    this._sort(array, lo, j - 1)
    this._sort(array, j + 1, hi)
  }

  sort (array) {
    if (!Array.isArray(array)) {
      return
    }

    this._sort(array, 0, array.length - 1)
    return array
  }
}
