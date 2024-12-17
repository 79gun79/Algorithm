import sys
input = sys.stdin.readline
from collections import deque

n, m = map(int, input().split())
mp = [input().rstrip() for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
visited = [[[0, 0] for _ in range(m)] for _ in range(n)]


def bfs():
    q = deque()
    q.append((0, 0, 0))
    visited[0][0][0] = 1

    while q:
        x, y, b = q.popleft()
        if x == n-1 and y == m-1:
            return visited[x][y][b]

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < n and 0 <= ny < m and visited[nx][ny][b] == 0:
                if mp[nx][ny] == '0':
                    visited[nx][ny][b] = visited[x][y][b] + 1
                    q.append((nx, ny, b))
                else:
                    if b == 0:
                        visited[nx][ny][b+1] = visited[x][y][b] + 1
                        q.append((nx, ny, b+1))
    return -1


print(bfs())