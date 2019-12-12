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
  insertCycle(newItem, nextItem) {
    console.log('entering cycle entry');
    let currNode = this.head;
    let previousNode = this.head;
    let prevPrevNode = this.head;

    while((currNode !== null) && (currNode.value !== nextItem)) {
      prevPrevNode = previousNode;
      previousNode = currNode;
      currNode = currNode.next;
    }

    let newNode = new _Node(newItem, prevPrevNode);
    previousNode.next = newNode;
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
  insertAt(newItem, pos) {
    let stepper = 0;
    let currNode = this.head;
    while (stepper !== pos) {
      stepper++;
      currNode = this.head.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    if (stepper === pos) {
      this.insertAfter(newItem, currNode.value);
      return;
    }
  }
}

function display(llist) {
  let currNode = llist.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(llist) {
  let currNode = llist.head;
  let counter = 0;
  while (currNode !== null) {
    currNode = currNode.next;
    counter++;
  }
  console.log('This list has ' + counter + ' items');
}

function isEmpty(llist) {
  let currNode = llist.head;
  if (currNode === null) {
    console.log('This list is empty');
  } else {
    console.log('This list is not empty');
  }
}

function findPrevious(llist, node) {
  let currNode = llist.head;
  let previousNode = llist.head;
  let stepper = 1;

  if (node <= 0) {
    console.log('Node must be greater than 0');
    return;
  }

  while (stepper < node) {
    if (currNode === null) {
      console.log('Boundary error');
      return;
    }
    stepper++;
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (previousNode === null || node === 0) {
    console.log('Item not found');
    return;
  }
  console.log(previousNode.value);
  return;
}

function findLast(llist) {
  if (llist.head === null) {
    console.log('Linked list does not exist');
    return;
  }
  let currNode = llist.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  console.log(currNode.value);
  return;
}

function reverseListIter(lls) {
  if (lls.head === null) {
    console.log('Linked list contains no values');
    return;
  }

  let currNode = lls.head;
  let prevNode = null;
  let tempNode = currNode;

  while(currNode !== null){
    tempNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tempNode;
  }
  lls.head = prevNode;
  return display(lls);
}

function thirdFromEnd(list) {
  if(list.head === null) {
    console.log('List is empty :(');
    return;
  }

  let currNode = list.head;
  let prevNode = null;
  let prevPrevNode = null;

  while(currNode.next !== null) {
    prevPrevNode = prevNode; 
    prevNode = currNode;
    currNode = currNode.next;
  }
  if(prevPrevNode === null) {
    console.log('List isn\'t long enough!');
    return;
  }
  console.log(prevPrevNode.value +' is the 3rd from the end!');
  return prevPrevNode.value;
}

function middleOfList(list) {
  if(list.head === null) {
    console.log('List is empty');
    return;
  }

  let currNode = list.head;
  let stepper = 1;
  while(currNode.next !== null) {
    currNode = currNode.next;
    stepper++;
  }
  console.log(stepper);
  let middle = Math.ceil(stepper/2);
  console.log(middle);
  stepper = 1;
  currNode = list.head;
  while(stepper < middle) {
    stepper++;
    currNode = currNode.next;
  }
  console.log(currNode.value);
  return currNode;
}

function cycleFinder(list) {
  let slowNode = list.head;
  let fastNode = list.head;

  while(slowNode.next && slowNode) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if(slowNode === fastNode) {
      console.log('CYCLE!');
      return true;
    }
  }
}



function main() {
  // let SLL = new LinkedList();
  let CycleList = new LinkedList();

  // SLL.insertFirst('Apollo');
  // SLL.insertLast('Boomer');
  // SLL.insertLast('Helo');
  // SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck');
  // SLL.insertLast('Tauhida');
  //SLL.remove('squirrel');
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('Hotdog', 'Helo');
  // SLL.insertAt('Kat', 3);
  //SLL.remove('Tauhida');
  //display(SLL);
  // size(SLL);
  // isEmpty(SLL);
  // findPrevious(SLL, -19);
  // findPrevious(SLL, 1);
  // findPrevious(SLL, 9);
  // findLast(SLL);
  // reverseListIter(SLL);
  // display(SLL);
  // thirdFromEnd(SLL);
  // middleOfList(SLL);
  CycleList.insertFirst(1);
  CycleList.insertLast(2);
  CycleList.insertLast(3);
  CycleList.insertLast(4);
  CycleList.insertLast(5);
  CycleList.insertLast(6);
  CycleList.insertCycle(7);
  // CycleList.insertLast(8);
  // CycleList.insertLast(9);
  // CycleList.insertLast(10);
  cycleFinder(CycleList);

}

console.log(main());



// Drill 4. Mystery Program
// This program looks for repeating items and then removes the duplicates.




