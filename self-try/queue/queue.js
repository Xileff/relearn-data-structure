function createQueue() {
  const queue = [];
  return {
    enqueue: function(item) {
      queue.push(item);
    },
    dequeue: function() {
      return queue.shift();
    },
    peek: function() {
      return queue[0];
    },
    size: function() {
      return queue.length;
    }
  }
}

module.exports = { createQueue };