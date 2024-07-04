import sys
input = sys.stdin.readline
from collections import deque

n, s, d, f, b, k = map(int, input().split())
l = list(map(int, input().split()))
visited = [0 for _ in range(n+1)]
for i in l:
    visited[i] = 1

q = []
def BFS(A, B):
    q = deque()
    q.append((A, B))
    visited[A] = 1

    while q:
        (x, y) = q.popleft()
        if x == d:
            return y

        fx = x + f
        bx = x - b

        if 1 <= fx <= n and visited[fx] == 0:
            visited[fx] = 1
            q.append((fx, y+1))

        if 1 <= bx <= n and visited[bx] == 0:
            visited[bx] = 1
            q.append((bx, y+1))

    return 'BUG FOUND'

res = BFS(s, 0)
print(res)