import sys
input = sys.stdin.readline
from collections import deque
n, m = map(int, input().split())
visited = [[-1 for _ in range(m)] for _ in range(n)]
mp = []
for _ in range(n):
    mp.append(list(map(int, input().split())))

dx = [0,0,-1,1]
dy = [1,-1,0,0]

def BFS(fx, fy):
    q = deque()
    q.append((fx, fy))
    visited[fx][fy]= 0

    while q:
        x, y = q.popleft()

        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]

            if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == -1:
                if mp[nx][ny] == 0:
                    visited[nx][ny] = 0
                elif mp[nx][ny] == 1:
                    visited[nx][ny] = visited[x][y] + 1
                    q.append((nx, ny))

for i in range(n):
    for j in range(m):
        if mp[i][j] == 2 and visited[i][j] == -1:
            BFS(i, j)
        if mp[i][j] == 0:
            visited[i][j] = 0

for i in range(n):
    for j in range(m):
        print(visited[i][j], end=' ')
    print()
