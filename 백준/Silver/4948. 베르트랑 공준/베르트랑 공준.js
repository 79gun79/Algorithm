const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  console.log(eratosthenes(2 * input[i]) - eratosthenes(input[i]));
}

function eratosthenes(x) {
  const prime = Array(x + 1).fill(true);
  prime[0] = false;
  prime[1] = false;

  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (prime[i]) {
      for (let j = i * i; j <= x; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.map((v, i) => (v ? i : -1)).filter((v) => v !== -1).length;
}
