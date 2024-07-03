import sys
input = sys.stdin.readline
from collections import deque

m, n = map(int, input().split())
tomato = []
for _ in range(n):
    tomato.append(list(map(int, input().split())))

dx = [0,0,-1,1]
dy = [1,-1,0,0]

q = deque()
def BFS():

    while q:
        x, y = q.popleft()
        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]

            if 0 <= nx < n and 0 <= ny < m and tomato[nx][ny] == 0:
                    tomato[nx][ny] = tomato[x][y] + 1
                    q.append((nx, ny))

for i in range(n):
    for j in range(m):
        if tomato[i][j] == 1:
            q.append((i, j))

BFS()
res = 0
for t in tomato:
    for ti in t:
        if ti == 0:
            print(-1)
            exit(0)
        elif ti > res:
            res = ti
print(res - 1)
