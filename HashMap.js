// Hash Table: is a common way to implement the Map Data structure or an object
// Hash Table: Hash Table is a function which takes a string as an input and converts it into a numberial value. So it takes key as input and turns that key into a numerical value then that numerical value is used as index, to store the actual value. Then, if you try to access the same key again, the hashing function will process the key, return the same numerical result, which will then be used to look up the associated value. This provides very efficient O(1) lookup time on average.
// Hash Function: Each character has a Unicode, and we can use charCodeAt to find the Unicode
const hash = string => {
  let num = 0;
  for (let i = 0; i < string.length; i++) {
    num += string.charCodeAt(i);
  }
  return num;
};

var HashTable = function() {
  this.collection = {};

  this.add = function(key, value) {
    let index = hash(key);
    if (!this.collection.hasOwnProperty(index)) {
      this.collection[index] = [{[key]: value}];
    } else {
      this.collection[index].push({[key]: value});
    }
  };

  this.remove = function(key) {
    let index = hash(key);
    if (this.collection.hasOwnProperty(index)) {
      if (this.collection[index].length === 1) {
        delete this.collection[index];
        return;
      } else {
        for (let i = 0; i < this.collection[index].length; i++) {
          if (this.collection[index][i].hasOwnProperty(key)) {
            this.collection[index].splice(i, 1);
            return;
          }
        }
        return null;
      }
    } else {
      return null;
    }
  };

  this.lookup = function(key) {
    let index = hash(key);
    if (this.collection.hasOwnProperty(index)) {
      if (this.collection[index].length === 1) {
        if (this.collection[index][0].hasOwnProperty(key)) {
          return this.collection[index][0][key];
        } else {
          return null;
        }
      } else {
        for (let i = 0; i < this.collection[index].length; i++) {
          if (this.collection[index][i].hasOwnProperty(key)) {
            return this.collection[index][i][key];
          }
        }
        return null;
      }
    } else {
      return null;
    }
  };
};