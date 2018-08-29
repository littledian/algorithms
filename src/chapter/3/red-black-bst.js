import SortedSt from './sorted-st'

const RED = Symbol('RED')
const BLACK = Symbol('BLACK')

class Node {
  constructor (key, value, n, color) {
    this.key = key
    this.value = value
    this.n = n
    this.color = color
    this.left = undefined
    this.right = undefined
  }
}

export default class RedBlackBST extends SortedSt {
  _isRed (node) {
    if (!node) return false
    return node.color === RED
  }

  _rotateLeft (node) {
    const x = node.right
    node.right = x.left
    x.left = node
    x.color = node.color
    node.color = RED
    x.n = node.n
    node.n = 1 + this._size(node.left) + this._size(node.right)
    return x
  }

  _rotateRight (node) {
    const x = node.left
    node.left = x.right
    x.right = node
    x.color = node.color
    node.color = RED
    x.n = node.n
    node.n = 1 + this._size(node.left) + this._size(node.right)
    return x
  }

  _flipColors (node, color = BLACK) {
    node.left.color = color
    node.right.color = color
    node.color = color === BLACK ? RED : BLACK
  }

  _put (node, key, value) {
    if (!node) return new Node(key, value, 1, RED)

    if (key < node.key) node.left = this._put(node.left, key, value)
    else if (key > node.key) node.right = this._put(node.right, key, value)
    else node.value = value

    if (this._isRed(node.right) && !this._isRed(node.left)) node = this._rotateLeft(node)
    if (this._isRed(node.left) && this._isRed(node.left.left)) node = this._rotateRight(node)
    if (this._isRed(node.left) && this._isRed(node.right)) this._flipColors(node)

    node.n = this._size(node.left) + this._size(node.right) + 1
    return node
  }

  put (key, value) {
    this.root = this._put(this.root, key, value)
    this.root.color = BLACK
  }

  _balance (node) {
    if (this._isRed(node.right)) node = this._rotateLeft(node)
    if (this._isRed(node.right) && !this._isRed(node.left)) node = this._rotateLeft(node)
    if (this._isRed(node.left) && this._isRed(node.left.left)) node = this._rotateRight(node)
    if (this._isRed(node.left) && this._isRed(node.right)) this._flipColors(node)

    node.n = this._size(node.left) + this._size(node.right) + 1
    return node
  }

  _moveRedLeft (node) {
    this._flipColors(node, RED)
    if (this._isRed(node.right.left)) {
      node.right = this._rotateRight(node.right)
      node = this._rotateLeft(node)
    }
    return node
  }

  _deleteMin (node) {
    if (node.left === undefined) return undefined
    if (!this._isRed(node.left) && !this._isRed(node.left.left)) {
      node = this._moveRedLeft(node)
    }
    node.left = this._deleteMin(node.left)
    return this._balance(node)
  }

  deleteMin () {
    if (!this._isRed(this.root.left) && !this._isRed(this.root.right)) {
      this.root.color = RED
    }
    this.root = this._deleteMin(this.root)
    if (!this.isEmpty()) this.root.color = BLACK
  }

  _moveRedRight (node) {
    this._flipColors(node, RED)
    if (!this._isRed(node.left.left)) node = this._rotateRight(node)
    return node
  }

  _deleteMax (node) {
    if (this._isRed(node.left)) node = this._rotateRight(node)
    if (node.right === undefined) return undefined
    if (!this._isRed(node.right) && !this._isRed(node.right.left)) {
      node = this._moveRedRight(node)
    }
    node.right = this._deleteMax(node.right)
    return this._balance(node)
  }

  deleteMax () {
    if (!this._isRed(this.root.left) && !this._isRed(this.root.right)) {
      this.root.color = RED
    }
    this.root = this._deleteMax(this.root)
    if (!this.isEmpty()) this.root.color = BLACK
  }

  _delete (node, key) {
    if (key < node.key) {
      if (!this._isRed(node.left) && !this._isRed(node.left.left)) {
        node = this._moveRedLeft(node)
      }
      node.left = this._delete(node.left, key)
    } else {
      if (this._isRed(node.left)) {
        node = this._rotateRight(node)
      }
      if (node.right === undefined) {
        return node.key === key ? undefined : node
      }
      if (!this._isRed(node.right) && !this._isRed(node.right.left)) {
        node = this._moveRedRight(node)
      }
      if (node.key === key) {
        node.value = this._get(node.right, this._min(node.right).key)
        node.key = this._min(node.right).key
        node.right = this._deleteMin(node.right)
      } else {
        node.right = this._delete(node.right, key)
      }
    }

    return this._balance(node)
  }

  delete (key) {
    if (!this._isRed(this.root.left) && !this._isRed(this.root.right)) {
      this.root.color = RED
    }
    this.root = this._delete(this.root, key)
    if (!this.isEmpty()) this.root.color = BLACK
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
