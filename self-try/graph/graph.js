function createNode(key) {
  return {
    key,
    neighbors: [],
    addNeighbor: function(node) {
      this.neighbors.push(node);
    }
  };
}

function createGraph(directed = false) {
  const nodes = [];

  return {
    directed,
    nodes,

    addNode: function(key) {
      const node = createNode(key);
      nodes.push(node);
    },

    getNode: function(key) {
      return nodes.find((node) => node.key === key);
    },

    addEdge: function(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);

      node1.addNeighbor(node2);
      if (!directed) {
        node2.addNeighbor(node1);
      }
    },

    print: function() {
      return nodes.map(({ key, neighbors }) => (
        `${key} => ${neighbors.map((neighbor) => (neighbor.key)).join(", ")}`
      )).join("\n");
    }
  }
}

module.exports = { createGraph };