import sys
input = sys.stdin.readline
from collections import deque

n, m = map(int, input().split())
cps = [input().rstrip() for _ in range(n)]
dx = [1,0,-1,0]
dy = [0,1,0,-1]
visited = [[0 for _ in range(m)] for _ in range(n)]
res = 0

def BFS(a, b):
    global res
    q = deque()
    q.append((a,b))
    visited[a][b] = 1
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or nx >= n or ny < 0 or ny >= m or visited[nx][ny]:
                continue
            if cps[nx][ny] == 'X':
                continue
            if cps[nx][ny] == 'O':
                q.append((nx, ny))
                visited[nx][ny] = 1
            if cps[nx][ny] == 'P':
                q.append((nx, ny))
                visited[nx][ny] = 1
                res += 1

    return

for i in range(n):
    for j in range(m):
        if cps[i][j] == 'I':
            BFS(i, j)
if res == 0:
    print('TT')
else:
    print(res)