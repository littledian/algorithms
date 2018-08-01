import Random from '@/utils/random'
import MinPQSort from '@/chapter/2/min-pq-sort'

describe('Test class MinPQSort', () => {
  let sort
  let random

  beforeAll(() => {
    sort = new MinPQSort()
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
