// Day 17: Data Structures

// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (this.head === null) return;

        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            current.next = null;
        }
    }

    display() {
        let result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1 -> 2 -> 3
list.remove();
list.display(); // Output: 1 -> 2

// Activity 2: Stack

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return undefined;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversed = '';
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"

// Activity 3: Queue

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return undefined;
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return undefined;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
function simulatePrinterQueue(jobs) {
    const queue = new Queue();
    jobs.forEach(job => queue.enqueue(job));
    
    while (!queue.isEmpty()) {
        const currentJob = queue.dequeue();
        console.log(`Processing job: ${currentJob}`);
    }
}

simulatePrinterQueue(["Print document 1", "Print document 2", "Print document 3"]);
// Output:
// Processing job: Print document 1
// Processing job: Print document 2
// Processing job: Print document 3

// Activity 4: Binary Tree

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
tree.inOrderTraversal(); 
// Output: 
// 2
// 3
// 4
// 5
// 6
// 7
// 8
     