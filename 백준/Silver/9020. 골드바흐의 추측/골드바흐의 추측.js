const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [t, ...inp] = input;

function prime(x) {
  if (x === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(x)); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

for (const n of inp) {
  let [a, b] = [n / 2, n / 2];

  for (let i = 0; i < n / 2; i++) {
    if (prime(a) && prime(b)) {
      console.log(a, b);
      break;
    } else {
      a -= 1;
      b += 1;
    }
  }
}
