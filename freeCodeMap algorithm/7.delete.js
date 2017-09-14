/*
  You will be provided with an initial array (the first argument 
  in the destroyer function), followed by one or more arguments. 
  Remove all elements from the initial array that are of 
  the same value as these arguments.
  实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。

  keywords: Array.prototype.slice.call(arguments) delete
*/


// 因为arguments是一个对象，要把它转化为易操作的数组，所以用了call方法

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i]; // 变为undefined
      }
    }
  }
  return arr.filter(Boolean); // 清除undefined
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);