import sys
input = sys.stdin.readline
from itertools import permutations

n, m = map(int, input().split())

a = list(i for i in range(1, n+1))
lst = list(permutations(a, m))
for l in lst:
    flag = True
    for j in range(m-1):
        if l[j] >= l[j+1]:
            flag = False
            break
    if flag:
        for k in range(m):
            print(l[k], end=" ")
        print()