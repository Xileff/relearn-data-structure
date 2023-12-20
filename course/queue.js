function createQueue() {
  const queue = [];

  return {
    enqueue: (data) => {
      queue.push(data);
    },
    dequeue: () => {
      return queue.shift();
    },
    peek: () => {
      return queue[0];
    },
    size: () => {
      return queue.size();
    }
  }
}

const q = createQueue();
q.enqueue('Finish data structure course');
q.enqueue('Have lunch');
q.enqueue('Finish work early');

q.dequeue();
q.dequeue();

console.log(q.peek());