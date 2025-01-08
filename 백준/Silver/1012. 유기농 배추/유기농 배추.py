import sys
input = sys.stdin.readline
sys.setrecursionlimit(10000)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(bx, by):

    for i in range(4):
        nx = bx + dx[i]
        ny = by + dy[i]

        if nx < 0 or ny < 0 or nx >= m or ny >= n:
            continue

        if visited[nx][ny] == 1:
            visited[nx][ny] = 0
            dfs(nx, ny)

t = int(input())
for _ in range(t):
    m, n, k = map(int, input().split())
    visited = [[0 for _ in range(n)] for _ in range(m)]

    for _ in range(k):
        x, y = map(int, input().split())
        visited[x][y] = 1

    res = 0
    for i in range(m):
        for j in range(n):
            if visited[i][j] == 1:
                dfs(i, j)
                res += 1

    print(res)