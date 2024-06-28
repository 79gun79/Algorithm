import sys
input = sys.stdin.readline

N, M = map(int, input().split())

visited = [0] * (N+1)
graph = [[] for _ in range(N+1)]

for _ in range(M):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

def DFS(k):
    visited[k] = 1
    for i in graph[k]:
        if visited[i] == 0:
            visited[i] = 1
            DFS(i)

res = 0
for j in range(1, N+1):
    if visited[j] == 0:
        res += 1
        DFS(j)

print(res)
