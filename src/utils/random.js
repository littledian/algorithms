import fs from 'fs'

import Logger from './logger'

export default class Random {
  constructor () {
    this.fs = fs
    this.logger = new Logger()
  }

  /**
   * generateRandomIntArray
   * @param min
   * @param max
   * @param length
   * @returns {*}
   */
  generateRandomIntArray (min = 0, max = 100, length = 100) {
    if (isNaN(min) || isNaN(max) || isNaN(length)) {
      this.logger.error(`params min, max and length must all number`)
      return
    }

    const width = max - min
    if (width <= 0) {
      this.logger.error(`params min:${min} must lower than max:${max}`)
      return
    }

    const result = []
    for (let i = 0; i < length; i++) {
      result.push(min + Math.floor(Math.random() * width))
    }

    return result
  }

  /**
   * generateRandomIntArrayOfNoRepeat
   * @param min
   * @param max
   * @param length
   * @returns {*}
   */
  generateRandomIntArrayOfNoRepeat (min = 0, max = 100, length = 100) {
    if (isNaN(min) || isNaN(max) || isNaN(length)) {
      this.logger.error(`params min, max and length must all number`)
      return
    }

    const width = max - min
    if (width <= 0) {
      this.logger.error(`params min:${min} must lower than max:${max}`)
      return
    }

    if (width < length) {
      this.logger.error('can not generate array which length is greater than max - min')
      return
    }

    const n = []
    for (let i = 0; i <= width; i++) {
      n.push(min + i)
    }

    const result = []
    for (let i = 0; i < length; i++) {
      const r = Math.floor(Math.random() * (width - i)) + i
      ;[n[i], n[r]] = [n[r], n[i]]

      result.push(n[i])
    }

    return result
  }

  generateRandomStringIntMap (min = 0, max = 100, length = 100) {
    if (isNaN(min) || isNaN(max) || isNaN(length)) {
      this.logger.error(`params min, max and length must all number`)
      return
    }

    const width = max - min
    if (width <= 0) {
      this.logger.error(`params min:${min} must lower than max:${max}`)
      return
    }

    const s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let keyLength = Math.log(length) / Math.log(s.length)
    keyLength = Math.floor(keyLength)
    if (keyLength < 1) keyLength = 1
    if (keyLength > 3) keyLength = 3

    function keyGenerator () {
      let result = ''
      for (let i = 0; i < keyLength; i++) {
        result += s[Math.floor(Math.random() * s.length)]
      }
      return result
    }

    const result = {
      keys: [],
      values: []
    }
    for (let i = 0; i < length; i++) {
      result.keys.push(keyGenerator())
      result.values.push(min + Math.floor(Math.random() * width))
    }

    return result
  }
}
