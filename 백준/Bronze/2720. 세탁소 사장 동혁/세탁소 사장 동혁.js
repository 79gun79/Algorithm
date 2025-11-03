const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [t, ...c] = input;

function charge(s) {
  let q = [0, 0, 0, 0];
  while (s > 0) {
    if (s >= 25) {
      q[0] += parseInt(s / 25);
      s %= 25;
    } else if (s >= 10) {
      q[1] += parseInt(s / 10);
      s %= 10;
    } else if (s >= 5) {
      q[2] += parseInt(s / 5);
      s %= 5;
    } else {
      q[3] += s;
      s = 0;
    }
  }
  return q;
}

for (let v of c) {
  console.log(charge(v).join(" "));
}
