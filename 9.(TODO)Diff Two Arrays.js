/* 
  Compare two arrays and return a new array with any items 
  only found in one of the two given arrays, but not both. 
  In other words, return the symmetric difference of the two arrays.
  比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。
  换言之，返回两个数组的差异。

  keywords: String.indexOF() 
*/

// my solution
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  for (var i = 0; i < newArr.length; i++) {
    // TODO
    // 想用数组去重来做，暂时到这里没思路
  }
  // Same, same; but different.
  return newArr;
}


// use function 
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
