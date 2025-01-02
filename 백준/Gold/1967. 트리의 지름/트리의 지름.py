import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**4)
def dfs(x, weight):
    for v, w in tr[x]:
        if visited[v] == -1:
            visited[v] = weight + w
            dfs(v, visited[v])

n = int(input())
tr = [[] for _ in range(n+1)]
visited = [-1] * (n+1)
for _ in range(n-1):
    p, c, a = map(int, input().split())
    tr[p].append([c, a])
    tr[c].append([p, a])

visited[1] = 0
dfs(1, 0)

st = visited.index(max(visited))
visited = [-1] * (n+1)
visited[st] = 0
dfs(st, 0)

print(max(visited))