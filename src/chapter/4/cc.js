export default class CC {
  constructor (G) {
    this._marked = []
    this._id = []
    this._count = 0

    for (let s = 0; s < G.v(); s++) {
      if (!this._marked[s]) {
        this._dfs(G, s)
        this._count++
      }
    }
  }

  _dfs (G, v) {
    this._marked[v] = true
    this._id[v] = this._count
    for (const w of G.adj(v)) {
      if (!this._marked[w]) {
        this._dfs(G, w)
      }
    }
  }

  connected (v, w) {
    return this._id[v] === this._id[w]
  }

  id (v) {
    return this._id[v]
  }

  count () {
    return this._count
  }
}
