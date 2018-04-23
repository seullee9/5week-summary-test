/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) *///FIFO
var Queue = function() {
  this._storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.add = function(input) {
  this._storage[this.end] = input;
  this.end++;
};

Queue.prototype.remove = function() {
  var result = this._storage[this.start];
  delete this._storage[this.start];
  this.start++;
  return result;
};

/*tests
var Queue = new Queue();
Queue.add(5);//5
console.log(Queue);
Queue.add(4);//54
console.log(Queue);
Queue.add(3);//543
console.log(Queue);
Queue.add(2);//5432
console.log(Queue);
Queue.add(1);//54321
console.log(Queue);
Queue.remove();//4321
console.log(Queue);
Queue.remove();//321
console.log(Queue);
Queue.remove();//21
console.log(Queue);*/