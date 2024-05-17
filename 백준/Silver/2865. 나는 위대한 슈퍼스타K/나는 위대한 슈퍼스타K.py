import sys
input = sys.stdin.readline

n, m, k = map(int, input().split())
e = dict()

for i in range(1, n+1):
    e[i] = 0.0

for _ in range(m):
    tmp = list(map(str, input().split()))
    for i in range(n):
        if e[int(tmp[2*i])] < float(tmp[2*i+1]):
            e[int(tmp[2*i])] = float(tmp[2*i+1])

e = sorted(e.values(), reverse=True)

res = 0
for j in range(k):
    res += e[j]

print(round(res, 1))
