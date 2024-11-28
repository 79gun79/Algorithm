import sys
input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))
a.sort()

awk = [0] * (n+1)

for i in range(0, n-1, 2):
    awk[i] += (a[i+1] - a[i])
    if i - 2 >= 0:
        awk[i] += awk[i-2]

for i in range(n - 2, -1, -2):
    awk[i] += (a[i+1] - a[i])
    if i + 2 < n:
        awk[i] += awk[i + 2]

res = sys.maxsize
for k in range(0, n-2, 2):
    tmp = (a[k+2] - a[k])
    if k - 2 >= 0:
        tmp += awk[k - 2]
    if k + 3 < n:
        tmp += awk[k + 3]
    res = min(res, tmp)
    
print(res)
