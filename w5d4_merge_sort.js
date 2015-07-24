function mergeSort(array){
  if (array.length == 1){
    return array;
  }
  else {
    if ((array.length % 2) == 0){
      var mid_idx = array.length / 2;
    }
    else {
      var mid_idx = (array.length / 2) - .5;
    }

    var left = mergeSort(array.slice(0, mid_idx));
    var right = mergeSort(array.slice(mid_idx));
    return merge(left, right);
  }
}

function merge(first_array, second_array){
  var result = [];
  while (first_array.length > 0 && second_array.length > 0){
    if (first_array[0] <= second_array[0]){
      result.push(first_array.shift());
    }
    else {
      result.push(second_array.shift());
    }
  }
  result = result.concat(first_array);
  result = result.concat(second_array);
  return result;
}
