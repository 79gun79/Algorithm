import sys
input = sys.stdin.readline
from itertools import combinations

n, m = map(int, input().split())
arr = [0b0000000000] * (m+1)
sol = 2 ** (n+1) - 2

for i in range(m):
    prob = list(map(int, input().split()))[1:]
    for p in prob:
        arr[i+1] |= (1 << p)

for k in range(1, m+1):
    comblst = list(combinations(arr, k))
    for comb in comblst:
        tmp = 0b0000000000
        for c in comb:
            tmp |= c
        if tmp == sol:
            print(k)
            quit()
print(-1)