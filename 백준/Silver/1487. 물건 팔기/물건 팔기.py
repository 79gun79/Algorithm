import sys
input = sys.stdin.readline

n = int(input())
gf = [list(map(int, input().split())) for _ in range(n)]
gf.sort(key=lambda x: (x[0], x[1]))

res = []
for i in range(n):
    benefit = 0
    for j in range(i, n):
        if gf[i][0] - gf[j][1] > 0:
            benefit += (gf[i][0] - gf[j][1])
    res.append(benefit)

tmp = [res[0], gf[0][0]]
for k in range(1, n):
    if tmp[0] < res[k]:
        tmp = [res[k], gf[k][0]]

if sum(res) == 0:
    print(0)
else:
    print(tmp[1])