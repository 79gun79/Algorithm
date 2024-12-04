import sys
input = sys.stdin.readline
from itertools import combinations

n = int(input())
d_nums = []

for i in range(10):
    for j in list(combinations(range(10), i+1)):
        num = list(reversed(j))
        decrease_num = ''
        for k in num:
            decrease_num += str(k)
        d_nums.append(int(decrease_num))

d_nums.sort()
if len(d_nums) <= n:
    print(-1)
else:
    print(d_nums[n])
