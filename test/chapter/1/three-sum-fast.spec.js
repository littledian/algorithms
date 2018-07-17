import threeSumFast from '@/chapter/1/three-sum-fast'

describe('Test threeSumFast', () => {
  test('Test count === 0', () => {
    const array = [1, 23, 34, 2, 231]
    const result = threeSumFast(array)

    expect(result).toBe(0)
  })

  test('Test count === 1', () => {
    const array = [1, 2, 3, 4, -7]
    const result = threeSumFast(array)

    expect(result).toBe(1)
  })

  test('Test count > 1', () => {
    const array = [1, 2, 3, 4, -5]
    const result = threeSumFast(array)

    expect(result).toBeGreaterThan(1)
  })
})
