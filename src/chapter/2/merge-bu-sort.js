import MergeSort from './merge-sort'

export default class MergeBuSort extends MergeSort {
  sort (array) {
    if (!Array.isArray(array)) {
      return
    }

    const n = array.length
    for (let sz = 1; sz < n; sz += sz) {
      for (let lo = 0; lo < n - sz; lo += (sz + sz)) {
        this._merge(array, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, n - 1))
      }
    }

    return array
  }
}
