function Sandbox() {
  var args = Array.prototype.slice.call(arguments); // 转换arguments为数组
  var callback = args.pop(); // 弹出最后一个元素，因为最后一个元素是callback
  // modules can be passed as an array or as individual parameters
  var modules = (args[0] && typeof args[0] === 'string') ? args : args[0];
  var i;

  // make sure the function is called
  // as a constructor
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }

  // add properties to `this` as needed: 
  this.a = 1;
  this.b = 2;

  // now add modules to the core `this` object
  // no modules or "*" both mean "use all modules" 
  if (!modules || modules === '*') {
    modules = [];
    for (i in Sandbox.modules) {
      if (Sandbox.modules.hasOwnProperty(i)) {
        modules.push(i);
      }
    }
  }

  // initialize the required modules
  for (i = 0; i < modules.length; i += 1) {
    Sandbox.modules[modules[i]](this);
  }
  // call the callback 
  callback(this);
}

// any prototype properties as needed 
Sandbox.prototype = {
  name: 'My Application',
  version: '1.0',
  getName: function () {
    return this.name;
  }
};


Sandbox('ajax', 'dom', function (box) {
  // console.log(box);
});

Sandbox(['ajax', 'event'], function (box) {
  // console.log(box);
});

Sandbox('dom', 'event', function (box) {
  // work with dom and event
  Sandbox('ajax', function (box) {
    // another sandboxed "box" object 
    // this "box" is not the same as 
    // the "box" outside this function
    // ...
    // done with Ajax
  });
  // no trace of Ajax module here
});
