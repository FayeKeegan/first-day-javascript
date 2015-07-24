Array.prototype.myUniq = function () {
  var result = [];

  this.forEach(function (element) {
    if (result.indexOf(element) === -1) {
      result.push(element);
    }
  });
  return result;
}

function myUniq(array){
  result = [];
  array.forEach(function (element){
      if (result.indexOf(element) === -1){
        result.push(element);
      };
  });
  return result;
};


Array.prototype.twoSum = function(){
  var result = [];

  for(var i = 0; i < this.length; i++) {
      current_element = this[i];
      for (var j = i+1; j < this.length; j++) {
        if (current_element + this[j] === 0) {
          result.push([i,j]);
        };
      };
  };

  return result;
};

Array.prototype.myTranspose = function() {
  var result = [];
  for(var col = 0; col < this.length; col++) {
    new_row = [];
    for(var row = 0; row < this.length; row++) {
      new_row.push(this[row][col]);
    }
    result.push(new_row);
  }
  return result;
}

Array.prototype.myEach = function(callback) {
    for (var i = 0; i < this.length; i++) {
      callback(this[i]);
    };
};

Array.prototype.myMap = function(callback){
  result = [];
  this.myEach(function (elem) {
      result.push(callback(elem))
    }
  );
  return result;
};


Array.prototype.myInject = function(callback){
  accumulator = this[0]
  this.slice(1).myEach( function(elem) {
      accumulator = callback(accumulator, elem);
    }
  );
  return accumulator;
}

Array.prototype.myBubbleSort = function() {
  copy = this;
  sorted = false;
  while (sorted === false){
    sorted = true;
    for (i = 0; i < copy.length-1; i++) {
      first_element = copy[i];
      second_element = copy[i+1];
      if (first_element > second_element) {
        sorted = false
        copy[i+1] = first_element;
        copy[i] = second_element;
        i = 0;
      }
    }
  }
  return copy;
}


String.prototype.mySubStrings = function (){
  subStringsArray = [];
  for (var i = 0; i < this.length; i++) {
    sub = "";
    for (var j = i+1; j <= this.length; j++) {
      sub = this.slice(i, j);
      subStringsArray.push(sub);
    }
  }
  return subStringsArray;
}

Array.prototype.mySlice = function(start, end){
  if (end < start){
    return [];
  }
  else{
    return [this[start]].concat(this.myRange(start+1, end));
  }
};

function myRange(start, end){
  if (end < start){
    return [];
  }
  else {
    return [start].concat(myRange(start+1, end));
  }
}

function exp(base, n){
  if (n == 0){
    return 1;
  }
  else {
    return base * exp(base, n-1);
  }
}

function expTwo(base, n){
  if (n == 1){
    return base;
  }
  else if (n == 0){
    return 1;
  }
  else if ((n % 2) == 0) {
    return exp(base, n/2) * exp(base, n/2);
  } else {
    return (base * (exp(base, (n-1)/2) * exp(base, (n-1)/2)));
  }
}

function fib(number) {
  if (number == 1 ) {
    return [1]
  }
  else if (number == 2) {
    return [1,1]
  }
  else {
    previous_array = fib(number-1);
    prev1 = previous_array[previous_array.length-1];
    prev2 = previous_array[previous_array.length-2];
    previous_array.push( prev1 + prev2);
    return previous_array;
  }
}

function bsearch(array, target){
  if (array.length == 0){
    return null;
  }
  else {
    if ((array.length % 2) == 0){
      mid_idx = array.length / 2
    }
    else {
      mid_idx = array.length / 2 - .5
    }
    middle_num = array[mid_idx];
    right = array.slice(mid_idx+1);
    left = array.slice(0, mid_idx);
    if (middle_num == target) {
      return mid_idx;
    }
    else if (target < middle_num ) {
      return bsearch(left, target);
    }
    else {
      return mid_idx+1 + bsearch(right, target);
    }
  }
}
