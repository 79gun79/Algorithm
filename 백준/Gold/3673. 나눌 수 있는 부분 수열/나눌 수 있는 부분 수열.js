const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[c], ...inp] = input;
const result = [];

for (let i = 0; i < 2 * c; i += 2) {
  const [d, n] = inp[i];
  const a = inp[i + 1];
  const b = Array.from({ length: d }, () => 0);

  let [sum, res] = [0, 0];
  for (const v of a) {
    sum += v;
    sum %= d;

    res += b[sum];
    b[sum] += 1;
  }
  res += b[0];
  result.push(res);
}
console.log(result.join("\n"));
