import UnSortedST from './unsorted-st'

export default class BashHashST extends UnSortedST {
  constructor (m = 97) {
    super()
    this.m = m
  }

  _hash (key) {
    if (typeof key === 'string') return this._stringHash(key)
  }

  _stringHash (key) {
    let h = 0

    for (let i = 0; i < key.length; i++) {
      h = 31 * h + key.charCodeAt(i)
    }

    return (h & 0x7fffffff) % this.m
  }
}
