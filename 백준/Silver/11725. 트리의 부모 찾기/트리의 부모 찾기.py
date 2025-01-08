import sys
input = sys.stdin.readline
from collections import deque

def bfs(x):
    q = deque()
    q.append(x)
    visited[x] = 1
    while q:
        z = q.popleft()
        for i in tr[z]:
            if visited[i] == 0:
                visited[i] = z
                q.append(i)



n = int(input())
tr = [[] for _ in range(n+1)]
visited = [0] * (n+1)
for _ in range(n-1):
    a, b = map(int, input().split())
    tr[a].append(b)
    tr[b].append(a)
bfs(1)

for i in range(2, n+1):
    print(visited[i])