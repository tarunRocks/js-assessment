exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var c = 0;
	var res = '';
	for (var i = 0; i < str.length; i++) {
	  if (str[i] === str[i+1]) {
	    c++;
	    if (c < amount) {
	      res += str[i];
	    }
	  } else {
	    c = 0;
	    res += str[i];
	  } 
	};
	return res;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
  	var revStr = '';
  	for(var i=str.length-1; i>=0;i--){
  		revStr += str[i];
  	}
  	return revStr;
  }
};
