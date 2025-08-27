const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

const [n, ...std] = input;
const ban = [];
const cnt = [...new Array(Number(n[0]))].fill(0);

for (let i = 0; i < std.length; i++) {
  const cls = Number(std[i][0]);
  const name = std[i][1];

  if (cls === 0) break;
  if (cnt[cls - 1] >= Number(n[1])) continue;

  cnt[cls - 1] += 1;
  ban.push([cls, name]);
}

ban.sort((a, b) => {
  const oddA = a[0] % 2,
    oddB = b[0] % 2;
  if (oddA !== oddB) return oddB - oddA;
  if (a[0] !== b[0]) return a[0] - b[0];
  if (a[1].length !== b[1].length) return a[1].length - b[1].length;
  return a[1].localeCompare(b[1]);
});

for (const v of ban) console.log(v.join(" "));
