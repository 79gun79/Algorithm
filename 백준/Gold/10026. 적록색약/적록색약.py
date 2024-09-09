import sys
input = sys.stdin.readline
from collections import deque

n = int(input())
mp = [input().rstrip() for _ in range(n)]
dx = [-1,1,0,0]
dy = [0,0,-1,1]

def BFS(a, b, color):
    q = deque()
    q.append((a, b))
    visit[a][b] = 1

    while q:
        x, y = q.popleft()

        for i in range(4):
            nx = dx[i] + x
            ny = dy[i] + y

            if 0 <= nx < n and 0 <= ny < n and visit[nx][ny] == 0:
                if color == mp[nx][ny]:
                    visit[nx][ny] = 1
                    q.append((nx, ny))

    return

def BlindBFS(a, b, color):
    q = deque()
    q.append((a, b))
    visit[a][b] = 1

    while q:
        x, y = q.popleft()

        for i in range(4):
            nx = dx[i] + x
            ny = dy[i] + y

            if 0 <= nx < n and 0 <= ny < n and visit[nx][ny] == 0:
                if mp[nx][ny] != 'B' and color != 'B':
                    visit[nx][ny] = 1
                    q.append((nx, ny))
                elif mp[nx][ny] == 'B' and color == 'B':
                    visit[nx][ny] = 1
                    q.append((nx, ny))

    return

visit = [[0] * n for _ in range(n)]
res = 0
for i in range(n):
    for j in range(n):
        if not visit[i][j]:
            BFS(i, j, mp[i][j])
            res += 1

visit = [[0] * n for _ in range(n)]
res2 = 0
for i in range(n):
    for j in range(n):
        if not visit[i][j]:
            BlindBFS(i, j, mp[i][j])
            res2 += 1

print(res, res2)
