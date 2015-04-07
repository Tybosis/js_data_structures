var expect = require('chai').expect;
var Movie = require('../lib/linkedlist.js');

describe('LinkedList', function() {
  it('should be a constructor', function() {
    var linked = new LinkedList;
    expect(linked).to.have.property('head').that.equals(null);
  }),

  it('should have an insert method', function() {
    // given that I instantiate a new linkedlist
    // if I call the insert method
    // the head value should be a new node with the new value
  }),

  it('should have a search method', function() {
    // Given that I instantiate a new linkedlist
    // when I search for a given value
    // then if that value exists, that node should be returned
  }),

  it('search should return null if nothing is found', function() {
    // Given that I have a linked list
    // when I search for a value that is not in the list
    // Then the method should return null
  }),

  it('should have a remove method', function() {
    // Given when I have a linked list
    // when i call remove for a given value
    // then that node should be removed from the linked list
  });
});
