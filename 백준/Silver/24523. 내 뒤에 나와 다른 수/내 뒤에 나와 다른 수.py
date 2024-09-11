import sys
input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))

tmp = a[0]
idx = []
for i in range(1, n):
    if a[i] != tmp:
        idx.append(i+1)
        tmp = a[i]
k = 0
for j in range(n):
    if k >= len(idx):
        print(-1, end=" ")
    else:
        print(idx[k], end=" ")
        if j == idx[k] - 2:
            k += 1
