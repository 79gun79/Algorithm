import sys
input = sys.stdin.readline
n, m = map(int, input().split())
a = list(map(int, input().split()))
visited = [0] * 9
num = [0] * 9

def dfs(st, d):
    if d == m:
        for i in range(m):
            print(num[i], end=" ")
        print()
    else:
        for i in range(n):
            if not visited[i]:
                visited[i] = 1
                num[d] = a[i]
                dfs(i, d+1)
                visited[i] = 0

a.sort()
dfs(0, 0)
