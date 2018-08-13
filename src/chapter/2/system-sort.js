import BaseSort from './base-sort'

export default class SystemSort extends BaseSort {
  sort (array) {
    if (!Array.isArray(array)) {
      return
    }

    array.sort((a, b) => a - b)
    return array
  }
}
