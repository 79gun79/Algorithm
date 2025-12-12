const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [t, ...inp] = input;

function xor(n) {
  if (n < 1) return { len: 0, nums: [] };

  const ck = new Array(n + 1).fill(0);
  const cnt = new Array(n + 1).fill(0);

  let r = 0;
  let p;
  do {
    p = 0;

    for (let i = 1; i < n; i++) {
      for (let j = i + 1; j <= n; j++) {
        if (!ck[i] && !ck[j] && (i ^ j) <= n && !ck[i ^ j]) {
          if (++cnt[i ^ j] > cnt[p]) p = i ^ j;
        }
      }
    }

    ck[p] = 1;
    r += 1;
  } while (p > 0);

  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (!ck[i]) nums.push([i]);
  }

  return { len: n + 1 - r, nums: nums };
}

const res = [];
for (const n of inp) {
  const result = xor(n);
  res.push(result.len);
  res.push(result.nums.join(" "));
}

console.log(res.join("\n"));
