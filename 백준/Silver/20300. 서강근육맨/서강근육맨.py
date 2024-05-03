import sys
input = sys.stdin.readline
from collections import deque

n = int(input())
t = list(map(int, input().split()))

t.sort()
m = []
if n % 2 == 1:
    m.append(t[n-1])
    t.pop()
t = deque(t)
for i in range(n//2):
    a = t.popleft()
    b = t.pop()
    m.append(a+b)

print(max(m))
