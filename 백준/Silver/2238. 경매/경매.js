const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

const [inp, ...people] = input;
const [u, n] = inp.map((v) => Number(v));
const cnt = Array.from({ length: u + 1 }, () => 0);
const price = Array.from({ length: u + 1 }, () => []);

for (const v of people) {
  price[Number(v[1])].push(v[0]);
  cnt[Number(v[1])] += 1;
}

const mn = Math.min(...cnt.filter((v) => v > 0));
for (let i = 1; i <= u; i++) {
  if (price[i].length === mn) {
    console.log(price[i][0], i);
    break;
  }
}
