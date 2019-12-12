class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node(item);
    this.tail = this.head;
  }

  insertLast(item) {
    let node = new _Node(item);
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  find(item) {
    let currNode = this.head;
    if(!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        console.log('Item not in list');
        return null;
      }
      else {
        currNode = currNode.next;
      }

    }
    return currNode;
  }

  remove(item) {
    if(!this.head) {
      return null;
    }

    if(this.head.value === item) {
      this.head = this.head.next;
      this.head.previous = null;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    
    previousNode.next = currNode.next;
    let tempNode = currNode.next;
    tempNode.previous = previousNode;
    //pr || currNode || currNode.next(rem.previous = previousNode)
  }

  insertBefore(newItem, nextItem) {
    if(!this.head) {
      return null;
    }

    if(this.head.value === nextItem) {
      this.insertFirst(newItem);
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== nextItem)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    let newNode = new _Node(newItem);

    newNode.next = currNode;
    newNode.previous = previousNode;
    
    currNode.previous = newNode;
    previousNode.next = newNode;
  }

  insertAfter(newItem, prevItem) {
    if(!this.head) {
      return null;
    }
    let currNode = this.head;
    // let nextNode = this.head;

    while ((currNode !== null) && (currNode.value !== prevItem)) {
      currNode = currNode.next;
      // nextNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    if(prevItem.next === null) {
      this.insertLast(newItem);
      return;
    }
    let newNode = new _Node(newItem);
    let nextNode = currNode.next;
    newNode.next = currNode.next;
    newNode.previous = currNode;

    currNode.next = newNode;
    nextNode.previous = newNode;
  }

  insertAt(newItem, pos) {
    let stepper = 1;
    let currNode = this.head;
    while (stepper !== pos) {
      stepper++;
      currNode = this.head.next;
    }
    if(currNode === null) {
      console.log('position not found');
      return;
    }
    if(stepper === pos) {
      this.insertAfter(newItem, currNode.next.value);
      return;
    }
  }
}

function reverse(list) {
  let current = list.head;
  let prev = null;
  while(current) {
    let next = current.next;
    current.next = prev;
    current.previous = next;
    prev = current;
    current = next;
  }
  list.tail = list.head;
  list.head = prev;
}

function main() {
  let DLL = new DoublyLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');

  // DLL.remove('Picon');
  // DLL.insertBefore('PLANET', 'Picon');
  // // console.log(DLL.find('Picon'));
  // // console.log(DLL.find('PLANET'));
  // DLL.insertAfter('EARTH', 'Gemenon');
  // console.log(DLL.find('EARTH'));
  DLL.insertAt('Tauron', 4);
  // console.log(DLL.find('Tauron'));
  // console.log(DLL.find('Gemenon'));
  reverse(DLL);
  console.log(DLL.find('Aquaria'));
  console.log(DLL.find('Sagittaron'));
  console.log(DLL.find('Caprica'));
}

main();