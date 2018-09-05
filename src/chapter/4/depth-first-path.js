import Path from './path'

/**
 * 从G中找到所有起点为s的路径
 */
export default class DepthFirstPath extends Path {
  /**
   * 构造函数
   * @param G
   * @param s
   */
  constructor (G, s) {
    super()
    this._marked = []
    this._edgeTo = []
    this.s = s
    this._dfs(G, s)
  }

  _dfs (G, v) {
    this._marked[v] = true
    for (const w of G.adj(v)) {
      if (!this._marked[w]) {
        this._edgeTo[w] = v
        this._dfs(G, w)
      }
    }
  }

  /**
   * 是否存在从s到v的路径
   * @param v
   * @return boolean
   */
  hasPathTo (v) {
    return !!this._marked[v]
  }

  /**
   * s到v的路径，如果不存在则返回undefined
   * @param v
   * @return Array[number] | undefined
   */
  pathTo (v) {
    if (!this.hasPathTo(v)) return undefined
    const path = []
    for (let x = v; x !== this.s; x = this._edgeTo[x]) {
      path.push(x)
    }
    path.push(this.s)
    return path.reverse()
  }
}
