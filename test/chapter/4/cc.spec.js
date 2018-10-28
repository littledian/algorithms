import CC from '@/chapter/4/cc'
import Graph from '@/chapter/4/Graph'

describe('Test class CC', () => {
  test('Test class CC', () => {
    const edges = [
      [0, 5],
      [4, 3],
      [0, 1],
      [9, 12],
      [6, 4],
      [5, 4],
      [0, 2],
      [11, 12],
      [9, 10],
      [0, 6],
      [7, 8],
      [9, 11],
      [5, 3]
    ]
    const graph = new Graph(13, edges)
    const cc = new CC(graph)
    expect(cc.count()).toBe(3)
    expect(cc.id(1)).toBe(0)
    expect(cc.id(8)).toBe(1)
  })
})
