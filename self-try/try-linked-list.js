function createNode(value) {
  return {
    value,
    next: null,
  };
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
      } else {
        // List sudah punya isi, masukin ke belakang
        this.tail.next = node;
        this.tail = node;
      }

      this.length++;
      return node;
    },

    pop: function() {
      // List kosong
      if (this.isEmpty()) {
        return null;
      }

      // List 1 node
      if (this.head === this.tail) {
        const node = this.tail;
        this.head = null;
        this.tail = null;
        this.length = 0;
        return node;
      }

      // List node > 1
      let current = this.head;
      let penult;
      while (current.next) {
        penult = current;
        current = current.next;
      }
      penult.next = null;
      this.length--;
      return current;
    },

    get: function(index) {
      if (index < 0 || index > this.length - 1 || this.isEmpty()) {
        return null;
      }

      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current;
    },

    delete: function(index) {
      if (index < 0 || index > this.length - 1 || this.isEmpty()) {
        return null;
      }

      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length--;
        return deleted;
      }

      let current = this.head;
      let prev;
      let i = 0;
      while(i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      const deleted = current;
      prev.next = deleted.next; // ibaratnya ada angkazz 1-2-3, 2 adalah current nya
      this.length--;
      return deleted;
    },

    isEmpty: function() {
      return this.length === 0;
    },

    getAll: function() {
      const list = [];
      let current = this.head;
      while (current) {
        list.push(current.value);
        current = current.next;
      }
      return list.join(" => ");
    }
  }
}

// Tes push
const linkedList = createLinkedList();
linkedList.push('A');
linkedList.push('B');
linkedList.push('C');

// Tes pop
// linkedList.pop();
// linkedList.pop();
// console.log(linkedList.getAll());

// Tes get
// console.log(linkedList.get(0).value);

// Tes delete
linkedList.delete(0);
console.log(linkedList.getAll());