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
