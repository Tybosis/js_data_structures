// Add a JS file called linkedList.js, in a lib directory.

// In that file, create the required JS objects to implement a doubly
// linked list.  Your list implementation should support the following methods:

// insert(node) will insert the given node at the head of the list.

// search(val) will return the node containing 'val' in the list,
// if present, else nil.
// remove(node) will remove the given node from the list, wherever it might be.
// Return the node's value. If it isn't found, return nil.
// toString() will print a comma-separated list of all values in the list,
// whatever they might be: "'A', 'B', 'C', 'D', ..." (quotes don't matter).

function LinkedList() {
  this.head = null;
};

LinkedList.prototype.insert = function(value) {
  current = this.head;
  var node = {
    value: value,
    next: current,
    prev: null
  };
  this.head = node;
  if(current != null) {
    current.prev = node;
  };
};

LinkedList.prototype.remove = function(value) {
  var current = this.head;
  if(current['value'] == value) {
    if(current.next == null) {
      this.head = null;
    } else {
      this.head = current.next;
      this.head.prev = null;
      return current.value;
    }
  };
  while(current.next != null) {
    previous = current;
    current = current.next;
    if(current.value == value) {
      previous.next = current.next;
      current.next.prev = previous;
      current.next = null;
      return current.value;
    }
  }
};

LinkedList.prototype.search = function(value) {
  var current = this.head;
  while(current != null) {
    if(current['value'] == value) {
      return current;
    } else {
      current = current['next'];
    };
  };
  return current;
};

LinkedList.prototype.toString = function() {
  var current = this.head;
  string = ""
  while(current['next'] != null) {
    string = string + current['value'] + ", ";
    current = current.next
  };
  string = string + current['value']
  return string;
};

module.exports = LinkedList;
