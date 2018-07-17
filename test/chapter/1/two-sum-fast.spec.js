import twoSumFast from '@/chapter/1/two-sum-fast'

describe('Test twoSumFast', () => {
  test('Test count === 1', () => {
    const array = [1, 2, 3, 4, 5, -6, 7, -3]
    const result = twoSumFast(array)

    expect(result).toBe(1)
  })

  test('Test count === 0', () => {
    const array = [1, 2, 3, 4, 5, 6]
    const result = twoSumFast(array)

    expect(result).toBe(0)
  })

  test('Test count > 1', () => {
    const array = [1, 2, 3, 4, 5, -2, 32, -4]
    const result = twoSumFast(array)

    expect(result).toBe(2)
  })
})
