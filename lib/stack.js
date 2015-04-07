function Stack() {
  this.head = null;
}

Stack.prototype.push = function(value) {
  var current = this.head;
  var node = {
    value: value,
    next: current
  };
  this.head = node;
};

Stack.prototype.pop = function() {
  var current = this.head;
  if(current === null) {
    throw new RangeError("Stack is empty.  Nothing to pop!");
  } else {
    this.head = this.head.next;
    current.next = null;
    return current;
  }
};

module.exports = Stack;
