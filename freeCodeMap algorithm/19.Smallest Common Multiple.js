/* 
    The smallest common multiple between two numbers is the 
    smallest number that both numbers can divide into. This 
    concept can be extended to more than two numbers as well.
    找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
    范围是两个数字构成的数组，两个数字不一定按数字顺序排序。

    keywords: do-while, Array.sort(function)
*/

function smallestCommons(arr) {
  arr.sort(function bigToSmall(a, b) {
    return b - a;
  });
  var i;
  var newArr = [];
  for (i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  var quot = 0;
  var loop = 1;
  do {
    quot = newArr[0] * newArr[1] * loop;
    for (i = 2; i < newArr.length; i++) {
      if (quot % newArr[i] !== 0) {
        break;
      }
    }
    loop += 1;
  } while (i !== newArr.length);
  return quot;
}
