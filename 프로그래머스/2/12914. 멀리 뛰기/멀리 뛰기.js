function solution(n) {
    const dp = [...new Array(n+1)].fill(0)
    
    for (let i = 1; i <= n; i++) {
        if (i <= 2) dp[i] = i
        else dp[i] = (dp[i-2] + dp[i-1]) % 1234567
    }
    
    return dp[n]
}