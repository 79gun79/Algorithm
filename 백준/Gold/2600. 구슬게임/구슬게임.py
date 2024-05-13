import sys
input = sys.stdin.readline

dp = [[-1 for _ in range(501)] for _ in range(501)]
b = list(map(int, input().split()))

def game(x, y):
    if dp[x][y] >= 0:
        return dp[x][y]

    for i in range(3):
        if b[i] <= x and not game(x - b[i], y):
            dp[x][y] = 1
            return dp[x][y]

    for j in range(3):
        if b[j] <= y and not game(x, y - b[j]):
            dp[x][y] = 1
            return dp[x][y]

    dp[x][y] = 0
    return dp[x][y]

for _ in range(5):
    k1, k2 = map(int, input().split())

    if game(k1, k2) == 1:
        print('A')
    else:
        print('B')
