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

  _get (node, key) {
    if (node === undefined) return undefined
    if (key < node.key) return this._get(node.left, key)
    else if (key > node.key) return this._get(node.right, key)
    else return node.value
  }

  _put (node, key, value) {
    if (node === undefined) return new Node(key, value, 1)

    if (key < node.key) node.left = this._put(node.left, key, value)
    else if (key > node.key) node.right = this._put(node.right, key, value)
    else node.value = value

    node.n = this._size(node.left) + this._size(node.right) + 1
    return node
  }

  size (...args) {
    return this._size(this.root)
  }

  get (key) {
    return this._get(this.root, key)
  }

  put (key, value) {
    this.root = this._put(this.root, key, value)
  }
}
