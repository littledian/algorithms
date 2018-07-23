import BaseSort from '@/chapter/2/base-sort'

describe('Test BaseSort class', () => {
  let baseSort

  beforeAll(() => {
    baseSort = new BaseSort()
  })

  test('Test method exchange', () => {
    const array = [1, 2, 3, 4]
    baseSort.exchange(array, 1, 2)
    expect(array[1]).toBe(3)
    expect(array[2]).toBe(2)
  })

  test('Test method isSorted with default asc value true', () => {
    expect(baseSort.isSorted([1, 2, 3])).toBe(true)
    expect(baseSort.isSorted([1, 3, 2])).toBe(false)
    expect(baseSort.isSorted([3, 2, 1])).toBe(false)
  })

  test('Test method isSorted with asc value false', () => {
    expect(baseSort.isSorted([1, 2, 3], false)).toBe(false)
    expect(baseSort.isSorted([1, 3, 2], false)).toBe(false)
    expect(baseSort.isSorted([3, 2, 1], false)).toBe(true)
  })

  test('Test method isSorted with asc value true', () => {
    expect(baseSort.isSorted([1, 2, 3], true)).toBe(true)
    expect(baseSort.isSorted([1, 3, 2], true)).toBe(false)
    expect(baseSort.isSorted([3, 2, 1], true)).toBe(false)
  })
})
