var expect = require('chai').expect;
var Stack = require('../lib/stack.js');

describe('Stack', function() {
  it('should be a factory with a head property', function() {
    var stack = new Stack();
    expect(stack).to.have.property('head').that.equals(null);
  }),

  it('should have a push method that adds a new node', function() {
    var stack = new Stack();
    stack.push('hello world');
    expect(stack.head).to.equal('hello world');
  }),

  it('most recent pushed item should be the new head', function() {
    var stack = new Stack();
    stack.push('second');
    stack.push('first');
    expect(stack.head).to.equal('first');
  }),

  it('has a pop method that returns the head(top) element', function() {
    var stack = new Stack();
    stack.push('first');
    expect(stack.pop()).to.equal('first');
    expect(stack.head).to.equal(null);
  }),

  it('pop return an error if the stack is empty', function() {
    var stack = new Stack();
    expect(stack.pop()).to.equal('RangeError');
  });
});
