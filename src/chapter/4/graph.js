export default class Graph {
  constructor (v, edges) {
    this._v = v
    this._e = 0
    this._adj = []
    for (let i = 0; i < v; i++) {
      this._adj.push([])
    }
    for (let i = 0; i < edges.length; i++) {
      const [v, w] = edges[i]
      this.addEdge(v, w)
    }
  }

  /**
   * 计算v的度数
   * @param G
   * @param v
   * @return {*}
   */
  static degree (G, v) {
    return G._adj[v].length
  }

  /**
   * 计算所有顶点的最大度数
   * @param G
   * @return {number}
   */
  static maxDegree (G) {
    let max = 0
    for (let v = 0; v < G._v; v++) {
      if (Graph.degree(G, v) > max) {
        max = Graph.degree(G, v)
      }
    }
    return max
  }

  /**
   * 计算所有顶点的平均度数
   * @param G
   * @return {number}
   */
  static avgDegree (G) {
    return 2 * G._e / G._v
  }

  /**
   * 计算自环的个数
   * @param G
   * @return {number}
   */
  static numberOfSelfLoops (G) {
    let count = 0
    for (let v = 0; v < G._v; v++) {
      for (const w of G._adj[v]) {
        if (v === w) count++
      }
    }
    count = count / 2
    return count
  }

  toString () {
    let s = `${this._v} vertices, ${this._e} edges\n`
    for (let v = 0; v < this._v; v++) {
      s += `${v}: `
      for (const w of this._adj[v]) {
        s += w + ' '
      }
      s += '\n'
    }

    return s
  }

  /**
   * 向图中添加一条边v-w
   * @param v
   * @param w
   */
  addEdge (v, w) {
    this._adj[v].push(w)
    this._adj[w].push(v)
    this._e++
  }

  /**
   * 和v相邻的所有顶点
   * @param v
   * @return {*}
   */
  adj (v) {
    return this._adj[v]
  }

  /**
   * 边数
   * @return {number}
   */
  e () {
    return this._e
  }

  /**
   * 顶点数
   * @return {*}
   */
  v () {
    return this._v
  }
}
