function createNode(key) {
  const neighbors = [];
  return {
    key,
    neighbors,

    addNeighbor: function(node) {
      neighbors.push(node);
    }
  }
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,

    addNode: function(key) {
      const node = createNode(key);
      nodes.push(node);
    },

    getNode: function(key) {
      return nodes.find((node) => node.key === key);
    },

    addEdge: function(key1, key2) {
      const node1 = this.getNode(key1);
      const node2 = this.getNode(key2);
      node1.addNeighbor(node2);
      
      if (!directed) {
        node2.addNeighbor(node1);
      }
    },

    print: function() {
      return nodes.map(({ key, neighbors }) => {
        let result = key;
        
        if (neighbors.length) {
          result += ` => [${neighbors.map((neighbor) => (neighbor.key)).join(', ')}]`;
        }

        return result;
      }).join('\n');
    }
  }
}

// Directed graph
const graph = createGraph(true);
graph.addNode('Albert');
graph.addNode('Vincent');
graph.addNode('Leo');
graph.addNode('Mike');

// Test neighbor
graph.addEdge('Albert', 'Vincent');
graph.addEdge('Albert', 'Leo');

console.log(graph.print());