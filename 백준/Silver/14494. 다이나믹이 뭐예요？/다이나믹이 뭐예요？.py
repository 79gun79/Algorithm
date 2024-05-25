import sys
input = sys.stdin.readline

n, m = map(int, input().split())
D = [[0 for _ in range(m+1)] for _ in range(n+1)]

D[0][0] = 1
for i in range(1, n+1):
    for j in range(1, m+1):
        D[i][j] = (D[i-1][j] + D[i][j-1] + D[i-1][j-1])

print(D[n][m] % 1000000007)