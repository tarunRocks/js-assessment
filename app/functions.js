exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
      return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str1){
      return str+', '+str1;
    };
  },

  makeClosures: function(arr, fn) {
    var fnArr = [];

    var innerfn = function(val) {
      return function() { return fn(val); };
    };

    for (var i = 0; i < arr.length; i++) {
      fnArr.push(innerfn(arr[i]));
    }
    return fnArr;
  },

  partial: function(fn, str1, str2) {
    return function(arg){
      return fn(str1,str2,arg);
    }
  },

  useArguments: function() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }

    return sum;
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {
    return fn.bind(null, argument);
  }
};
