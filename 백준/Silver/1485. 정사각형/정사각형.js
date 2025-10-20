const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [t, ...inp] = input;

function measure(a, b) {
  return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
}

for (let i = 0; i < t; i++) {
  let sqr = inp.splice(0, 4).sort((a, b) => {
    if (a[0] != b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let tmp = sqr[2];
  sqr[2] = sqr[3];
  sqr[3] = tmp;

  let res = 1;
  const dis = measure(sqr[0], sqr[1]);
  for (let i = 1; i < 4; i++) {
    if (dis != measure(sqr[i], sqr[(i + 1) % 4])) res = 0;
  }
  if (measure(sqr[0], sqr[2]) != measure(sqr[1], sqr[3])) res = 0;
  console.log(res);
}
