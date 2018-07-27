import Random from '../../utils/random'
import Logger from '../../utils/logger'

import InsertionSort from './insertion-sort'
import ShellSort from './shell-sort'
import SelectionSort from './selection-sort'
import MergeSort from './merge-sort'
import MergeBuSort from './merge-bu-sort'
import QuickSort from './quick-sort'
import Quick3WaySort from './quick-3way-sort'

const random = new Random()
const logger = new Logger()

const sortObj = {
  shell: new ShellSort(),
  insertion: new InsertionSort(),
  selection: new SelectionSort(),
  mergeSort: new MergeSort(),
  mergeBuSort: new MergeBuSort(),
  quickSort: new QuickSort(),
  quick3WaySort: new Quick3WaySort()
}

let oldKeys
let newKeys = Object.keys(sortObj)
let i = 1

while (newKeys.length > 0) {
  const n = Math.pow(2, i++)

  oldKeys = newKeys
  newKeys = []

  oldKeys.forEach((key) => {
    let arr = random.generateRandomIntArray(0, n, n)
    const sort = sortObj[key]

    const start = new Date()
    arr = sort.sort(arr)
    const end = new Date()

    const last = end.getTime() - start.getTime()
    if (last < 10 * 1000) newKeys.push(key)

    const isSorted = sort.isSorted(arr)
    if (isSorted) {
      logger.info(`${n}————${last}————${key}`)
    } else {
      logger.error(`${key} fail to sort array`)
    }
  })
}
