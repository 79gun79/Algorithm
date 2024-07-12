import sys
input = sys.stdin.readline
from itertools import combinations

n, k = map(int, input().split())
x = []
y = []

for _ in range(n):
    a, b = map(int, input().split())
    x.append(a)
    y.append(b)

res = float('INF')
for idx in list(combinations(range(n), k)):
    bunker = 0
    for j in range(n):
        dis = float('INF')
        for i in idx:
            tmp = abs(x[j] - x[i]) + abs(y[j] - y[i])
            dis = min(tmp, dis)
        bunker = max(dis, bunker)
    res = min(bunker, res)

print(res)
