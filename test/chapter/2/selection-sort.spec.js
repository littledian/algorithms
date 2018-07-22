import SelectionSort from '@/chapter/2/selection-sort'
import Random from '@/utils/Random'

describe('Test SelectionSort class', () => {
  let sort, random

  beforeAll(() => {
    sort = new SelectionSort()
    random = new Random()
  })

  test('Test method sort', () => {
    let array = random.generateRandomIntArray()

    array = sort.sort(array)

    expect(sort.isSorted(array, true)).toBe(true)
  })
})
