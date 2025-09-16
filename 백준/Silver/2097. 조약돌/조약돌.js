const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim();

const n = Number(input);

if (n <= 4) console.log(4);
else {
  const root = Math.round(Math.sqrt(n));
  if (root ** 2 >= n) {
    console.log((root - 1) * 4);
  } else {
    console.log((root - 1) * 2 + root * 2);
  }
}
