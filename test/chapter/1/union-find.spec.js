import Random from '@/utils/Random'
import {QuickFindUF, QuickUnionUF, WeightQuickUnionUF, unionFind} from '@/chapter/1/union-find'

describe('Test unionFind function and UnionFind classes', () => {
  let arr1, arr2
  let random

  beforeAll(() => {
    random = new Random()
    arr1 = []
    arr2 = []

    for (let i = 0; i < 10000; i++) {
      const temp = random.generateRandomIntArrayOfNoRepeat(0, 100, 2)
      arr1.push(temp[0])
      arr2.push(temp[1])
    }
  })

  test('Test unionFind function param arr1, arr2', () => {
    const result = unionFind('', [1], new QuickFindUF(1))
    expect(result).toBe(-1)
  })

  test('Test unionFind function param arr1, arr2', () => {
    const result = unionFind([], [1], new QuickFindUF(2))
    expect(result).toBe(-1)
  })

  test('Test unionFind function param instance of UF', () => {
    const result = unionFind([1], [2], null)
    expect(result).toBe(-1)
  })

  test('Test UF subclasses', () => {
    const length = arr1.length
    const result1 = unionFind(arr1, arr2, new QuickFindUF(length))
    const result2 = unionFind(arr1, arr2, new QuickUnionUF(length))
    const result3 = unionFind(arr1, arr2, new WeightQuickUnionUF(length))

    expect(result1).toBeLessThan(10000)
    expect(result1).toBeGreaterThan(-1)
    expect(result1).toEqual(result2)
    expect(result2).toEqual(result3)
  })
})
