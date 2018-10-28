import Path from '@/chapter/4/breadth-first-path'
import Graph from '@/chapter/4/Graph'

describe('Test BreadthFirstPath Class', () => {
  test('Test BreadthFirstPath Class', () => {
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
    const search = new Path(graph, 0)
    expect(search.hasPathTo(1)).toBe(true)
    expect(search.hasPathTo(2)).toBe(true)
    expect(search.hasPathTo(3)).toBe(true)
    expect(search.hasPathTo(4)).toBe(true)
    expect(search.hasPathTo(5)).toBe(true)
    expect(search.hasPathTo(6)).toBe(true)
    expect(search.hasPathTo(7)).toBe(false)
    expect(search.hasPathTo(8)).toBe(false)
    expect(search.hasPathTo(9)).toBe(false)
    expect(search.hasPathTo(10)).toBe(false)
    expect(search.hasPathTo(11)).toBe(false)
    expect(search.hasPathTo(12)).toBe(false)

    expect(search.pathTo(12)).toBe(undefined)
    expect(search.pathTo(4).join()).toBe('0,6,4')
  })
})
