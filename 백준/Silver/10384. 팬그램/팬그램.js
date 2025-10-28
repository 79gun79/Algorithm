const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, ...test] = input;

function pangram(str) {
  const ap = Array(26).fill(0);
  for (const s of str) {
    if (s.charCodeAt() >= 97 && s.charCodeAt() <= 122) {
      ap[s.charCodeAt() - 97] += 1;
    }
  }

  let res = Math.min(...ap);
  switch (res) {
    case 0:
      return "Not a pangram";
    case 1:
      return "Pangram!";
    case 2:
      return "Double pangram!!";
    default:
      return "Triple pangram!!!";
  }
}

let idx = 0;
for (const v of test) {
  idx += 1;
  console.log(`Case ${idx}: ` + pangram(v.toLowerCase()));
}
