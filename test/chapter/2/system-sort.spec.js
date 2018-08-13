import SystemSort from '@/chapter/2/system-sort'
import Random from '@/utils/random'

describe('Test SystemSort class', () => {
  let sort
  let random

  beforeAll(() => {
    sort = new SystemSort()
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
