import sys
input = sys.stdin.readline

def dfs(x):
    global cnt
    visited[x] = 1
    for y in grp[x]:
        if visited[y] == 0:
            dfs(y)
        else:
            cnt += 1

t = 0
while True:
    n = int(input())
    if n == 0:
        break

    t += 1
    nm = {}
    grp = [[] for _ in range(n+1)]
    visited = [0] * (n+1)

    for _ in range(n):
        a, b = input().rstrip().split()
        if a not in nm:
            nm[a] = len(nm) + 1
        if b not in nm:
            nm[b] = len(nm) + 1
        grp[nm[a]].append(nm[b])

    cnt = 0
    for i in range(1, n+1):
        if visited[i] == 1:
            continue
        dfs(i)

    print(t, cnt)

