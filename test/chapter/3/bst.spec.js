import BST from '@/chapter/3/bst'
import Random from '@/utils/random'

describe('Test SequentialSearchST class', () => {
  let st
  let random

  beforeAll(() => {
    st = new BST()
    random = new Random()
  })

  test('Test method  put and get', () => {
    for (let i = 0; i < 10; i++) {
      const map = random.generateRandomStringIntMap()
      const obj = {}
      for (let i = 0; i < map.keys.length; i++) {
        st.put(map.keys[i], map.values[i])
        obj[map.keys[i]] = map.values[i]
      }
      Object.keys(obj).forEach(key => {
        expect(st.get(key)).toBe(obj[key])
      })
    }
  })
})

describe('Test BST class', () => {
  let st

  beforeAll(() => {
    st = new BST()
  })

  beforeEach(() => {
    st.clear()

    const keys = [10, 2, 3, 4, 2, 23, 5, 8, 30, 21]
    const values = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109]

    keys.forEach((key, index) => {
      st.put(key, values[index])
    })
  })

  test('Test method get', () => {
    expect(st.get(2)).toBe(104)
    expect(st.get(30)).toBe(108)
  })

  test('Test method min', () => {
    expect(st.min()).toBe(2)
  })

  test('Test method max', () => {
    expect(st.max()).toBe(30)
  })

  test('Test method floor', () => {
    expect(st.floor(11)).toBe(10)
    expect(st.floor(21)).toBe(21)
  })

  test('Test method ceiling', () => {
    expect(st.ceiling(4)).toBe(4)
    expect(st.ceiling(6)).toBe(8)
  })

  test('Test method rank', () => {
    expect(st.rank(2)).toBe(0)
    expect(st.rank(20)).toBe(6)
    expect(st.rank(21)).toBe(6)
    expect(st.rank(22)).toBe(7)
  })

  test('Test method select', () => {
    expect(st.select(0)).toBe(2)
    expect(st.select(10)).toBe(undefined)
  })

  test('Test method size', () => {
    expect(st.size()).toBe(9)
    expect(st.size(10, 30)).toBe(4)
    expect(st.size(11, 30)).toBe(3)
    expect(st.size(11, 29)).toBe(2)
  })

  test('Test method delete', () => {
    const size = st.size()
    st.delete(39)
    expect(st.size()).toBe(size)
    st.delete(21)
    expect(st.size()).toBe(size - 1)
  })

  test('Test method keys', () => {
    let keys = st.keys()
    expect(keys.length).toBe(9)

    keys = st.keys(2, 7)
    expect(keys.length).toBe(4)

    keys = st.keys(2, 8)
    expect(keys.length).toBe(5)

    keys = st.keys(2.1, 8)
    expect(keys.length).toBe(4)

    keys = st.keys(2, 9)
    expect(keys.length).toBe(5)
  })
})
