/* CODE GOES HERE
* Don't forget newlines at the end of all files :) */
var printArray = function(array) {
    console.log(array.shift());
  if(array.length !== 0) {
    printArray(array);
  }
};

console.log(printArray([1,2,3,4,5,6,7,8]));


