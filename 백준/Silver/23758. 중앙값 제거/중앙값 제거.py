import sys
input = sys.stdin.readline
import math

n = int(input())
a = list(map(int, input().split()))
a.sort()
mdx = (n+1) // 2
a = a[:mdx]


cnt = 0
for i in a:
    i = math.log(i, 2)
    cnt += int(i)

cnt += 1
print(cnt)