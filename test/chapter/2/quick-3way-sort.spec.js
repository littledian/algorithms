import Quick3WaySort from '@/chapter/2/quick-3way-sort'
import Random from '@/utils/random'

describe('Test Quick3WaySort class', () => {
  let sort
  let random

  beforeAll(() => {
    sort = new Quick3WaySort()
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
