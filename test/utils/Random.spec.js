import Random from '@/utils/Random'

describe('Test Random class', () => {
  let random

  beforeAll(() => {
    random = new Random()
  })

  test('Test error with illegal min param', () => {
    const r1 = random.generateRandomIntArray('12A', 12, 34)
    const r2 = random.generateRandomIntArrayOfNoRepeat('12D', 12, 55)
    expect(r1).toBeFalsy()
    expect(r2).toBeFalsy()
  })

  test('Test error with illegal max param', () => {
    const r1 = random.generateRandomIntArray(0, '21s', 32)
    const r2 = random.generateRandomIntArrayOfNoRepeat(0, 'dasda', 22)
    expect(r1).toBeFalsy()
    expect(r2).toBeFalsy()
  })

  test('Test error with illegal length param', () => {
    const r1 = random.generateRandomIntArray(0, 12, '2A3')
    const r2 = random.generateRandomIntArrayOfNoRepeat(0, 12, 'dsa')
    const r3 = random.generateRandomIntArrayOfNoRepeat(0, 12, 21)
    expect(r1).toBeFalsy()
    expect(r2).toBeFalsy()
    expect(r3).toBeFalsy()
  })

  test('Test generateRandomIntArray', () => {
    const r = random.generateRandomIntArray(10, 20, 40)

    expect(r.length).toBe(40)

    for (let n of r) {
      expect(n).toBeGreaterThanOrEqual(10)
      expect(n).toBeLessThanOrEqual(20)
    }
  })

  test('Test generateRandomIntArrayOfNoRepeat', () => {
    const r = random.generateRandomIntArrayOfNoRepeat(10, 200, 180)

    expect(r.length).toBe(180)

    for (let i = 0; i < r.length; i++) {
      expect(r[i]).toBeGreaterThanOrEqual(10)
      expect(r[i]).toBeLessThanOrEqual(200)
      expect(r.indexOf(r[i], i + 1)).toBe(-1)
    }
  })
})
