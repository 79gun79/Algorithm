import sys
input = sys.stdin.readline
from collections import deque

a, b, n, m = map(int, input().split())

q = deque()
visited = [0] * (100001)

def BFS():
    q.append(n)
    visited[n] = 1
    while q:
        x = q.popleft()
        dx = [x + 1, x - 1, x + a, x - a, x + b, x - b, x * a, x * b]
        for i in range(8):
            y = dx[i]
            if 0 <= y <= 100000 and not visited[y]:
                visited[y] = visited[x] + 1
                q.append(y)
            if y == m:
                return

BFS()
print(max(visited) - 1)