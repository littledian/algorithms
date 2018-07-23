import BaseSort from './base-sort'

export default class ShellSort extends BaseSort {
  sort (array) {
    if (!Array.isArray(array)) {
      return
    }

    const n = array.length
    let h = 1

    /**
      eg: n = 1000
          h = 1, 4, 14, 40, 121, 364
     */

    while (h < Math.floor(n / 3)) h = h * 3 + 1

    while (h >= 1) {
      for (let i = h; i < n; i++) {
        for (let j = i; j > 0; j = j - h) {
          if (array[j] < array[j - h]) {
            this.exchange(array, j, j - h)
          } else {
            break
          }
        }
      }

      h = Math.floor(h / 3)
    }

    return array
  }
}
