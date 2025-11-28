const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const t = input.splice(0, input.length - 1);
const prime = Array.from({ length: 1000001 }, () => true);

for (let i = 2; i <= parseInt(Math.sqrt(1000000)); i++) {
  if (prime[i]) {
    let j = 2;
    while (i * j <= 1000000) {
      prime[i * j] = false;
      j += 1;
    }
  }
}

const res = [];
for (const v of t) {
  let flag = true;
  for (let i = 2; i < parseInt(Math.sqrt(1000000)); i++) {
    if (prime[i] && prime[v - i]) {
      res.push(`${v} = ${i} + ${v - i}`);
      flag = false;
      break;
    }
  }
  if (flag) res.push("Goldbach's conjecture is wrong.");
}
console.log(res.join("\n"));
