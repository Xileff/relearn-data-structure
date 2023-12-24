const { createGraph } = require("./graph");

describe('Graph tests', () => {
  let graph;

  beforeEach(() => {
    graph = createGraph();
  });

  test('Test Case 1: Add nodes to the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');

    expect(graph.print()).toBe(
      'A => \nB => \nC => '
    );
  });

  test('Test Case 2: Add edges to the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');

    expect(graph.print()).toBe(
      'A => B\nB => A, C\nC => B'
    );
  });

  test('Test Case 3: Get a specific node from the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');

    const nodeB = graph.getNode('B');

    expect(nodeB.key).toBe('B');
  });

  test('Test Case 4: Directed graph', () => {
    const directedGraph = createGraph(true);
    directedGraph.addNode('A');
    directedGraph.addNode('B');
    directedGraph.addEdge('A', 'B');

    expect(directedGraph.print()).toBe(
      'A => B\nB => '
    );
  });

  test('Test Case 5: Add edges to a directed graph', () => {
    const directedGraph = createGraph(true);
    directedGraph.addNode('A');
    directedGraph.addNode('B');
    directedGraph.addNode('C');
    directedGraph.addEdge('A', 'B');
    directedGraph.addEdge('B', 'C');

    expect(directedGraph.print()).toBe(
      'A => B\nB => C\nC => '
    );
  });
});
