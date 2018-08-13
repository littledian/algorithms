export default class BaseST {
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
   * 是否是正确的
   * @param array
   * @return {boolean}
   */
  isRight (array) {
    if (!Array.isArray(array)) {
      return false
    }

    const map = new Map()
    array.forEach(item => {
      map.set(item.key, item.value)
    })

    const keys = map.keys()
    for (let key of keys) {
      if (map.get(key) !== this.get(key)) {
        return false
      }
    }
    return true
  }
}
