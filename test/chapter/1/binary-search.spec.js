import Random from '@/utils/random'
import binarySearch from '@/chapter/1/binary-search'

describe('Test binarySearch', () => {
  let random

  beforeAll(() => {
    random = new Random()
  })

  test('Test array', () => {
    const array = random.generateRandomIntArray()

    const index = binarySearch(array[30], array)

    expect(index).toBeGreaterThan(-1)
  })

  test('Test not array', () => {
    const index = binarySearch(21, 2131)

    expect(index).toBe(-1)
  })

  test('Test not found', () => {
    const index = binarySearch(12, [2131, 3231])

    expect(index).toBe(-1)
  })
})
