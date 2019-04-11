// Create a a Node class - The constructor should accept an argument that gets assigned to the data property and initialize an empty array for storing children. The node class should have methods 'add' and 'remove'.

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    // The add method should always create a new node with whatever data that we want to pass to it.
    this.children.push(new Node(data));
  }

  remove(data) {
    // Given some data, look at each child of the current node and remove any node where data === data.
    // Use the filter method on the children array to return a new array that does not include the data value passed to the remove method.
    let filteredNodes = this.children.filter(element => {
      return element !== data;
    });
    // set the children object to the list of filteredNodes
    this.children = filteredNodes;
  }
}

// create an instance of Node
let node = new Node("a");
// Add a child called b to the node object
node.add("b");
node.add("c");
console.log(node.children);
console.log(node.children[1]);
node.children[1].add("c");
console.log(node.children);
console.log(node.children[1].children[0].children);

// Create a Tree class - will contain methods for Depth First Search and Depth First Search traversal methods.

class Tree {
  // when an instance of the Tree class is created the root should be set to null.
  constructor() {
    this.root = null;
  }
  traverseBF(callback) {
    // create an array consisting of the root node object
    const arr = [this.root];
    while (arr.length) {
      // use the shift method to remove the first element in the arr
      const node = arr.shift();
      // take every child inside of the node array and push it onto the arr object
      arr.push(...node.children);
      // the iterator function
      callback(node);
    }
  }
}

// Example of creating a Node and setting the root node of the Tree class to the Node object.
const testNode = new Node(1);
const testTree = new Tree();
testTree.root = testNode;
console.log(testTree.root);
