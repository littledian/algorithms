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

  _size (node) {
    return node ? node.n : 0
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

  _flipColors (node) {
    node.left.color = BLACK
    node.right.color = BLACK
    node.color = RED
  }

  _put (node, key, value) {
    if (!node) return new Node(key, value, 1, RED)

    if (key < node.key) this.left = this._put(node.left, key, value)
    else if (key > node.key) this.right = this._put(node.right, key, value)
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
}
