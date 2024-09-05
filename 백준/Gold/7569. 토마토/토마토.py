import sys
input = sys.stdin.readline
from collections import deque

m, n, h = map(int, input().split())
tm = []
for _ in range(h):
    tm.append([list(map(int, input().split())) for _ in range(n)])
dx = [-1,1,0,0,0,0]
dy = [0,0,-1,1,0,0]
dz = [0,0,0,0,-1,1]
visited = [[[0] * m for _ in range(n)] for _ in range(h)]

q = deque()
def BFS():

    while q:
        x, y, z = q.popleft()
        for d in range(6):
            nx = x + dx[d]
            ny = y + dy[d]
            nz = z + dz[d]

            if 0 <= nx < h and 0 <= ny < n and 0<= nz < m and tm[nx][ny][nz] == 0 and visited[nx][ny][nz] == 0:
                tm[nx][ny][nz] = tm[x][y][z] + 1
                visited[nx][ny][nz] = 1
                q.append((nx,ny,nz))

for i in range(h):
    for j in range(n):
        for k in range(m):
            if tm[i][j][k] == 1 and visited[i][j][k] == 0:
                q.append((i, j, k))
                visited[i][j][k] = 1
BFS()
res = 0
for a in tm:
    for b in a:
        for c in b:
            if c == 0:
                print(-1)
                quit()
        res = max(res, max(b))

print(res-1)

