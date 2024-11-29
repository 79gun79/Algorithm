import sys
input = sys.stdin.readline
n, m = map(int, input().split())
num = [0] * 9

def dfs(st, d):
    if d == m:
        for i in range(m):
            print(num[i], end=" ")
        print()
    else:
        for i in range(st, n+1):
            num[d] = i
            dfs(i, d+1)

dfs(1,0)
