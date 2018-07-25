import MergeSort from '@/chapter/2/merge-sort'
import Random from '@/utils/random'

describe('Test MergeSort class', () => {
  let sort
  let random

  beforeAll(() => {
    sort = new MergeSort()
    random = new Random()
  })

  test('Test method sort', () => {
    let array = random.generateRandomIntArray()
    array = sort.sort(array)

    expect(sort.isSorted(array)).toBe(true)
  })
})
