/*
  Check if a string (first argument, str) ends with 
  the given target string (second argument, target).
  判断一个字符串(str)是否以指定的字符串(target)结尾。

  keywords: String.substr()
*/

function confirmEnding(str, target) {
  return (str.substr(-target.length) === target) ? true : false;
}

// str.substr(start[, length]) 
// [if start is negative number, that will be treated at length, from the end of the string]