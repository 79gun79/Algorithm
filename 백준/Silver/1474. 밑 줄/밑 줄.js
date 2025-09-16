const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [a, ...w] = input;
let [n, m] = a.split(" ").map(Number);
let words = w.map((v) => v.trim());

const idx = [];
for (let i = 0; i < n; i++) {
  m -= words[i].length;

  if (i === 0) continue;
  if (words[i][0].charCodeAt() >= 97) {
    idx.push(i);
  }
}

let same = parseInt(m / (n - 1));
let rest = m % (n - 1);
for (const k of idx) {
  if (rest > 0) {
    words[k] = "_" + words[k];
    rest -= 1;
  }
}

for (let j = n - 1; j >= 0; j--) {
  if (!idx.includes(j) && rest > 0) {
    words[j] = "_" + words[j];
    rest -= 1;
  }
}

console.log(words.join("_".repeat(same)));
