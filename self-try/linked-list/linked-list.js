function createNode(value) {
  return {
    value,
    next: null,
  }
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
  
    push: function(value) {
      const node = createNode(value);
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }

      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.length++;
      return node;
    },
    
    get: function(index) {
      if (this.length === 0 || index < 0 || index > this.length) {
        return null;
      }

      if (index === 0) {
        return this.head.value;
      }

      let i = 0;
      let current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current.value;
    },

    delete: function(index) {
      if (this.length === 0 || index < 0 || index > this.length) {
        return null;
      }

      if (index === 0) {
        const current = this.head;
        this.head = this.head.next;
        return current;
      }

      let i = 0;
      let prev;
      let current = this.head;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      prev.next = current.next;
      this.length--;
      return current;
    },

    pop: function() {
      if (this.length === 1) {
        const current = this.head;
        this.head = null;
        this.tail = null;
        this.length = 0;
        return current;
      }

      let current = this.head;
      let penult;
      while (current.next) {
        penult = current;
        current = current.next;
      }

      this.tail = penult;
      this.tail.next = null;
      return current;
    },

    isEmpty: function() {
      return this.length === 0;
    },
    
    print: function() {
      const values = [];
      let current = this.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      return values.join(" => ");
    }
  }
}

const linkedList = createLinkedList();
linkedList.push('Alice');
linkedList.push('Bob');
linkedList.push('Charlie');

console.log(linkedList.get(0));

module.exports = { createLinkedList };