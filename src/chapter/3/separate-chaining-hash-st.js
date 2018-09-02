import SequentialSearchST from './sequential-search-st'
import BashHashST from './base-hash-st'

export default class SeparateChainingHashSt extends BashHashST {
  constructor (m = 997) {
    super(m)
    this.st = []
    for (let i = 0; i < m; i++) {
      this.st.push(new SequentialSearchST())
    }
  }

  get (key) {
    return this.st[this._hash(key)].get(key)
  }

  put (key, value) {
    this.st[this._hash(key)].put(key, value)
  }

  delete (key) {
    this.st[this._hash(key)].delete(key)
  }
}
