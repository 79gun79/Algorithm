import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

def dfs(x, dis):
    visited[x] = 1
    if x == p:
        visited[p] = 0
        distance.append(dis)
        return

    for j in tr[x]:
        if visited[j] == 0:
            dfs(j, dis+1)

n, s, p = map(int, input().split())
tr = [[] for _ in range(n+1)]

for _ in range(n-1):
    a, b = map(int, input().split())
    tr[a].append(b)
    tr[b].append(a)

visited = [0] * (n+1)
distance = []
for i in range(1, s+1):
    dfs(i, 0)

distance.sort()
res = sum(distance[:2])
print(n - 1 - res)