
// slice: 获取 currentIndex 到 length 的数组，并返回
function slasher(arr, howMany) {
  return arr.slice(howMany);
}


// splice 删除 currentIndex 到 length 的数组，并返回删除数组，并修改原数组
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

// or 

function slasher(arr, howMany) {
  return arr.splice(howMany);
}