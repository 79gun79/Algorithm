import sys
input = sys.stdin.readline

n, q = map(int, input().split())
a = list(map(int, input().split()))

idx = 0
for _ in range(q):
    op = list(map(int, input().split()))
    if op[0] == 1:
        a[(idx+op[1]-1) % n] += op[2]
    elif op[0] == 2:
        idx -= op[1]
    elif op[0] == 3:
        idx += op[1]

for i in range(idx, idx+n):
    print(a[i % n], end=' ')