import sys
input = sys.stdin.readline

k = 0
while True:
    k += 1
    n = int(input())
    if n == 0:
        break
    dp = []
    for _ in range(n):
        dp.append(list(map(int, input().split())))

    dp[1][0] += dp[0][1]
    dp[1][1] += min(dp[0][1], dp[0][1]+dp[0][2], dp[1][0])
    dp[1][2] += min(dp[0][1], dp[0][1]+dp[0][2], dp[1][1])

    for i in range(2, n):
        dp[i][0] += min(dp[i-1][0], dp[i-1][1])
        dp[i][1] += min(dp[i-1][0], dp[i-1][1], dp[i-1][2], dp[i][0])
        dp[i][2] += min(dp[i-1][1], dp[i-1][2], dp[i][1])

    print(k, end=". ")
    print(dp[n-1][1])
