var myFunc = function () {
  var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)), //转换arguments为数组，再转换arguments为JSON格式
      result;
  if (!myFunc.cache[cachekey]) {
      result = {};
      // ... expensive operation ...
      myFunc.cache[cachekey] = result; }
      return myFunc.cache[cachekey];
  };

// cache storage 
myFunc.cache = {};