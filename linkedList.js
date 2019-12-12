class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    previousNode.next = currNode.next;
  }
  insertBefore(newItem, nextItem) {

    if (!this.head) {
      return null;
    }

    if (this.head.value === nextItem) {
      this.insertFirst(newItem);
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== nextItem)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    let newNode = new _Node(newItem, previousNode.next);
    previousNode.next = newNode;
  }
  insertAfter(newItem, prevItem) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;

    while ((currNode !== null) && (currNode.value !== prevItem)) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    if (prevItem.next === null) {
      this.insertLast(newItem);
      return;
    }
    let newNode = new _Node(newItem, currNode.next);
    currNode.next = newNode;
  }
  insertAt(newItem, pos){
    let stepper = 0;
    let currNode = this.head;
    while (stepper !== pos){
      stepper++;
      currNode = this.head.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    if(stepper === pos){
      this.insertBefore(newItem, currNode.value);
      return;
    }
  }
}




function main() {
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

}

console.log(main());
