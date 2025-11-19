const mp = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

function horizontal(x, val) {
  for (let i = 0; i < 9; i++) {
    if (mp[x][i] === val) return false;
  }
  return true;
}

function vertical(y, val) {
  for (let i = 0; i < 9; i++) {
    if (mp[i][y] === val) return false;
  }
  return true;
}

function square(x, y, val) {
  const [a, b] = [Math.floor(x / 3) * 3, Math.floor(y / 3) * 3];
  for (let i = a; i < a + 3; i++) {
    for (let j = b; j < b + 3; j++) {
      if (mp[i][j] === val) return false;
    }
  }
  return true;
}

function dfs(k) {
  if (empty.length === k) {
    console.log(mp.map((v) => v.join(" ")).join("\n"));
    process.exit();
  }

  for (let i = 1; i <= 9; i++) {
    const [x, y] = empty[k];
    if (horizontal(x, i) && vertical(y, i) && square(x, y, i)) {
      mp[x][y] = i;
      dfs(k + 1);
      mp[x][y] = 0;
    }
  }
}

const empty = [];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (mp[i][j] === 0) {
      empty.push([i, j]);
    }
  }
}

dfs(0);
