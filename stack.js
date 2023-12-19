function createStack() {
  const stack = [];

  return {
    push: (item) => {
      stack.push(item);
    },
    pop: () => {
      return stack.splice(-1, 1)[0];
    },
    peek: () => {
      return stack[stack.length - 1];
    },
    size: () => {
      return stack.length;
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