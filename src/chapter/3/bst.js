import SortedSt from './sorted-st'

class Node {
  constructor (key, value, n) {
    this.key = key
    this.value = value
    this.n = n
    this.left = undefined
    this.right = undefined
  }
}

export default class BST extends SortedSt {
  constructor () {
    super()
    this.root = undefined
  }

  _size (node) {
    return node === undefined ? 0 : node.n
  }

  size (...args) {
    if (args.length === 2) {
      const [lo, hi] = args
      if (hi < lo) return 0
      else if (this.contains(hi)) return this.rank(hi) - this.rank(lo) + 1
      else return this.rank(hi) - this.rank(lo)
    }
    return this._size(this.root)
  }

  _get (node, key) {
    if (node === undefined) return undefined
    if (key < node.key) return this._get(node.left, key)
    else if (key > node.key) return this._get(node.right, key)
    else return node.value
  }

  get (key) {
    return this._get(this.root, key)
  }

  _put (node, key, value) {
    if (node === undefined) return new Node(key, value, 1)

    if (key < node.key) node.left = this._put(node.left, key, value)
    else if (key > node.key) node.right = this._put(node.right, key, value)
    else node.value = value

    node.n = this._size(node.left) + this._size(node.right) + 1
    return node
  }

  put (key, value) {
    this.root = this._put(this.root, key, value)
  }

  _min (node) {
    if (node.left) return this._min(node.left)
    else return node
  }

  min () {
    return this._min(this.root).key
  }

  _max (node) {
    if (node.right) return this._max(node.right)
    else return node
  }

  max () {
    return this._max(this.root).key
  }

  _floor (node, key) {
    if (!node) return undefined
    if (key < node.key) {
      return this._floor(node.left, key)
    } else if (key === node.key) {
      return node
    }

    const t = this._floor(node.right, key)
    if (!t) return node
    else return t
  }

  floor (key) {
    const node = this._floor(this.root, key)
    if (!node) return undefined
    else return node.key
  }

  _ceiling (node, key) {
    if (!node) return undefined
    if (key > node.key) {
      return this._ceiling(node.right, key)
    } else if (key === node.key) {
      return node
    }

    const t = this._ceiling(node.left, key)
    if (!t) return node
    else return t
  }

  ceiling (key) {
    const node = this._ceiling(this.root, key)
    if (node) return node.key
    else return undefined
  }

  _select (node, k) {
    if (!node) return undefined

    const size = this._size(node.left)
    if (k < size) return this._select(node.left, k)
    else if (k > size) return this._select(node.right, k - size - 1)
    else return node
  }

  select (k) {
    const node = this._select(this.root, k)
    if (!node) return undefined
    else return node.key
  }

  _rank (node, key) {
    if (!node) return 0
    if (key === node.key) return this._size(node.left)
    else if (key < node.key) return this._rank(node.left, key)
    else return this._size(node.left) + 1 + this._rank(node.right, key)
  }

  rank (key) {
    return this._rank(this.root, key)
  }

  _deleteMin (node) {
    if (!node) return undefined
    if (!node.left) return node.right

    node.left = this._deleteMin(node.left)
    node.n = this._size(node.left) + this._size(node.right) + 1
    return node
  }

  deleteMin () {
    this.root = this._deleteMin(this.root)
  }

  _deleteMax (node) {
    if (!node) return undefined
    if (!node.right) return node.left

    node.right = this._deleteMax(node.right)
    node.n = this._size(node.left) + this._size(node.right) + 1
    return node
  }

  deleteMax () {
    this.root = this._deleteMax(this.root)
  }

  _delete (node, key) {
    if (!node) return undefined

    if (key < node.key) node.left = this._delete(this.left, key)
    else if (key > node.key) node.right = this._delete(node.right, key)
    else if (key === node.key) {
      if (node.right === undefined) return node.left
      if (node.left === undefined) return node.right

      const t = node
      node = this._min(t.right)
      node.left = t.left
      node.right = this._deleteMin(t.right)
    }

    node.n = this._size(node.left) + this._size(node.right) + 1
    return node
  }

  delete (key) {
    this.root = this._delete(this.root, key)
  }

  _keys (node, queue, lo, hi) {
    if (!node) return
    if (lo < node.key) this._keys(node.left, queue, lo, hi)
    if (lo <= node.key && hi >= node.key) queue.push(node.key)
    if (hi > node.key) this._keys(node.right, queue, lo, hi)
  }

  keys (...args) {
    let lo
    let hi
    if (args.length === 2) {
      [lo, hi] = args
    } else {
      lo = this.min()
      hi = this.max()
    }

    const result = []
    this._keys(this.root, result, lo, hi)

    return result
  }
}
