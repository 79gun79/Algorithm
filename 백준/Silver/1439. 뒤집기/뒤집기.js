const s = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("")
  .map(Number);

let res = [0, 0];
for (let i = 0; i < s.length; i++) {
  if (i === 0) res[s[i]] += 1;
  if (s[i] != s[i - 1]) res[s[i]] += 1;
}
console.log(Math.min(...res));
