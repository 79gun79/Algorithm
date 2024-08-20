import sys
input = sys.stdin.readline
from collections import deque

dx = [1,-1,0,0]
dy = [0,0,-1,1]
n, m = map(int, input().split())
ilse = [list(map(int, list(input().strip('\n')))) for _ in range(n)]
visited = [[0 for _ in range(m)] for _ in range(n)]
q = deque()

def BFS(x,y):
    q.append((x, y))
    visited[x][y] = 1

    while q:
        mx, my = q.popleft()
        for i in range(4):
            nx = mx+dx[i]
            ny = my+dy[i]

            if 0 <= nx < n and 0 <= ny < m and (visited[nx][ny] == 0) and ilse[nx][ny] != 1:
                visited[nx][ny] = visited[mx][my] + 1
                q.append((nx, ny))

                if ilse[nx][ny] in [3,4,5]:
                    return visited[nx][ny] - 1

for i in range(n):
    for j in range(m):
        if ilse[i][j] == 2:
            a = BFS(i,j)

if a == None:
    print('NIE')
else:
    print('TAK')
    print(a)