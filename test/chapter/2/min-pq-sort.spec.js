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
    let array = random.generateRandomIntArray(0, 100, 10)
    array = sort.sort(array)

    expect(sort.isSorted(array, false)).toBe(true)
  })
})
