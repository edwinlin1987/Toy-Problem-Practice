/**
 * @constructor
 */
var Queue = function() {
  this.storage1 = [];
  this.storage2 = [];  
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  this.storage1.push(x);

};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  if (this.storage2.length === 0) {
    while (this.storage1.length > 0) {
      this.storage2.push(this.storage1.pop());
    }
  }	  
  return this.storage2.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  if (this.storage2.length === 0) return this.storage1[0];
  else return this.storage2[this.storage2.length-1];  
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.storage1.length === 0 && this.storage2.length === 0;  
};
