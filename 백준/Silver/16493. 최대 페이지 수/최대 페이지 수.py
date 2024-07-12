import sys
input = sys.stdin.readline

n, m = map(int, input().split())
dnp = [[0,0] for _ in range(m+1)]
dp = [[0 for _ in range(n+1)] for _ in range(m+1)]
for i in range(1, m+1):
    dnp[i][0], dnp[i][1] = map(int, input().split())

for i in range(1, m+1):
    day = dnp[i][0]
    page = dnp[i][1]
    for j in range(1, n+1):
        if j >= day:
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-day] + page)
        else:
            dp[i][j] = dp[i - 1][j]

print(dp[m][n])
