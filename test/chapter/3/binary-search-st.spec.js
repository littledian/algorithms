import BinarySearchST from '@/chapter/3/binary-search-st'
import Random from '@/utils/random'

describe('Test SequentialSearchST class', () => {
  let st
  let random

  beforeAll(() => {
    st = new BinarySearchST()
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
