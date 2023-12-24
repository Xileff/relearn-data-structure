function createStack() {
  const stack = [];

  return {
    push: function(item) {
      stack.push(item);
    },

    pop: function() {
      const popped = stack[stack.length - 1];
      stack.splice(stack.length - 1, 1)[0];
      return popped;
    },

    peek: function() {
      return stack[stack.length - 1];
    },

    size: function() {
      return stack.length;
    }
  }
}

module.exports = { createStack };