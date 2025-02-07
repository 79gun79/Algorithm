import sys
input = sys.stdin.readline

n, m = map(int, input().split())
heavy = [[] for _ in range(n+1)]
light = [[] for _ in range(n+1)]

for _ in range(m):
    a, b = map(int, input().split())
    heavy[a].append(b)
    light[b].append(a)

def dfs(lst, st):
    cnt = 0
    for i in lst[st]:
        if not visited[i]:
            visited[i] = 1
            cnt += 1
            cnt += dfs(lst, i)
    return cnt


mid = (n+1)/2
res = 0

for i in range(1, n+1):
    visited = [0] * (n+1)
    if dfs(heavy, i) >= mid:
        res += 1
    if dfs(light, i) >= mid:
        res += 1

print(res)