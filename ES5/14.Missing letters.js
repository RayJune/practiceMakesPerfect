/*
  Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined.
  从传递进来的字母序列中找到缺失的字母并返回它。
  如果所有字母都在序列中，返回 undefined。

  keywords: char.charCodeAt(), String.fromCharCode(unicode)
*/


function fearNotLetter(str) {
  var code;
  var start = str[0].charCodeAt();
  for (var i = 1; i < str.length; i++) {
    code = str[i].charCodeAt();
    if (code !== (start + i)) { // 说明现在的值 > 按照顺序的值
      return String.fromCharCode(code - 1);
    }
  }
  var Undefined = void 0;
  return Undefined;
}

fearNotLetter('abce');

