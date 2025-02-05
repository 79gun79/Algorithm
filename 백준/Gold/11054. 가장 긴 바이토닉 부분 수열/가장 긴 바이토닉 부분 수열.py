import sys
input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))

up = [0] * n
down = [0] * n 

for i in range(n):
    for j in range(i):
        if a[i] > a[j]:
            up[i] = max(up[i], up[j]+1)

for i in range(n-1, -1, -1):
    for j in range(n-1, i, -1):
        if a[i] > a[j]:
            down[i] = max(down[i], down[j]+1)

res = [0] * n 
for k in range(n):
    res[k] = up[k] + down[k] + 1 

print(max(res))