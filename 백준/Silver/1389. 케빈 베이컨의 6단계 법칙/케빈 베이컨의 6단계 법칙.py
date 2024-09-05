import sys
input = sys.stdin.readline
from collections import deque
n, m = map(int, input().split())
mp = [[] for _ in range(n+1)]

def BFS(graph, x):
    kevin = [0] * (n+1)
    visit = [x]
    q = deque()
    q.append(x)

    while q:
        i = q.popleft()
        for j in graph[i]:
            if j not in visit:
                kevin[j] = kevin[i] + 1
                visit.append(j)
                q.append(j)
    return sum(kevin)

for _ in range(m):
    a, b = map(int, input().split())
    mp[a].append(b)
    mp[b].append(a)

mn = float('inf')
mi = 0
for a in range(1, n+1):
    res = BFS(mp, a)
    if mn > res:
        mn = res
        mi = a

print(mi)