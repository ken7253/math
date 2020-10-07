// n番目のフィボナッチ数を返却
const fibonacci = (n) => {
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      const arr = [0, 1];
      for (let i = 0; i + 2 <= n; i++) {
        const reducer = (x, y) => x + y;
        const nextNum = arr.reduce(reducer);
        arr.push(nextNum);
        arr.shift();
      }
      return arr[1];
  }
};
// need fix bigInt
console.log(fibonacci(100));
