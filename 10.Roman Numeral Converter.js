/*
  Convert the given number into a roman numeral.
  All roman numerals answers should be provided in upper-case.

  keywords: object VS two-array
*/


// use forEach & object 核心思想是设立一个罗马数字最基本的转换表
function convertToRoman(num) {
  // adapted from http://rapidtables.com/convert/number/how-number-to-roman-numerals.htm
  var map = [
    { d: 1, r: 'I' },
    { d: 4, r: 'IV' },
    { d: 5, r: 'V' },
    { d: 9, r: 'IX' },
    { d: 10, r: 'X' },
    { d: 40, r: 'XL' },
    { d: 50, r: 'L' },
    { d: 90, r: 'XC' },
    { d: 100, r: 'C' },
    { d: 400, r: 'CD' },
    { d: 500, r: 'D' },
    { d: 900, r: 'CM' },
    { d: 1000, r: 'M' }
  ];
  var romanized = '';
  var newNum = num;
  function convert(el) {
    if (el.d <= num) {
      max = el;
    }
  }
  while (newNum > 0) {
    var max = map[0];
    map.forEach(convert);
    romanized += max.r;
    newNum -= max.d;
  }
  return romanized;
}

convertToRoman(36);

// use two array
var convertToRoman = function convert(num) {
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var romanized = '';
  var newNum = num;
  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= newNum) {
      romanized += romanNumeral(index);
      newNum -= decimalValue[index];
    }
  }
  return romanized;
};

