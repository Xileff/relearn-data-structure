function createNode(key) {
  const children = [];
  return {
    key,
    children,
    addChild: function(childKey) {
      const child = createNode(childKey);
      children.push(child);
      return child;
    }
  }
}

function createTree(rootKey) {
  const root = createNode(rootKey);
  return {
    root,
    print: function() {
      let result = '';

      function traverse(visitFn, node, depth) {
        visitFn(node, depth);
        if (node.children) {
          node.children.forEach(function(child) {
            traverse(visitFn, child, depth + 1);
          });
        }
      }

      function addKeyToResult(node, depth) {
        return result += result.length === 0 ? node.key : `\n${' '.repeat(depth)}${node.key}`;
      }

      traverse(addKeyToResult, root, 1);
      return result;
    }
  }
}

module.exports = { createTree };