export default class BaseSort {
  sort () {}

  exchange (array, p, q) {
    if (!Array.isArray(array)) {
      return
    }

    ;[array[p], array[q]] = [array[q], array[p]]
  }

  isSorted (array, asc = true) {
    if (!Array.isArray(array)) {
      return false
    }

    for (let i = 1; i < array.length; i++) {
      if ((array[i] < array[i - 1] && asc) || (array[i] > array[i - 1] && !asc)) {
        return false
      }
    }

    return true
  }
}
