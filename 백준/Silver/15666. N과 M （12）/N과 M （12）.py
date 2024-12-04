import sys
input = sys.stdin.readline

n, m = map(int, input().split())
a = sorted(set(list(map(int, input().split()))))
res = []

def dfs(idx, depth):
    if depth == m:
        print(' '.join(map(str, res)))
        return

    for i in range(idx, len(a)):
        res.append(a[i])
        dfs(i, depth+1)
        res.pop()
dfs(0, 0)
