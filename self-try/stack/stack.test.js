const { createStack } = require("./stack");

describe('Stack tests', () => {
  let stack;

  beforeEach(() => {
    stack = createStack();
  });

  test('Test Case 1: Push items onto the stack', () => {
    stack.push('A');
    stack.push('B');
    stack.push('C');

    expect(stack.size()).toBe(3);
    expect(stack.peek()).toBe('C');
  });

  test('Test Case 2: Pop items from the stack', () => {
    stack.push('A');
    stack.push('B');
    stack.push('C');

    const poppedItem = stack.pop();

    expect(poppedItem).toBe('C');
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe('B');
  });

  test('Test Case 3: Peek at the top item without removing it', () => {
    stack.push('A');
    stack.push('B');
    stack.push('C');

    const topItem = stack.peek();

    expect(topItem).toBe('C');
    expect(stack.size()).toBe(3);
  });

  test('Test Case 4: Get the size of the stack', () => {
    stack.push('A');
    stack.push('B');
    stack.push('C');

    expect(stack.size()).toBe(3);
  });

  test('Test Case 5: Pop from an empty stack', () => {
    const poppedItem = stack.pop();

    expect(poppedItem).toBeUndefined();
    expect(stack.size()).toBe(0);
  });

  test('Test Case 6: Peek at an empty stack', () => {
    const topItem = stack.peek();

    expect(topItem).toBeUndefined();
    expect(stack.size()).toBe(0);
  });

  test('Test Case 7: Push and pop multiple items', () => {
    stack.push('A');
    stack.push('B');
    stack.push('C');

    const poppedItem1 = stack.pop();
    const poppedItem2 = stack.pop();
    stack.push('D');
    const poppedItem3 = stack.pop();

    expect(poppedItem1).toBe('C');
    expect(poppedItem2).toBe('B');
    expect(poppedItem3).toBe('D');
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe('A');
  });
});
