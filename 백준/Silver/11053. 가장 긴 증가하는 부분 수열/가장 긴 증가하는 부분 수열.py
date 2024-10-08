import sys
input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))
dp = [0] * 1001

for i in range(1, n):
    for j in range(i):
        if a[j] < a[i]:
            dp[i] = max(dp[i], dp[j]+1)

print(max(dp)+1)