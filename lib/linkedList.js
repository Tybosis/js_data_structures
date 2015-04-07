function LinkedList() {
  this.head = null;
}

LinkedList.prototype.insert = function(value) {
  current = this.head;
  var node = {
    value: value,
    next: current,
    prev: null
  };
  this.head = node;
  if(current !== null) {
    current.prev = node;
  }
};

LinkedList.prototype.remove = function(value) {
  var current = this.head;
  if(current.value == value) {
    if(current.next === null) {
      this.head = null;
    } else {
      this.head = current.next;
      this.head.prev = null;
      return current.value;
    }
  }
  while(current.next !== null) {
    var previous = current;
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
  while(current !== null) {
    if(current.value == value) {
      return current;
    } else {
      current = current.next;
    }
  }
  return current;
};

LinkedList.prototype.toString = function() {
  var current = this.head;
  var string = "";
  while(current.next !== null) {
    string = string + current.value + ", ";
    current = current.next;
  }
  string = string + current.value;
  return string;
};

module.exports = LinkedList;
