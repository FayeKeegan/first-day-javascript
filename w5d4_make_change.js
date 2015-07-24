function makeChange(total, coin_array) {
  if (total == 0){
    return [];
  }
  else if (coin_array.length == 0){
    return [];
  }
  else if (coin_array[0] > total){
    return makeChange(total, coin_array.slice(1))
  }
  else {
    var original_total = total;
    var best_solution = null;
    for (var i = 0; i < coin_array.length; i++) {
      var coins = [];
      new_total = total - coin_array[i];
      coins.push(coin_array[i]);
      var solution = coins.concat(makeChange(new_total, coin_array));
      if ((best_solution == null) || (solution.length < best_solution.length)) {
        best_solution = solution;
      }
    }
    return best_solution;
  }
}
