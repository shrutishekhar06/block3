function multiplyNumbers(a, b) {

  const multiplier = {
    multiply: function(x, y) {
      return x * y;
    }
  };

  return multiplier.multiply.apply(null, [a, b]);
}

console.log(multiplyNumbers(4, 5)); 
