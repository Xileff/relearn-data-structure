const { createTree } = require("./tree");

describe('Tree tests', () => {
  let tree;

  beforeEach(() => {
    tree = createTree('A');
  });

  test('Test Case 1: Create a tree and print it', () => {
    expect(tree.print()).toBe('A');
  });

  test('Test Case 2: Add child nodes and print the tree', () => {
    const nodeB = tree.root.addChild('B');
    const nodeC = tree.root.addChild('C');
    const nodeD = tree.root.addChild('D');

    nodeB.addChild('E');
    nodeC.addChild('F');

    expect(tree.print()).toBe(
      'A\n' +
      '  B\n' +
      '   E\n' +
      '  C\n' +
      '   F\n' +
      '  D'
    );
  });

  test('Test Case 3: Print an empty tree', () => {
    const emptyTree = createTree('Empty');
    expect(emptyTree.print()).toBe('Empty');
  });

  test('Test Case 4: Add multiple children to a node', () => {
    const nodeB = tree.root.addChild('B');
    nodeB.addChild('C');
    nodeB.addChild('D');
    nodeB.addChild('E');

    expect(tree.print()).toBe(
      'A\n' +
      '  B\n' +
      '   C\n' +
      '   D\n' +
      '   E'
    );
  });

  test('Test Case 5: Add children to different nodes', () => {
    const nodeB = tree.root.addChild('B');
    const nodeC = tree.root.addChild('C');

    nodeB.addChild('D');
    nodeC.addChild('E');

    expect(tree.print()).toBe(
      'A\n' +
      '  B\n' +
      '   D\n' +
      '  C\n' +
      '   E'
    );
  });
});
