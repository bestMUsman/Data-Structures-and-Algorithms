// Tree Data Structure: is usually visualized with the root node at the top; you can think of it as a natural tree flipped upside down.
//  The root node is the top of the tree. Data points in the tree are called nodes. Nodes with branches leading to other nodes are referred to as the parent of the node the branch leads to (the child). A subtree refers to all the descendants of a particular node, branches may be referred to as edges, and leaf nodes are nodes at the end of the tree that have no children. Finally, note that trees are inherently recursive data structures. That is, any children of a node are parents of their own subtree, and so on. The recursive nature of trees is important to understand when designing algorithms for common tree operations. Look at this picture to understand this: https://2.bp.blogspot.com/-CApCcTOe1A0/TwppaUWiQsI/AAAAAAAABX4/sJv92_ZJzhE/s1600/Tree+Term.gif

// The tree data structure can have any number of branches at a single node, a binary tree can only have two branches for every node.
// A binary search tree adds these two characteristics:
// 1) Each node has up to two children
// 2) For each node, its left (subtree/descendants) is less than the current node, which is less than the right (subtree/descendants).

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.findMin = function() {
    if (this.root === null) return null;
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  };

  this.findMax = function() {
    if (this.root === null) return null;
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  };

  this.add = function(e) {
    let node = new Node(e);
    if (this.root == null) {
      this.root = node;
      return;
    } else {
      this.search = function(item) {
        if (e < item.value) {
          if (item.left === null) {
            item.left = node;
            return;
          } else {
            this.search(item.left);
          }
        } else if (e > item.value) {
          if (item.right == null) {
            item.right = node;
            return;
          } else {
            this.search(item.right);
          }
        } else {
          return null;
        }
      };
      this.search(this.root);
    }
  };

  this.isPresent = function(value) {
    if (this.root == null) {
      return false;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else {
          return true;
        }
      }
      return false;
    }
  };

  this.isBalanced = function() {
    return this.findMinHeight() + 1 >= this.findMaxHeight();
  };

  this.findMinHeight = function(node = this.root) {
    if (node === null) {
      return -1;
    }

    let leftHeight = this.findMinHeight(node.left);
    let rightHeight = this.findMinHeight(node.right);
    return Math.min(leftHeight, rightHeight) + 1;
    // we are finding the height of a left subtree and a height of right subtree, then we getting the min value out of those two, then adding 1 to it, so that way it will add the min height of subtree (left or right, which ever is less) + root distance which is 1  which would mean the height of a tree
    // https://www.youtube.com/watch?v=_pnqMz5nrRs&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=31
    // https://www.youtube.com/watch?v=_SiwrPXG9-g
  };

  this.findMaxHeight = function(node = this.root) {
    if (node === null) {
      return -1;
    }

    let leftHeight = this.findMaxHeight(node.left);
    let rightHeight = this.findMaxHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
    // we are finding the height of a left subtree and a height of right subtree, then we getting the min value out of those two, then adding 1 to it, so that way it will add the max height of subtree (left or right, which ever is more) + root distance which is 1  which would mean the height of a tree
    // https://www.youtube.com/watch?v=_pnqMz5nrRs&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=31
    // https://www.youtube.com/watch?v=_SiwrPXG9-g
  };

  /*
  Depth First Search (3 ways to do DFS): 
    1) in-order: Get values in order from smallest to largest
    2) pre-order: Get the roots/parents value first then their children. Note that last leaf nodes also have null   childern, so in other words they are root/parent of their own childern as well.
    3) post-order: Get the values of leafNodes/childern first, then their parents and so on. In other words the    value of the tree's main root which is "this.root" would be in the end.
  */

  this.inOrder = function() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      this.inOrderFunction = function(node) {
        node.left && this.inOrderFunction(node.left);
        result.push(node.value);
        node.right && this.inOrderFunction(node.right);
      };
      this.inOrderFunction(this.root);
      return result;
    }
  };

  this.preOrder = function() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      this.preOrderFunction = function(node) {
        result.push(node.value);
        node.left && this.preOrderFunction(node.left);
        node.right && this.preOrderFunction(node.right);
      };
      this.preOrderFunction(this.root);
      return result;
    }
  };

  this.postOrder = function() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      this.postOrderFunction = function(node) {
        node.left && this.postOrderFunction(node.left);
        node.right && this.postOrderFunction(node.right);
        result.push(node.value);
      };
      this.postOrderFunction(this.root);
      return result;
    }
  };

  // this.levelOrder = function() {
  //   let results = [];
  //   let count = -1;
  // if (this.root == null) {
  //   return null;
  // } else {
  //   this.levelOrderFunction = function(node) {
  //       count += 1;
  //       results.push([count, node.value]);
  //       node.left && this.levelOrderFunction(node.left)
  //       node.right && this.levelOrderFunction(node.right)
  //       count -= 1;
  //   }
  //   this.levelOrderFunction(this.root)
  //   results = results.sort((a,b) => a[0]-b[0]);
  //   for (let i = 0; i < results.length; i++) {
  //     results[i] = results[i][1]
  //   }
  //   return results
  // }
  // }

  // Breadth First Search: Getting all the nodes' values of the same level then next level ones, and so on. Which  means the first level value would only be "one node's value" which would be the "this.root"
  this.levelOrder = function() {
    if (this.root == null) {
      return null;
    } else {
      let Q = [this.root];
      let results = [];
      while (Q.length > 0) {
        let node = Q.shift();
        results.push(node.value);
        node.left && Q.push(node.left);
        node.right && Q.push(node.right);
      }
      return results;
    }
  };

  this.reverseLevelOrder = function() {
    if (this.root == null) {
      return null;
    } else {
      let Q = [this.root];
      let results = [];
      while (Q.length > 0) {
        let node = Q.shift();
        results.push(node.value);
        node.right && Q.push(node.right);
        node.left && Q.push(node.left);
      }
      return results;
    }
  };

  // Find the sum of the nodes of each level, using Depth First Search.
  this.levelOrderSum = function() {
    if (this.root == null) {
      return null;
    } else {
      let count = -1;
      let results = [];
      this.search = function(node) {
        count += 1;
        results.push([count, node.value]);
        node.left && this.search(node.left);
        node.right && this.search(node.right);
        count -= 1;
      };
      this.search(this.root);
      results = results.sort((a, b) => a[0] - b[0]);
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i][0] == results[i + 1][0]) {
          let sum = results[i][1] + results[i + 1][1];
          results[i][1] = sum;
          results.splice(i + 1, 1);
          i--;
        }
      }
      return results;
    }
  };
}

let bst = new BinarySearchTree();
                                                    bst.add(100);
                        bst.add(50);                                       bst.add(150);
            bst.add(20);            bst.add(80);              bst.add(120);             bst.add(180);
      bst.add(10); bst.add(22); bst.add(75); bst.add(85); bst.add(115); bst.add(125); bst.add(175); bst.add(185);
// To View The Tree Diagram: https://drive.google.com/file/d/0B0S_683ssSvGdEpmdVAyS2Q1Z28/view?usp=sharing
