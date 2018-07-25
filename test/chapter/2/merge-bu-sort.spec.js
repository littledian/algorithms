import MergeBuSort from '@/chapter/2/merge-bu-sort'
import Random from '@/utils/random'

describe('Test MergeBuSort class', () => {
  let sort
  let random

  beforeAll(() => {
    sort = new MergeBuSort()
    random = new Random()
  })

  test('Test method sort', () => {
    let array = random.generateRandomIntArray(0, 10, 10)
    array = sort.sort(array)

    expect(sort.isSorted(array)).toBe(true)
  })
})
