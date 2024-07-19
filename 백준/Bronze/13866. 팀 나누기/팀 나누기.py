import sys
input = sys.stdin.readline
from collections import deque

a = list(map(int, input().split()))
a.sort()
a = deque(a)

d = []
while a:
    b = a.popleft()
    c = a.pop()
    d.append(b+c)

print(abs(d[0]-d[1]))
