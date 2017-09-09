/*
  Write a function that takes two or more arrays and returns a new
  array of unique values in the order of the original provided arrays.
  写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的*不包含重复值*的新数组。

  keywords: Array.conat(), arguments, Array.filter(), String.indexOf()
*/

// best one
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  var uniqueArray = [];
  while (arguments[i]) {
    concatArr = concatArr.concat(arguments[i]);
    i++;
  }
  uniqueArray = concatArr.filter(function filterUnique(item, pos) {
    return concatArr.indexOf(item) === pos; // 使用filter()通过检查每个元素的索引并删除不同位置的相同元素来删除重复的元素
  });
  return uniqueArray;
}


// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

