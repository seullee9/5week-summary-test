// List and briefly describe the types of algorithmic time complexity.
// Be as clear and complete as necessary to demonstrate your mastery.
// Write your explanation below as a comment
/*
Constant time: The time complexity is not influenced by factors of input (such as n). It has a constant time complexity for any input of any size.
  For example, if there was a function that returned the 3rd index of any array (that has a 3rd index), this function would always just check the third index and return it,
  not depending on the length of the arrays that were passed in.

Logarithmic time: This time complexity is mostly seen in binary search. With a sorted array or a sorted tree (i.e. BST), the function splits in half and chooses the half that
  contains the target, splits that half again and move to the half (1/4 of the array) that contains the target and so on until the target is found.

Linear time: This time complexity is seen when using indexOf or a simple loop. This time complexity depends on the length (n) of the input that was passed in.

Exponential: This time complexity is usually seen when checking each subset (combinations) of an input. (i.e. brute force)

Quadratic: This time complextiy is usually seen in sorting algorithms such as bubble sort.

*/

