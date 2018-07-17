import Random from '@/utils/Random'
import binarySearch from '@/chapter/1/binary-search'

describe('Test binarySearch', () => {
  let random

  beforeAll(() => {
    random = new Random()
  })
  test('Array from file RandomInt_0_1000000_1000000', () => {
    const array = random.generateRandomIntArray()

    const index = binarySearch(array[30], array)

    expect(index).toBeGreaterThan(-1)
  })
})
