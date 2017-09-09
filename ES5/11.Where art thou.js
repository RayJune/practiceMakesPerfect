/*
  Write an algorithm that will take an array for the first argument 
  and return an array with all the objects that matches all the 
  properties and values in the Object passed as second parameter.

  写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对
  （第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么
  此对象的每一个属性-值对都必须存在于 collection 的对象中。

  keywords: Array.forEach() Array.every() Array.filter() Object.keys()

  The forEach() method executes a provided function once for each array element. 
  forEach() 方法对数组的每个元素执行一次提供的函数。

  The every() method tests whether all elements in the array pass the test implemented by the provided function.
  every() 方法测试数组的所有元素是否都通过了指定函数的测试。

  for..in和Object.keys都是遍历可遍历的属性，但for...in还会遍历原型链上的属性
*/

// brilliant
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source); // 返回可枚举的属性

  return collection.filter(function filterKeys(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}


whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });


// 使用every来替换掉for
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function filterKeys(obj) {
    return srcKeys.every(function whetherHasKeys(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

