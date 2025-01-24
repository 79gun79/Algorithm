import sys
input = sys.stdin.readline
from collections import deque
dx = [0, 0, -1 ,1]
dy = [1, -1, 0, 0]

def bfs(stx, sty):
    q = deque()
    q.append((stx, sty, 0))
    visited = [[0] * m for _ in range(n)]
    visited[stx][sty] = 1

    while q:
        x, y, dis = q.popleft()
        flag = False
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or ny < 0 or nx >= n or ny >= m or mp[nx][ny] == 0:
                continue
            if visited[nx][ny] == 0:
                flag = True
                visited[nx][ny] = 1
                q.append((nx, ny, dis+1))

        if flag == False:
            pwd.append((mp[stx][sty] + mp[x][y], dis))
    return

n, m = map(int, input().split())
mp = [list(map(int, input().split())) for _ in range(n)]
pwd = []
for i in range(n):
    for j in range(m):
        if mp[i][j] > 0:
            bfs(i, j)

pwd.sort(key=lambda x: (x[1], x[0]), reverse=True)
print(pwd[0][0])