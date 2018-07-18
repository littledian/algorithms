export default class UF {
  constructor (n) {
    this.count = n
    this.id = []

    for (let i = 0; i < n; i++) {
      this.id.push(i)
    }
  }

  union (p, q) {}

  find (p) {}

  connected (p, q) {
    return this.find(p) === this.find(q)
  }

  getCount () {
    return this.count
  }
}
