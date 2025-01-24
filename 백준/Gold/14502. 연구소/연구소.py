import sys
input = sys.stdin.readline
from collections import deque
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs():
    q = deque()
    for i in range(n):
        for j in range(m):
            if temp_mp[i][j] == 2:
                q.append((i, j))

    while q:
        x, y = q.popleft()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue
            if temp_mp[nx][ny] == 0:
                temp_mp[nx][ny] = 2
                q.append((nx, ny))

    global res
    res = max(res, safe_cnt(temp_mp))
    return res

def safe_cnt(lst):
    sf = 0
    for i in range(n):
        for j in range(m):
            if lst[i][j] == 0:
                sf += 1
    return sf

def new_wall(cnt):
    if cnt == 3:
        for i in range(n):
            for j in range(m):
                temp_mp[i][j] = mp[i][j]
        bfs()
        return

    for i in range(n):
        for j in range(m):
            if mp[i][j] == 0:
                mp[i][j] = 1
                new_wall(cnt+1)
                mp[i][j] = 0

n, m = map(int, input().split())
mp = [list(map(int, input().split())) for _ in range(n)]
temp_mp = [[0 for _ in range(m)] for _ in range(n)]
res = 0
new_wall(0)
print(res)

