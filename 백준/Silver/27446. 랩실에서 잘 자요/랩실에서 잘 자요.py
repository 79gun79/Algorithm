import sys
input = sys.stdin.readline

n, m = map(int, input().split())
num = list(map(int, input().split()))

prt = []
for i in range(1, n+1):
    if i not in num:
        prt.append(i)

idx = 0
ink = 0
for j in range(len(prt)):
    if j == 0:
        ink += 7
        idx = prt[0]
    else:
        ink += min(7, 2*(prt[j] - idx))
        idx = prt[j]

print(ink)