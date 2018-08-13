export default class ST {
  /**
   * 将键值对存入表中
   * @param key
   * @param value
   */
  put (key, value) {}

  /**
   * 获取键key对应的值
   * @param key
   * @return {value}
   */
  get (key) {}

  /**
   * 从表中删去键key
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
   * @param args
   * @return {number}
   */
  size (...args) {
    let lo
    let hi
    if (args.length === 2) {
      lo = args[0]
      hi = args[1]
    } else {
      lo = this.min()
      hi = this.max()
    }

    if (hi < lo) return 0
    else if (this.contains(hi)) return this.rank(hi) - this.rank(lo) + 1
    else return this.rank(hi) - this.rank(lo)
  }

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
   * 表中的键的集合
   * @param args
   * @return {key[]}
   */
  keys (...args) {
    let lo;
    let hi
    if (args.length === 2) {
      lo = args[0]
      hi = args[1]
    } else {
      lo = this.min()
      hi = this.max()
    }
  }
}
