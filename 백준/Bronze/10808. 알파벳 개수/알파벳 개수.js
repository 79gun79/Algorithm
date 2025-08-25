const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [s] = input;
const alphabet = [...new Array(26)].fill(0);

for (let v of s) {
  alphabet[v.charCodeAt() - 97] += 1;
}

console.log(alphabet.join(" "));
