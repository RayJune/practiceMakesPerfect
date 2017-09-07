/*
  Return an array consisting of the largest number 
  from each provided sub-array. 
  For simplicity, the provided array will contain exactly 4 sub-arrays.
  找出多个（4个）数组中的最大数

  keywords: Math.max/min apply()
*/

function largestOfFour(mainArray) {
  return mainArray.map(function (subArray) {
    return Math.max.apply(null, subArray);
  });
}


/* Note that the first argument to apply() sets the value of ‘this’, 
not used in this method, so you pass null. */

/* The Math.max() function returns the largest of zero or more numbers, and we can pass any number of arguments.

console.log(Math.max(4,5,1,3)); // logs 5

But you can’t pass an array of numbers to the method like this​:

var num = [4,5,1,3];
console.log(Math.max(num)); // logs NaN
*/