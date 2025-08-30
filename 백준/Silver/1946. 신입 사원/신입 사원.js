const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const T = input[0];

for (let i = 1; i <= T; i++) {
  const N = input[i];
  const testCase = input
    .splice(i + 1, N)
    .map(val => val.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);

  let count = 1;
  let compare = testCase[0][1];

  for (const [, b] of testCase) {
    if (b < compare) {
      compare = b;
      count++;
    }
  }
  console.log(count);
}