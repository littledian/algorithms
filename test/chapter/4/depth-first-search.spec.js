import Search from '@/chapter/4/depth-first-search'
import Graph from '@/chapter/4/Graph'

describe('Test DepthFirstSearch Class', () => {
  test('Test DepthFirstSearch Class', () => {
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
    const search = new Search(graph, 1)
    expect(search.marked(0)).toBe(true)
    expect(search.marked(1)).toBe(true)
    expect(search.marked(2)).toBe(true)
    expect(search.marked(3)).toBe(true)
    expect(search.marked(4)).toBe(true)
    expect(search.marked(5)).toBe(true)
    expect(search.marked(6)).toBe(true)
    expect(search.marked(7)).toBe(false)
    expect(search.marked(8)).toBe(false)
    expect(search.marked(9)).toBe(false)
    expect(search.marked(10)).toBe(false)
    expect(search.marked(11)).toBe(false)
    expect(search.marked(12)).toBe(false)

    expect(search.count()).toBe(6)
  })
})
