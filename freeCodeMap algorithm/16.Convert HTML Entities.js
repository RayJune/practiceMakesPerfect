/* 
    Convert the characters &, <, >, " (double quote), and ' 
    (apostrophe), in a string to their corresponding HTML entities.
    将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）
    转换为它们对应的 HTML 实体。

    keywords: object, Array.map(), String.replace()
*/

// method1: use simple switch
function convertHTML(str) {
  var temp = str.split('');
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
    case '<':
      temp[i] = '&lt;';
      break;
    case '&':
      temp[i] = '&amp;';
      break;
    case '>':
      temp[i] = '&gt;';
      break;
    case '"':
      temp[i] = '&quot;';
      break;
    case "'":
      temp[i] = '&apos;';
      break;
    default:
      temp[i] = '';
    }
  }
  return temp.join('');
}


// method2: use reg and String.replace()

function convertHTML(str) {
  var newStr = str;
  newStr = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  return newStr;
}


// method3: use object & map

function convertHTML(str) {
  var htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
  };
  return str.split('').map(function convert(entity) {
    return htmlEntities[entity] || entity;
  }).join('');
}

convertHTML('Dolce & Gabbana');
