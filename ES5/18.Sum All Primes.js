/* 
    Sum all the prime numbers up to and including 
    the provided number.
    求小于等于给定数值的质数之和。
*/

// brilliant method

function sumPrimes(num) {
  var sieve = [];
  var result = 0;
  var j;
  for (var i = 2; i <= num; i++) {
    if (!sieve[i]) {
      result += i;
      for (j = i << 1; j <= num; j += i) { // j = i * 2
        sieve[j] = true;
      }
    }
  }
  return result;
}

// test here
sumPrimes(10);
