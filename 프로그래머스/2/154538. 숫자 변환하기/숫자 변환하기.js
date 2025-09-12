function solution(x, y, n) {
    const dp = new Array(1000001).fill(Infinity)
    
    dp[x] = 0;
    for (let i = x; i <= y; i++) {
        dp[i+n] = Math.min(dp[i]+1, dp[i+n])
        dp[i*2] = Math.min(dp[i]+1, dp[i*2])
        dp[i*3] = Math.min(dp[i]+1, dp[i*3])
    }
    
    return dp[y] === Infinity ? -1 : dp[y]
}