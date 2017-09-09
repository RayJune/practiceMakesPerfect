/*
  Return the provided string with the first letter of each word capitalized. 
  句中单词首字母大写

  keywords: Array.map Array.replace()
*/

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

