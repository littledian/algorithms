import BaseHashST from './base-hash-st'

export default class LinearProbingHashST extends BaseHashST {
  constructor (m = 16) {
    super(m)
    this.n = 0
    this.k = {}
    this.vals = {}
  }

  _resize (cap) {
    const t = new LinearProbingHashST(cap)
    for (let i = 0; i < this.m; i++) {
      if (this.k[i] !== undefined) {
        t.put(this.k[i], this.vals[i])
      }
    }

    this.k = t.k
    this.vals = t.vals
    this.m = t.m
  }

  put (key, value) {
    if (this.n >= this.m / 2) this._resize(this.m * 2)

    let i
    for (i = this._hash(key); this.k[i] !== undefined; i = (i + 1) % this.m) {
      if (this.k[i] === key) {
        this.vals[i] = value
        return
      }
    }

    this.k[i] = key
    this.vals[i] = value
    this.n++
  }

  get (key) {
    for (let i = this._hash(key); this.k[i] !== undefined; i = (i + 1) % this.m) {
      if (this.k[i] === key) {
        return this.vals[i]
      }
    }

    return undefined
  }

  delete (key) {
    if (!this.contains(key)) return

    let i = this._hash(key)
    while (this.k[i] !== key) {
      i = (i + 1) % this.m
    }

    this.k[i] = undefined
    this.vals[i] = undefined
    i = (i + 1) % this.m

    while (this.k[i] !== undefined) {
      const key = this.k[i]
      const value = this.vals[i]
      delete this.k[i]
      delete this.vals[i]
      this.n--
      this.put(key, value)
      i = (i + 1) % this.m
    }

    this.n--
    if (this.n > 0 && this.n === this.m / 8) this._resize(this.m / 2)
  }
}
