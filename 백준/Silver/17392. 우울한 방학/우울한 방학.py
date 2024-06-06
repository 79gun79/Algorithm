import sys
input = sys.stdin.readline
import math

n, m = map(int, input().split())
h = list(map(int, input().split()))


happy = sum(h) + n
ans = 0
sad = m - happy
v1 = sad // (n+1)
v2 = sad % (n+1)

if happy >= m:
    ans = 0
else:
    for i in range(1, v1+1):
        ans += math.pow(i, 2) * (n+1)
    ans += math.pow(v1 + 1, 2) * v2

print(int(ans))