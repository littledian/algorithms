import Logger from '@/utils/Logger'

/**
 * UN
 */
export class UF {
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

/**
 * QuickFindUF
 */
export class QuickFindUF extends UF {
  find (p) {
    return this.id[p]
  }

  union (p, q) {
    const pID = this.find(p)
    const qID = this.find(q)

    if (pID === qID) return

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pID) this.id[i] = qID
    }

    this.count--
  }
}

/**
 * QuickUnionUF
 */
export class QuickUnionUF extends UF {
  find (p) {
    while (p !== this.id[p]) {
      p = this.id[p]
    }

    return p
  }

  union (p, q) {
    const pRoot = this.find(p)
    const qRoot = this.find(q)

    if (pRoot === qRoot) return

    this.id[pRoot] = qRoot
    this.count--
  }
}

/**
 * WeightQuickUnionUF
 */
export class WeightQuickUnionUF extends UF {
  constructor (n) {
    super(n)

    this.sz = []
    for (let i = 0; i < n; i++) {
      this.sz.push(1)
    }
  }

  find (p) {
    while (p !== this.id[p]) {
      p = this.id[p]
    }

    return p
  }

  union (p, q) {
    const pRoot = this.find(p)
    const qRoot = this.find(q)

    if (pRoot === qRoot) return

    if (this.sz[pRoot] < this.sz[qRoot]) {
      this.id[pRoot] = this.id[qRoot]
      this.sz[qRoot] += this.sz[pRoot]
    } else {
      this.id[qRoot] = this.id[pRoot]
      this.sz[pRoot] += this.sz[qRoot]
    }

    this.count--
  }
}

export default function unionFind (arr1, arr2, uf) {
  const logger = new Logger()

  if (!(uf instanceof UF)) {
    logger.error('param uf must instance of class extends UF')
    return
  }

  if ((uf instanceof UF) && uf.prototype === UF) {
    logger.error('param uf must instance of class extends UF but cant UF self')
    return
  }

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    logger.error('param arr1, arr2 must be an instance of array')
    return -1
  }

  if (arr1.length !== arr2.length) {
    logger.error('param arr1, arr2 must be same length of array')
    return -1
  }

  const n = arr1.length

  for (let i = 0; i < n; i++) {
    const p = arr1[i]
    const q = arr2[i]

    if (uf.connected(p, q)) continue
    uf.union(p, q)
    logger.info(p + '    ' + q)
  }

  return uf.getCount()
}
