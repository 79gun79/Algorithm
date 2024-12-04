import sys
input = sys.stdin.readline
from itertools import permutations

n, m = map(int, input().split())
lst = list(map(int, input().split()))

sy = list(set(permutations(lst, m)))
sy.sort()

for i in sy:
    for j in range(m):
        print(i[j], end=" ")
    print()