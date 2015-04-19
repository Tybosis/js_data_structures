function BinarySearchTree() {
  this.root = null;
  this.size = 0;
  this.balance = 0;
}

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  if(this.root === null) {
    this.root = new Node(value);
    this.size++;
  } else {
    var current = this.root;
    while(true) {
      if(value < current.val) {
        if (current.left === null) {
          current.left = new Node(value);
          this.size++;
          this.balance++;
          break;
        } else {
          current = current.left;
        }
      } else if(value > current.val) {
        if (current.right === null) {
          current.right = new Node(value);
          this.size++;
          this.balance--;
          break;
        } else {
          current = current.right;
        }
      } else {
        break;
      }
    }
  }
};

BinarySearchTree.prototype.contains = function(value, scope) {
  current = scope;
  if(current === null) {return false;}
  if(current.val == value) {
    return true;
  } else if(value < current.val) {
    if(current.left) {
      return this.contains(value, current.left);
    } else {
      return false;
    }
  } else {
    if(current.right) {
      return this.contains(value, current.right);
    } else {
      return false;
    }
  }
};

BinarySearchTree.prototype.depth = function(start) {
  if(start === null) {
    return 0;
  } else {
    return 1 + Math.max(this.depth(start.left), this.depth(start.right));
  }
};

module.exports = BinarySearchTree;
