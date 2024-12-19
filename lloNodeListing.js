//Difing a Node Class and representing an element in LinkedLists
class Node {
    constructor(value) {
        this.value = value; // stores the value of the nodes
        this.next = null;
    }
}

class LinkedList { // Defining LinkedList class to manage the linkedlists
    constructor() {
        this.head = null;
    }

    append(value) { // Append the new node with the value to end the list
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.print();
    }

    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

const linkedList = new LinkedList();
linkedList.append("Data Structures - Array");
linkedList.append("Variable Type - Integer");
linkedList.append("Sorting Algorithm - Bubble Sort");
