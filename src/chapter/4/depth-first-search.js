import Search from './search'

/**
 * 找到和s连通的所有顶点
 */
export default class DepthFirstSearch extends Search {
  /**
   * 构造函数
   * @param G
   * @param s
   */
  constructor (G, s) {
    super()
    this._count = -1
    this._marked = []
    this._dfs(G, s)
  }

  _dfs (G, v) {
    this._marked[v] = true
    this._count++
    for (const w of G.adj(v)) {
      if (!this._marked[w]) {
        this._dfs(G, w)
      }
    }
  }

  /**
   * v和s是否是联通的
   * @param v
   */
  marked (v) {
    return !!this._marked[v]
  }

  /**
   * 与s连通的顶点总数
   */
  count () {
    return this._count
  }
}
