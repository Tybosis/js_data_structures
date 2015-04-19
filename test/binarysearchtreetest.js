var expect = require('chai').expect;
var BinarySearchTree = require('../lib/binary_search_tree.js');

describe('BinarySearchTree', function() {

  beforeEach(function(){
    tree = new BinarySearchTree();
  });

  it('should be a constructor', function() {
    expect(tree).to.have.property('root').that.equals(null);
  }),

  it('has an insert method that inserts a new val', function() {
    tree.insert(5);
    tree.insert(15);
    expect(tree.root.val).to.equal(5);
    expect(tree.root.right.val).to.equal(15);
  }),

  it('multiple inserts have the correct effect', function() {
    tree.insert(11);
    tree.insert(1);
    tree.insert(15);
    expect(tree.root.val).to.equal(11);
    expect(tree.root.left.val).to.equal(1);
    expect(tree.root.right.val).to.equal(15);
  }),

  it('should keep track of the size of the BST', function() {
    expect(tree.size).to.equal(0);
    tree.insert(10);
    expect(tree.size).to.equal(1);
    tree.insert(5);
    expect(tree.size).to.equal(2);
    tree.insert(15);
    expect(tree.size).to.equal(3);
  }),

  it('should include a contains method that will find nodes in the tree', function() {
    tree.insert(5);
    tree.insert(1);
    tree.insert(3);
    expect(tree.contains(3, tree.root)).to.equal(true);
    expect(tree.contains(5, tree.root)).to.equal(true);
    expect(tree.contains(1, tree.root)).to.equal(true);
  }),

  it('should return false for values not in the tree', function() {
    expect(tree.contains(10, tree.root)).to.equal(false);
    tree.insert(5);
    expect(tree.contains(15, tree.root)).to.equal(false);
  }),

  it('should have a depth method that calculates the levels of the tree', function() {
    expect(tree.depth(tree.root)).to.equal(0);
    tree.insert(10);
    expect(tree.depth(tree.root)).to.equal(1);
    tree.insert(5);
    expect(tree.depth(tree.root)).to.equal(2);
    tree.insert(15);
    expect(tree.depth(tree.root)).to.equal(2);
    tree.insert(1);
    expect(tree.depth(tree.root)).to.equal(3);
  }),

  it('should have a balance method which checks how well the tree is balanced', function(){
    expect(tree.balance).to.equal(0);
    tree.insert(10);
    tree.insert(5);
    expect(tree.balance).to.equal(1);
    tree.insert(15);
    expect(tree.balance).to.equal(0);
    tree.insert(20);
    expect(tree.balance).to.equal(-1);
  });
});
