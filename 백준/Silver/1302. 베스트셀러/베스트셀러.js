const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, ...book] = input;

const countMap = book.reduce((obj, v) => {
  obj[v] = (obj[v] || 0) + 1;
  return obj;
}, {});

const mp = Object.entries(countMap);
mp.sort();
mp.sort((a, b) => b[1] - a[1]);

console.log(mp[0][0]);
