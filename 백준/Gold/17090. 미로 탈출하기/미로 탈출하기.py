import sys
input = sys.stdin.readline
sys.setrecursionlimit(250000)

def avail(i, j):
    if i < 0 or i > n-1 or j < 0 or j > m-1:
        return 1

    if dp[i][j] != -1:
        return dp[i][j]

    dp[i][j] = 0
    dp[i][j] = max(dp[i][j], avail(i + move[mp[i][j]][0], j + move[mp[i][j]][1]))
    return dp[i][j]


n, m = map(int, input().split())
mp = [list(input().rstrip()) for _ in range(n)]

dp = [[-1 for _ in range(m)] for _ in range(n)]

move = {'U': (-1, 0), 'R': (0, 1), 'D': (1, 0), 'L': (0, -1)}
res = 0

for i in range(n):
    for j in range(m):
        if dp[i][j] == -1:
            if avail(i, j) != 0:
                res += 1
        elif dp[i][j] == 1:
            res += 1

print(res)