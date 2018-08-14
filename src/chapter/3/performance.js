import Random from '../../utils/random'
import Logger from '../../utils/logger'
import SequentialSearchST from './sequential-search-st'
import BinarySearchST from './binary-search-st'

const random = new Random()
const logger = new Logger()

const searchObj = {
  sequential: new SequentialSearchST(),
  binary: new BinarySearchST()
}

let oldKeys
let newKeys = Object.keys(searchObj)
let i = 1

while (newKeys.length) {
  const n = Math.pow(2, i++)
  oldKeys = newKeys
  newKeys = []

  oldKeys.forEach((key) => {
    let arr = random.generateRandomStringIntMap(0, n, n)
    const st = searchObj[key]
    st.clear()

    const obj = {}
    arr.forEach(item => {
      obj[item.key] = item.value
    })
    const keys = Object.keys(obj)
    let right = true

    const start = new Date()
    for (const item of arr) {
      st.put(item.key, item.value)
    }
    for (const key of keys) {
      if (st.get(key) !== obj[key]) {
        right = false
        break
      }
    }
    const end = new Date()

    const last = end.getTime() - start.getTime()
    if (last < 10 * 1000) newKeys.push(key)

    if (right) {
      logger.info(`${n}————${last}————${key}`)
    } else {
      logger.error(`${key} fail to put and get`)
    }
  })
}
