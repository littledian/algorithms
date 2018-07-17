import fs from 'fs'

import Logger from './Logger'

export default class Random {
  constructor () {
    this.fs = fs
    this.logger = new Logger()
  }

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
      result.push(min + Math.ceil(Math.random() * width))
    }

    return result
  }
}
