import sys
from itertools import combinations
input = sys.stdin.readline

n = int(input())
num = []

for _ in range(n):
    mx = 0
    tmp = list(map(int, input().split()))
    a = combinations(tmp, 3)
    for i in a:
        b = sum(i) % 10
        if mx < b:
            mx = b
    num.append(mx)

mx2 = 0
mxi = 0
for j in range(n):
    if mx2 <= num[j]:
        mx2 = num[j]
        mxi = (j+1)

print(mxi)
