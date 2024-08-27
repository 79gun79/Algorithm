import sys
input = sys.stdin.readline

n = int(input())
dp = [0 for _ in range(n+1)]
k = 1
while k**2 <= n:
    dp[k**2] = 1
    k += 1

for i in range(1,n+1):
    if dp[i] == 0:
        j = 1
        while j**2 <= i:
            if dp[i] == 0:
                dp[i] = dp[j*j] + dp[i - j*j]
            else:
                dp[i] = min(dp[i], dp[j*j] + dp[i - j*j])
            j += 1

print(dp[n])