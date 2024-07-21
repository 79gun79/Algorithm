import sys
input = sys.stdin.readline

n, m = map(int, input().split())
bd = list(map(int, input().split()))
pg = [i+1 for i in range(n)]
pr = [j for j in pg if j not in bd]

ink = 0
for k in range(len(pr)):
    if k == 0:
        ink += 7
    else:
        ink += min(7, 2*(pr[k] - pr[k-1]))

print(ink)

