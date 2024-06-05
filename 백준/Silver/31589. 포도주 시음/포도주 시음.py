import sys
input = sys.stdin.readline
from collections import deque

n, k = map(int, input().split())
t = list(map(int, input().split()))
t.sort()
t = deque(t)
i = 0
res = 0
tmp = 0
while i < k:
    if i % 2 == 0:
        a = t.pop()
        a = a - tmp
        res += a
    else:
        a = t.popleft()
        tmp = a

    i += 1

print(res)
