/* 
    Given a positive integer num, return the sum of all odd 
    Fibonacci numbers that are less than or equal to num.

    RayJune注： 这里获取Fib序列不要用迭代，因为在浏览器中迭代数目过多会导致stackOverFLow

    keywords: cache-Fib, Array.reduce()
*/

// method1: just use while-loop

function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber < num + 1) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result;
}

// method2: mainly show how to use array to cache Fib()

function sumFibs(num) {
  var arrFib = [1];
  var i = 1;
  while (i < num + 1) {
    arrFib.push(i);
    i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }
  var res = arrFib.reduce(function getOddSum(prev, curr) {
    if (curr % 2 !== 0) {
      return prev + curr;
    }
    return prev;
  });
  return res;
}


/* 
    appendix： fib() array realization
*/

var IterMemoFib = (function getFib() {
  var cache = [1, 1];
  return function cacheFib(n) {
    if (n >= cache.length) {
      for (var i = cache.length; i < n; i++ ) {
        cache[i] = cache[i - 2] + cache[i - 1];
      }
    }
    return cache[n - 1];
  };
}());

