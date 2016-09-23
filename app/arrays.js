exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

    for(var i=0; i<arr.length;i++)
      if(arr[i]===item){
        return i;
      }
      return -1;
  },

  sum: function(arr) {
    var sum =0;
    for(var i=0; i<arr.length;i++){
      sum = sum + arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var changedArr = [];
     for(var i=0; i<arr.length;i++){
      if(arr[i] !== item){
        changedArr.push(arr[i]);
      }
    }
    return changedArr;
  },

  removeWithoutCopy: function(arr, item) {
    arr.sort();
     for(var i=0; i<arr.length;i++){
        if(arr[i] && arr[i+1] && arr[i] === arr[i+1]){
          delete arr[i];
        } 
     }
  },

  append: function(arr, item) {
     arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
   // return arr1.push(...arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    var squareArr = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      squareArr.push(arr[i] * arr[i]);
    }

    return squareArr;
  },

  findAllOccurrences: function(arr, target) {
    var occArr = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        occArr.push(i);
      }
    }

    return occArr;
  }
};
