# JavaScript Data Structures

by Tyler Pottle

## Description

A collection of various data structures inplemented in JavaScript

### Doubly Linked List

The linkedlist.js file contains my version of a [doubly linked list](http://en.wikipedia.org/wiki/Doubly_linked_list) in JavaScript, with insert, remove, and search methods.

My sources for this project were the Wikipedia article linked
above, as well as this youtube video on [creating linked lists is JS](https://www.youtube.com/watch?v=UESEbKb_uWw).

### Stack

The stack.js file contains my implementation of a [stack](http://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29) with push and pop methods.

### Binary Search Tree

The binary_search_tree.js file contains my implementation of a [binary search tree](http://en.wikipedia.org/wiki/Binary_search_tree) with an insert method and a contains method
which takes a number as an argument, and returns true if the BST contains that
number, and false if it does not.  There is also a depth function that returns
a number corresponding to the number of levels in the BST.  The BST also has
attributes which keep track of the size of the BST(aka the number of nodes), and
the balance of the BST(0 if there are an eqaul number of left and right nodes,
a positive integer if there are more left nodes, and a negative number if there
are more right nodes).
