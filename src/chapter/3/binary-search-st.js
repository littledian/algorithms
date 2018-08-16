import SortedSt from './sorted-st'

export default class BinarySearchST extends SortedSt {
  constructor () {
    super()
    this.n = 0
    this._keys = []
    this._values = []
  }

  get (key) {
    if (this.isEmpty()) return undefined

    const i = this.rank(key)
    if (i < this.n && this._keys[i] === key) return this._values[i]
    else return undefined
  }

  put (key, value) {
    const i = this.rank(key)
    if (i < this.n && this._keys[i] === key) {
      this._values[i] = value
      return
    }

    for (let j = this.n; j > i; j--) {
      this._keys[j] = this._keys[j - 1]
      this._values[j] = this._values[j - 1]
    }

    this._keys[i] = key
    this._values[i] = value
    this.n++
  }

  rank (key) {
    let lo = 0
    let hi = this.n - 1

    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2)
      if (key < this._keys[mid]) hi = mid - 1
      else if (key > this._keys[mid]) lo = mid + 1
      else return mid
    }

    return lo
  }

  min () {
    return this._keys[0]
  }

  max () {
    return this._keys[this.n - 1]
  }

  select (k) {
    return this._keys[k]
  }

  ceiling (key) {
    const i = this.rank(key)
    return this._keys[i]
  }

  floor (key) {
    const i = this.rank(key)
    if (this._keys[i] === key) return key
    else return this._keys[i - 1]
  }

  delete (key) {
    const i = this.rank(key)
    if (this._keys[i] === key) {
      this._keys.splice(i, 1)
      this._values.splice(i, 1)
      this.n--
    }
  }

  size (...args) {
    if (args.length === 2) {
      const lo = args[0]
      const hi = args[1]

      if (hi < lo) return 0
      else if (this.contains(hi)) return this.rank(hi) - this.rank(lo) + 1
      else return this.rank(hi) - this.rank(lo)
    } else {
      return this.n
    }
  }

  clear () {
    this.n = 0
    this._keys = []
    this._values = []
  }
}
