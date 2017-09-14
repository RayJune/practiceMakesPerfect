function Waffle() {
  if (!(this instanceof Waffle)) {  // instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性
    return new Waffle();
  }
  this.tastes = 'yummy';
}
Waffle.prototype.wantAnother = true;

// testing invocations 
var first = new Waffle();
var second = Waffle();

console.log(first.tastes); // "yummy" 
console.log(second.tastes); // "yummy"

console.log(first.wantAnother); // true 
console.log(second.wantAnother); // true
