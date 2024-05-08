import sys
input = sys.stdin.readline
import math

n = int(input())
a = list(map(int, input().split()))
a.sort()
idx = (n+1) // 2
a = a[:idx]

cnt = 0
for i in a:
    j = math.log(i, 2)
    cnt += int(j)

cnt += 1
print(cnt)