import sys
import math
input = sys.stdin.readline

h, y = map(int, input().split())
dp = [0] * (y+1)
dp[0] = h

for i in range(1, y+1):
    if i <= 2:
        dp[i] = math.floor(dp[i-1] * 1.05)
    elif i <= 4:
        dp[i] = math.floor(max(dp[i-1] * 1.05, dp[i-3] * 1.2))
    else:
        dp[i] = math.floor(max(dp[i-1] * 1.05, dp[i-3] * 1.2, dp[i-5] * 1.35))
        
print(dp[y])