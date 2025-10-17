let k = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let size = 1;

while (size < k) {
  size *= 2;
}
const res = size;

let cnt = 0;
while (k > 0) {
  if (k >= size) {
    k -= size;
  } else {
    size /= 2;
    cnt += 1;
  }
}

console.log(res, cnt);
