const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[xs, ys], [xe, ye], ...tp] = input;
const mp = Array.from(new Array(8), () =>
  Array(8).fill(Number.MAX_SAFE_INTEGER)
);

for (let i = 0; i < 8; i++) {
  mp[i][i] = 0;
}

const pos = [
  [xs, ys],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [xe, ye],
];

let idx = 1;
for (const v of tp) {
  const [x1, y1, x2, y2] = v;
  pos[idx] = [x1, y1];
  pos[idx + 1] = [x2, y2];

  let jump = Math.abs(x2 - x1) + Math.abs(y2 - y1);
  mp[idx][idx + 1] = Math.min(10, jump);
  mp[idx + 1][idx] = Math.min(10, jump);
  idx += 2;
}

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (mp[i][j] === Number.MAX_SAFE_INTEGER)
      mp[i][j] =
        Math.abs(pos[i][0] - pos[j][0]) + Math.abs(pos[i][1] - pos[j][1]);
  }
}

mp[0][7] = Math.abs(xe - xs) + Math.abs(ye - ys);
mp[7][0] = Math.abs(xe - xs) + Math.abs(ye - ys);
for (let k = 0; k < 8; k++) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      mp[i][j] = Math.min(mp[i][j], mp[i][k] + mp[k][j]);
    }
  }
}

console.log(mp[7][0]);
