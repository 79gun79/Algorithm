import sys
input = sys.stdin.readline
from collections import deque

def bfs(a):
    q = deque()
    q.append(a)
    visit[a] = 1

    while q:
        x = q.popleft()
        for i in tr[x]:
            if visit[i] == 0:
                visit[i] = x
                q.append(i)



n = int(input())
tr = [[] for _ in range(n+1)]
visit = [0] * (n+1)
for _ in range(n-1):
    a, b = map(int, input().split())
    tr[a].append(b)
    tr[b].append(a)
bfs(1)
for j in range(2, n+1):
    print(visit[j])
