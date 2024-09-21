import sys
input = sys.stdin.readline

dp = [[0 for _ in range(3)] for _ in range(1001)]
n = int(input())
hm = [list(map(int, input().split())) for _ in range(n)]

for j in range(3):
    dp[1][j] = hm[0][j]
for i in range(n-1):
    dp[i+2][0] = min(dp[i+1][1], dp[i+1][2]) + hm[i+1][0]
    dp[i+2][1] = min(dp[i+1][0], dp[i+1][2]) + hm[i+1][1]
    dp[i+2][2] = min(dp[i+1][0], dp[i+1][1]) + hm[i+1][2]

print(min(dp[n][0],dp[n][1],dp[n][2]))