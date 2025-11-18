const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

let [x, y, mx] = [1, 1, 0];
for (let i = 0; i < input.length; i++) {
  const tmp = input[i];
  const tmp_mx = Math.max(...tmp);
  if (tmp_mx > mx) {
    mx = tmp_mx;
    x = i + 1;
    y = input[i].indexOf(tmp_mx) + 1;
  }
}
console.log(mx);
console.log(x, y);
