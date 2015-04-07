var expect = require('chai').expect;
var LinkedList = require('../lib/linkedList.js');

describe('LinkedList', function() {

  it('should be a constructor', function() {
    var linked = new LinkedList();
    expect(linked).to.have.property('head').that.equals(null);
  }),

  it('should have an insert method', function() {
    var linked = new LinkedList();
    linked.insert('hello world');
    expect(linked).to.have.property('head').that.has.property('value').that.equals('hello world');
    linked.insert('new top');
    expect(linked['head']['value']).to.equal('new top');
    expect(linked['head']['next']['prev']['value']).to.equal('new top')
  }),

  it('should have a search method', function() {
    var linked = new LinkedList();
    linked.insert('hello world');
    expect(linked['search']('hello world')['value']).to.equal('hello world');
  }),

  it('search should return null if nothing is found', function() {
    var linked = new LinkedList();
    expect(linked['search']('howdy')).to.equal(null);
  }),

  it('should have a remove method', function() {
    var linked = new LinkedList();
    linked.insert('hello world');
    expect(linked.search('hello world')['value']).to.equal('hello world');
    linked.remove('hello world');
    expect(linked.search('hello world')).to.equal(null);
  }),

  it('remove should work in the middle of the list', function() {
    var linked = new LinkedList();
    linked.insert('C');
    linked.insert('B');
    linked.insert('A');
    linked.remove('B');
    expect(linked.search('B')).to.equal(null);
  })

  it('should have a toString method', function() {
    var linked = new LinkedList();
    linked.insert('D');
    linked.insert('C');
    linked.insert('B');
    linked.insert('A');
    expect(linked.toString()).to.equal("A, B, C, D");
  })
});
