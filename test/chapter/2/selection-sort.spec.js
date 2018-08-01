import SelectionSort from '@/chapter/2/selection-sort'
import Random from '@/utils/random'

describe('Test SelectionSort class', () => {
  let sort, random

  beforeAll(() => {
    sort = new SelectionSort()
    random = new Random()
  })

  test('Test method sort', () => {
    for (let i = 0; i < 10; i++) {
      let array = random.generateRandomIntArray()
      array = sort.sort(array)

      expect(sort.isSorted(array, true) || sort.isSorted(array, false)).toBe(true)
    }
  })
})
