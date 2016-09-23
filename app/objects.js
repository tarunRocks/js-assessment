exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	 return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {

  	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
 	var objectmap = [];

    var keys = Object.keys(obj); {
      for(var i=0;i<keys.length;i++) {
        objectmap.push(keys[i] + ': ' + obj[keys[i]]);
      }
    }
    return objectmap;
  }
};
