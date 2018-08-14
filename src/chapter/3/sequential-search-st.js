import ST from './base-st'

class Node {
  constructor (key, value, next) {
    this.key = key
    this.value = value
    this.next = next
  }
}

export default class SequentialSearchST extends ST {
  constructor () {
    super()
    this.first = undefined
  }

  get (key) {
    for (let x = this.first; x !== undefined; x = x.next) {
      if (key === x.key) {
        return x.value
      }
    }
    return undefined
  }

  put (key, value) {
    for (let x = this.first; x !== undefined; x = x.next) {
      if (x.key === key) {
        x.value = value
        return
      }
    }

    this.first = new Node(key, value, this.first)
  }

  clear () {
    this.first = undefined
  }
}
