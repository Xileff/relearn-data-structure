const { createQueue } = require("./queue");

describe('Queue tests', () => {
  let queue;

  beforeEach(() => {
    queue = createQueue();
  });

  test('Test Case 1: Enqueue items into the queue', () => {
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');

    expect(queue.size()).toBe(3);
    expect(queue.peek()).toBe('A');
  });

  test('Test Case 2: Dequeue items from the queue', () => {
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');

    const dequeuedItem = queue.dequeue();

    expect(dequeuedItem).toBe('A');
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe('B');
  });

  test('Test Case 3: Peek at the front item without removing it', () => {
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');

    const frontItem = queue.peek();

    expect(frontItem).toBe('A');
    expect(queue.size()).toBe(3);
  });

  test('Test Case 4: Get the size of the queue', () => {
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');

    expect(queue.size()).toBe(3);
  });

  test('Test Case 5: Dequeue from an empty queue', () => {
    const dequeuedItem = queue.dequeue();

    expect(dequeuedItem).toBeUndefined();
    expect(queue.size()).toBe(0);
  });

  test('Test Case 6: Peek at an empty queue', () => {
    const frontItem = queue.peek();

    expect(frontItem).toBeUndefined();
    expect(queue.size()).toBe(0);
  });

  test('Test Case 7: Enqueue and dequeue multiple items', () => {
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');

    const dequeuedItem1 = queue.dequeue();
    const dequeuedItem2 = queue.dequeue();
    queue.enqueue('D');
    const dequeuedItem3 = queue.dequeue();

    expect(dequeuedItem1).toBe('A');
    expect(dequeuedItem2).toBe('B');
    expect(dequeuedItem3).toBe('C');
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe('D');
  });
});
