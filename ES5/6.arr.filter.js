/*
  Remove all falsy values from an array.
  Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  删除数组中的所有假值。
  在JavaScript中，假值有false、null、0、""、undefined 和 NaN。

  keywords: Array.filter()
*/

// filter() calls a provided callback function once for each element in an array, 
// and constructs a new array of all the values for which callback returns a value that coerces to true.

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, 'ate', '', false, 9]);