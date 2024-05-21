import sys
input = sys.stdin.readline
from collections import deque

n, m = map(int, input().split())
tv = []
visited = [[0 for _ in range(m)] for _ in range(n)]

for _ in range(n):
    l = list(map(int, input().split()))
    tmp = []
    for k in range(m):
        r, g, b = l[3*k], l[3*k+1], l[3*k+2]
        tmp.append((r+g+b) // 3)
    tv.append(tmp)
t = int(input())

for i in range(n):
    for j in range(m):
        if tv[i][j] >= t:
            tv[i][j] = 1
        else:
            tv[i][j] = 0

q = deque()
dx = [0,0,-1,1]
dy = [-1,1,0,0]

def BFS(x, y):
    q.append((x,y))
    visited[x][y] = 1

    while q:
        mx, my = q.popleft()
        for i2 in range(4):
            nx = mx + dx[i2]
            ny = my + dy[i2]
            if 0 <= nx < n and 0 <= ny < m:
                if not visited[nx][ny] and tv[nx][ny] == 1:
                    visited[nx][ny] = 1
                    q.append((nx,ny))
cnt = 0
for i in range(n):
    for j in range(m):
        if tv[i][j] == 1 and not visited[i][j]:
            BFS(i,j)
            cnt += 1

print(cnt)
