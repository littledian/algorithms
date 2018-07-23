import InsertionSort from '@/chapter/2/insertion-sort'
import Random from '@/utils/random'

describe('Test InsertionSort class', () => {
  let sort
  let random

  beforeAll(() => {
    sort = new InsertionSort()
    random = new Random()
  })

  test('Test method sort', () => {
    let array = random.generateRandomIntArray()
    array = sort.sort(array)

    expect(sort.isSorted(array, true)).toBe(true)
  })
})
