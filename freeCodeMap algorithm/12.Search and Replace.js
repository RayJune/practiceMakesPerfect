/*
  Perform a search and replace on the sentence using the arguments provided and return the new sentence.
  使用给定的参数对句子执行一次查找和替换，然后返回新句子。
  First argument is the sentence to perform the search and replace on.
  第一个参数是将要对其执行查找和替换的句子。
  Second argument is the word that you will be replacing (before).
  第二个参数是将被替换掉的单词（替换前的单词）。
  Third argument is what you will be replacing the second argument with (after).
  第三个参数用于替换第二个参数（替换后的单词）。

  keywords: String.charAt(index), String.replace(before, new), String.idnexOf()
*/


// better solution: use indexOf & String.replace()
function myReplace(str, before, after) {
  var newStr = str;
  var newAfter = after;
  var index = newStr.indexOf(before); // indexOf得到before首字母的位置
  if (newStr[index] === newStr[index].toUpperCase()) { // 这里也可以用
    newAfter = newAfter.charAt(0).toUpperCase() + newAfter.slice(1);
  }
  newStr = newStr.replace(before, newAfter);
  return newStr;
}

// test here
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');


// 自己对better solution的改进版
function myReplace(str, before, after) {
  if (str.indexOf(before)) { // 直接判断是否存在字符串
    var newStr = str;
    var newAfter = after;
    if (before[0] === before[0].toUpperCase()) {
      newAfter = newAfter.charAt(0).toUpperCase() + newAfter.slice(1);
    }
    newStr = newStr.replace(before, newAfter);
  }
  return newStr;
}

