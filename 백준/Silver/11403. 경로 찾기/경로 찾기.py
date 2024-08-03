import sys
input = sys.stdin.readline

n = int(input())
grp = [list(map(int, input().split())) for _ in range(n)]

for k in range(n):
    for i in range(n):
        for j in range(n):
            if grp[i][k] & grp[k][j]:
                grp[i][j] = 1

for i in range(n):
    for j in range(n):
        print(grp[i][j], end=" ")
    print()