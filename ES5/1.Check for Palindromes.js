/* 
  Return true if the given string is a palindrome. Otherwise, return false.
  检查回文字符串

  keywords: RegEx Half-indexing String.replace 
*/

// Half-indexing (len/2) has benefits when processing large strings.

function palindrome (str) {
  var re = /[^a-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len / 2; i++)
  {
    if (str[i] !== str[len - i -1]) {
      return false;
    }
  }
  return true;
}