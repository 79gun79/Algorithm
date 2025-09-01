const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

for (let i = 0; i < input.length; i++) {
  let mp = input.splice(i + 1, 9);
  const sdouku = checkRows(mp) && checkCols(mp) && checkBoxes(mp);
  console.log(`Case ${i + 1}: ${sdouku ? "CORRECT" : "INCORRECT"}`);
}

function checkMask(arr) {
  let mask = 0;
  for (const v of arr) {
    const bit = 1 << v;
    if (mask & bit) return false;
    mask |= bit;
  }
  return mask === 1022;
}

function checkRows(mp) {
  for (const v of mp) {
    if (!checkMask(v)) return false;
  }
  return true;
}

function checkCols(mp) {
  for (let i = 0; i < 9; i++) {
    let col = [];
    for (let j = 0; j < 9; j++) {
      col.push(mp[j][i]);
    }
    if (!checkMask(col)) return false;
  }
  return true;
}

function checkBoxes(mp) {
  for (const i of [0, 3, 6]) {
    for (const j of [0, 3, 6]) {
      let tmp = [];
      for (let k = i; k < i + 3; k++) {
        tmp.push(...mp[k].slice(j, j + 3));
      }
      if (!checkMask(tmp)) return false;
    }
  }
  return true;
}
