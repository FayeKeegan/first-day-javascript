function subSet(array){
  if (array.length == 0){
    return [[]]
  }
  else {
    var current_el = array[0];
    var next_subs = subSet(array.slice(1));
    var result = next_subs
    next_subs.forEach(function(next_sub){
      result.push(next_sub.concat(current_el));
    })
    return result;
  }
}
