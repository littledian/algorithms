import QuickSort from './quick-sort'

export default class Quick3WaySort extends QuickSort {
  _sort (array, lo, hi) {
    if (hi < lo) return

    let lt = lo
    let i = lo + 1
    let gt = hi
    let v = array[lo]

    while (i <= gt) {
      if (array[i] < v) {
        this.exchange(array, i++, lt++)
      } else if (array[i] > v) {
        this.exchange(array, i, gt--)
      } else {
        i++
      }
    }

    this._sort(array, lo, lt - 1)
    this._sort(array, gt + 1, hi)
  }
}
