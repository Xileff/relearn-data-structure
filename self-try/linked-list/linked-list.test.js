const { createLinkedList } = require('./linked-list')

describe('LinkedList tests', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = createLinkedList();
  });

  test('Test Case 1: Add elements to the linked list', () => {
    linkedList.push('Alice');
    linkedList.push('Bob');
    linkedList.push('Charlie');

    expect(linkedList.print()).toBe('Alice => Bob => Charlie');
  });

  test('Test Case 2: Get elements at specific positions', () => {
    linkedList.push('Alice');
    linkedList.push('Bob');
    linkedList.push('Charlie');

    expect(linkedList.get(0)).toBe('Alice');
    expect(linkedList.get(1)).toBe('Bob');
    expect(linkedList.get(2)).toBe('Charlie');
  });

  test('Test Case 3: Delete an element at a specific position', () => {
    linkedList.push('Alice');
    linkedList.push('Bob');
    linkedList.push('Charlie');

    linkedList.delete(1);

    expect(linkedList.print()).toBe('Alice => Charlie');
  });

  test('Test Case 4: Pop an element from the end', () => {
    linkedList.push('Alice');
    linkedList.push('Bob');
    linkedList.push('Charlie');

    linkedList.pop();

    expect(linkedList.print()).toBe('Alice => Bob');
  });

  test('Test Case 5: Check if the linked list is empty', () => {
    expect(linkedList.isEmpty()).toBe(true);
  });

  test('Test Case 6: Add more elements after deletion', () => {
    linkedList.push('Alice');
    linkedList.push('Bob');
    linkedList.push('Charlie');

    linkedList.delete(1); // Delete 'Bob'
    linkedList.push('David');
    linkedList.push('Eva');

    expect(linkedList.print()).toBe('Alice => Charlie => David => Eva');
  });

  test('Test Case 7: Delete the only remaining element', () => {
    linkedList.push('Alice');
    linkedList.delete(0); // Delete 'Alice'

    expect(linkedList.print()).toBe('');
  });

  test('Test Case 8: Pop the last remaining element', () => {
    linkedList.push('Alice');
    linkedList.pop(); // Pop 'Alice'

    expect(linkedList.print()).toBe('');
  });

  test('Test Case 9: Check if the linked list is empty again', () => {
    expect(linkedList.isEmpty()).toBe(true);
  });
});