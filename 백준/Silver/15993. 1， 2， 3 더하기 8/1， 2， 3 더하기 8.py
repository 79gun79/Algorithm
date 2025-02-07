import sys
input = sys.stdin.readline
t = int(input())
dp = [[0, 0] for _ in range(100001)]
dp[1][0] = 1
dp[2][0] = 1
dp[2][1] = 1
dp[3][0] = 2
dp[3][1] = 2
for i in range(4, 100001):
    dp[i][0] = (dp[i-1][1] + dp[i-2][1] + dp[i-3][1]) % 1000000009
    dp[i][1] = (dp[i-1][0] + dp[i-2][0] + dp[i-3][0]) % 1000000009

for _ in range(t):
    n = int(input())
    print(dp[n][0], dp[n][1])