import sys
input = sys.stdin.readline
dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y, dis):
    global ans
    if x == 0 and y == c-1 and dis == k:
        ans += 1
        return
    visited[x][y] = 1
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx < 0 or ny < 0 or nx >= r or ny >= c:
            continue
        if visited[nx][ny] == 0 and mp[nx][ny] == '.':
            visited[nx][ny] = 1
            dfs(nx, ny, dis + 1)
            visited[nx][ny] = 0

r, c, k = map(int, input().split())
mp = [list(input().rstrip()) for _ in range(r)]
visited = [[0 for _ in range(c)] for _ in range(r)]
ans = 0
dfs(r - 1, 0, 1)
print(ans)