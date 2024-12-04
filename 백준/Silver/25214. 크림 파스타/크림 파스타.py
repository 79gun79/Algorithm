import sys
input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))
dp = [0] * (n+1)

dp[0] = 0
mn = a[0]

for i in range(1, n):
    dp[i] = max(a[i] - a[i-1], a[i] - mn, dp[i-1])
    mn = min(mn, a[i-1])

for j in range(n):
    print(dp[j], end=" ")