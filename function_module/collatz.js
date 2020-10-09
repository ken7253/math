exports.collatz = function(n) {
  const a = [];
  let x = n;
  while (x !== 1) {
    if (x % 2 === 0) {
      x = x / 2;
    } else {
      x = x * 3 + 1;
    }
    a.push(x);
  }
  return a;
};
