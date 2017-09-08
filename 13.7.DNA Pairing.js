/*
  The DNA strand is missing the pairing element. 
  Take each character, get its pair, and return the results as a 2d array.
  A-T & C-G

  keywords: object
*/

// use object, whici is awesome~!

function pairElement(str) {
  var map = {T: 'A', A: 'T', C: 'G', G: 'C'};
  var strArr = str.split(''); // 转化为数组
  for (var i = 0; i < str.length; i++) {
    strArr[i] = [strArr[i], map[strArr[i]]];
  }
  return strArr;
}

pairElement('GCG');
