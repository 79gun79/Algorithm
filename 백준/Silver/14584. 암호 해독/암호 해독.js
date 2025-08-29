const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [s, n, ...dic] = input;

for (let i = 1; i <= 26; i++) {
  let sep = "";
  for (const v of s) {
    sep += String.fromCharCode(((v.charCodeAt() + i - 97) % 26) + 97);
  }
  for (const w of dic) {
    if (sep.includes(w)) {
      console.log(sep);
      break;
    }
  }
}
