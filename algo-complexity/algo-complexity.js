/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table.

/*
 Complexity:
 This function has linear time complexity, because the for loop means that the function is iterating over all n items in the key.
 */



var retrieve = function(key){
  var hash = 0;
  for (var i = 0; i < key.length; i++){
    hash = (hash + Math.pow(i,hash)) % array.length;
  }
  return array[hash];
};


// Problem 2: sortedArrayContainsItem

/*
 Complexity: This function has logarithmic time complexity, because line 39 means that the function is doing a binary search by splitting in half and comparing values, and then splitting in half again, repeating until the target is found.
 */



var sortedArrayContainsItem = function(array, item){
  var center = Math.floor(array.length / 2);
  if (array[center] === item){
    return true;
  }
  var halfOfArray = item < array[center] ? array.slice(0, center) : array.slice(center);
  return sortedArrayContainsItem(halfOfArray, item);
};


// Problem 3: hasDuplicates

/*
 Complexity: This function has quadratic time complexity, because line 53 means that it's iterating once, and 55 means that it's iterating the rest of the array after that index once again.
 */



var hasDuplicates = function(array){
  for(var i = 0; i < array.length; i++){
    var item = array[i];
    if(array.slice(i+1).indexOf(item) !== -1){ //있으면
      return true;
    }
  }
  return false;
};
