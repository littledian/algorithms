import BaseST from './base-st'

export default class UnSortedST extends BaseST {
  /**
   * 从表中删除键key以及对应的值
   * @param key
   */
  delete (key) {
    this.put(key, undefined)
  }

  /**
   * 键key是否存在于表中
   * @param key
   * @return {boolean}
   */
  contains (key) {
    return this.get(key) !== undefined
  }

  /**
   * 表是否为空
   * @return {boolean}
   */
  isEmpty () {
    return this.size() === 0
  }

  /**
   * 表中的键值对数量
   * @return {number}
   */
  size () {}

  /**
   * 表中的键的集合
   * @return {key[]}
   */
  keys () {}
}
