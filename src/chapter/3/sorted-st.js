import UnSortedST from './unsorted-st'

export default class SortedSt extends UnSortedST {
  /**
   * 最小的键
   * @return {key}
   */
  min () {}

  /**
   * 最大的键
   * @return {key}
   */
  max () {}

  /**
   * 小于等于key的最大键
   * @param key
   * @return {key}
   */
  floor (key) {}

  /**
   * 大于等于key的最小键
   * @param key
   * @return {key}
   */
  ceiling (key) {}

  /**
   * 小于键key的数量
   * @param key
   * @return {number}
   */
  rank (key) {}

  /**
   * 排名为k的键
   * @param k
   * @return {key}
   */
  select (k) {}

  /**
   * 删除最小的键
   */
  deleteMin () {
    this.delete(this.min())
  }

  /**
   * 删除最大的键
   */
  deleteMax () {
    this.delete(this.max())
  }

  /**
   * 表中的键值对数量
   * @param args
   * @return {number}
   */
  size (...args) {
    let lo
    let hi
    if (args.length === 2) {
      [lo, hi] = args
    } else {
      lo = this.min()
      hi = this.max()
    }

    if (hi < lo) return 0
    else if (this.contains(hi)) return this.rank(hi) - this.rank(lo) + 1
    else return this.rank(hi) - this.rank(lo)
  }

  /**
   * 表中的键的集合
   * @param args
   * @return {key[]}
   */
  keys (...args) {}
}
