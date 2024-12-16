import sys
input = sys.stdin.readline

n = int(input())
m = int(input())

mp = [[sys.maxsize] * (n+1) for _ in range(n+1)]

for i in range(1, n+1):
    mp[i][i] = 0

for _ in range(m):
    a, b, c = map(int, input().split())
    mp[a][b] = min(c, mp[a][b])


for k in range(1, n+1):
    for i in range(1, n+1):
        for j in range(1, n+1):
            mp[i][j] = min(mp[i][j], mp[i][k] + mp[k][j])

for i in range(1, n+1):
    for j in range(1, n+1):
        if mp[i][j] == sys.maxsize:
            print(0, end=" ")
        else:
            print(mp[i][j], end=" ")
    print()