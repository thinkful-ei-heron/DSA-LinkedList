class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}



class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(item){
        this.head = new _Node(item, this.head);
    }
    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
        }
        else{
            let tempNode = this.head;
            while(tempNode.head !== null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item){
        let currNode = this.head;
        if(!this.head){
            return null;
        }
        while(currNode.value !== item){
            if(currNode.next === null){
                return null;
            }
            else{
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    

}