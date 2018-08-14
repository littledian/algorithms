import SequentialSearchST from '@/chapter/3/sequential-search-st'
import Random from '@/utils/random'

describe('Test SequentialSearchST class', () => {
  let st
  let random

  beforeAll(() => {
    st = new SequentialSearchST()
    random = new Random()
  })

  test('Test method  put and get', () => {
    for (let i = 0; i < 10; i++) {
      const array = random.generateRandomStringIntMap()
      for (const item of array) {
        st.put(item.key, item.value)
      }
      expect(st.isRight(array)).toBe(true)
    }
  })
})
