const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [t, ...a] = input;

for (let i = 0; i < t; i++) {
  const dis = a[i][1] - a[i][0];
  let year = 1;
  let res = 0;
  let nowDis = 0;

  while (nowDis < dis) {
    res += 1;
    nowDis += year;

    if (res % 2 === 0) year += 1;
  }
  console.log(res);
}
