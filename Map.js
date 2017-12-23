//  Map Data Structure: Maps are the data structures that store key-value pairs. In JavaScript, these are available to us as objects. Maps provide rapid lookup of stored items based on key values and are very common and useful data structures.

// ES6 JavaScript Map: The new version of JavaScript in ES6, it provides us with a built-in Map object which provides much of the functionality we wrote by hand in the last challenge. This Map object, although similar to regular JavaScript objects, provides some useful functionality that normal objects lack. For example, an ES6 Map method called ".entries()". It tracks the insertion order of the items which are added to it. Here is a more complete overview of its methods: http://beta.freecodecamp.com/en/challenges/coding-interview-data-structure-questions/create-an-es6-javascript-map

var Map = function() {
  this.collection = {};

  this.add = function(key, value) {
    this.collection[key] = value;
  };

  this.remove = function(key) {
    delete this.collection[key];
  };

  this.get = function(key) {
    return this.collection[key];
  };

  this.has = function(key) {
    if (key in this.collection) {
      return true;
    }
    return false;
  };

  this.values = function() {
    return Object.values(this.collection);
  };

  this.size = function() {
    return Object.keys(this.collection).length;
  };

  this.clear = function() {
    this.collection = {};
  };
};