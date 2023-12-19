function createStack() {
  let array = [];

  return {
    push: function(item) {
      array.push(item);
    },
    pop: function() {
      return array.splice(-1, 1)[0];
    },
    peek: function() {
      return array[array.length - 1];
    },
    size: function() {
      return array.length;
    }
  }
}

const bookStack = createStack();

bookStack.push('Harry Potter');
bookStack.push('Clean Code');
bookStack.push('The Pragmatic Programmer');

bookStack.pop();

console.log(bookStack.peek());
console.log(bookStack.size());