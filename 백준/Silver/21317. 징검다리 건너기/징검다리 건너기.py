import sys
input = sys.stdin.readline

n = int(input().rstrip())
dp = [[1e9, 1e9] for _ in range(n+1)]
st = [[0, 0] for _ in range(n+1)]

for j in range(1, n):
    st[j][0], st[j][1] = map(int, input().split())
k = int(input().rstrip())

dp[1][0] = 0
if n > 1:
    dp[2][0] = st[1][0]

for i in range(3, n+1):
    dp[i][0] = min(dp[i-1][0] + st[i-1][0], dp[i-2][0] + st[i-2][1])
    if i > 3:
        dp[i][1] = min(dp[i-1][1] + st[i-1][0], dp[i-2][1] + st[i-2][1], dp[i-3][0]+k)

print(min(dp[n][0], dp[n][1]))