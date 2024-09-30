import sys
input = sys.stdin.readline
from collections import deque

n = int(input())
tr = [[0] for _ in range(100001)]
visited = [0] * (100001)

def bfs():
    q = deque()
    visited[1] = 1
    q.append(1)

    while q:
        x = q.popleft()
        for i in tr[x]:
            if visited[i] == 0:
                visited[i] = x
                q.append(i)


for _ in range(n-1):
    a, b = map(int, input().split())
    tr[a].append(b)
    tr[b].append(a)

bfs()
for j in range(2, n+1):
    print(visited[j])
