/**
 * UnionFind
 */
export default class UnionFind {
  /**
   * constructor
   * @param n
   */
  constructor (n) {
    this.count = n
    this.id = []

    for (let i = 0; i < n; i++) {
      this.id.push(i)
    }
  }

  /**
   * union
   * @param p
   * @param q
   */
  union (p, q) {}

  /**
   * find
   * @param p
   */
  find (p) {}

  /**
   * connected
   * @param p
   * @param q
   * @returns {boolean}
   */
  connected (p, q) {
    return this.find(p) === this.find(q)
  }

  /**
   * getCount
   * @returns {number}
   */
  getCount () {
    return this.count
  }
}
