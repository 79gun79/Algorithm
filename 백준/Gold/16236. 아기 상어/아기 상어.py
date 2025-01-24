import sys
from collections import deque
input = sys.stdin.readline
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def bfs(x, y):
    q = deque()
    q.append((x, y))
    visited = [[0] * n for _ in range(n)]
    visited[x][y] = 1
    candidates = []

    while q:
        cx, cy = q.popleft()
        for k in range(4):
            nx = cx + dx[k]
            ny = cy + dy[k]

            if nx < 0 or ny < 0 or nx >= n or ny >= n or visited[nx][ny] != 0:
                continue

            if mp[nx][ny] <= size:
                visited[nx][ny] = visited[cx][cy] + 1
                if mp[nx][ny] == 0 or mp[nx][ny] == size:
                    q.append((nx, ny))
                elif 0 < mp[nx][ny] < size:
                    candidates.append((visited[nx][ny] - 1, nx, ny))

    return sorted(candidates, key=lambda x: (x[0], x[1], x[2]))

n = int(input())
mp = [list(map(int, input().split())) for _ in range(n)]
for i in range(n):
    for j in range(n):
        if mp[i][j] == 9:
            shark_x = i
            shark_y = j
            mp[i][j] = 0

size, exp, res = 2, 0, 0
while True:
    mv = bfs(shark_x, shark_y)

    if not mv:
        break

    dis, nx, ny = mv[0]
    res += dis
    exp += 1
    shark_x, shark_y = nx, ny

    if size == exp:
        size += 1
        exp = 0

    mp[nx][ny] = 0

print(res)
