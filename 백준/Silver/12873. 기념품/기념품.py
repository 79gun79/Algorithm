import sys
input = sys.stdin.readline
from collections import deque

n = int(input())
q = deque([i for i in range(1, n+1)])

t = 1
for j in range(n-1):
    fail = (t ** 3) % len(q)

    q.rotate(-(fail-1))
    q.popleft()
    t += 1

a = q.popleft()
print(a)