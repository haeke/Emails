// A Binary Search tree
// creating a binary search tree, there would be a Node class that has a value, left and right.

class Node {
    // The left and right are used to add a new value to an existing node on either the left or right.
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create a BinarySearchTree class that has a root value.

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}