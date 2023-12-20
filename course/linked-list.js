function createNode(value) {
  return {
    value: value,
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
      // List kosong
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      // List tidak kosong
      } else {
        this.tail.next = node; // tail saat ini memiliki next ke node baru
        this.tail = node; // node baru tsb menjadi tail yg baru
      }
      this.length++;
      return node;
    },

    pop: function() {
      // List kosong
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;
      // List 1 node
      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return node;
      }

      // List > 1 node
      let current = this.head;
      let penultimate;
      
      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        } else {
          current = current.next;
        }
      }

      penultimate.next = null;
      this.tail = penultimate;
      this.length--;

      return node;
      
    },

    get: function(index) {
      // List kosong
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      // List item hanya 1
      if (index === 0) {
        return this.head;
      }

      // List item lebih dari 1
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current;

    },

    delete: function(index) {
      // List kosong
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      // List 1 node
      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length--;
        return deleted;
      }

      // List > 1 node
      let current = this.head;
      let prev;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      prev.next = current.next;
      const deleted = current;
      this.length--;
      return deleted;
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
const values = ['a', 'b', 'c', 'd'];
values.forEach((val) => linkedList.push(val));

const resultPrint = linkedList.print();
console.log('Initial list : ' + resultPrint + '\n');

const resultGet = linkedList.get(1);
console.log('Result get(1) : ' + resultGet.value + '\n');

const resultPop = linkedList.pop();
console.log('Result pop() : ' + resultPop.value + '\n');
console.log('List after pop() : ' + linkedList.print() + '\n');