import sys
input = sys.stdin.readline

n = int(input())
p = list(map(int, input().split()))

pr = [[] for _ in range(5)]
for _ in range(n):
    k, t = map(int, input().split())
    pr[k-1].append(t)
for r in pr:
    r.sort()

res = 0
for i in range(5):
    if p[i] > 0:
        res += pr[i][0]
    for j in range(1, p[i]):
        res += (pr[i][j] - pr[i][j-1])
        res += pr[i][j]
    res += 60

print(res - 60)
