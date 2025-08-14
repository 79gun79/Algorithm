function solution(n) {
    let fb = [0, 1];
    for (let i = 2; i <= n; i++) {
      fb[i] = (fb[i-1] + fb[i-2]) % 1234567;
    } 
    return fb[n];
}
