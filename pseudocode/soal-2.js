// Buatlah deret bilangan Fibonacci sebanyak 20
// 0 1 1 2 3 5 8 … dan seterusnya

// Answer:
function fibonacci(x, y, n) {
  let fibSeq = [x, y];

  while (fibSeq.length < n) {
    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
  }

  return fibSeq;
}

const x = 0;
const y = 1;
const n = 20;
const fibonacciSeq = fibonacci(x, y, n);

console.log(fibonacciSeq.join(" "));
