import sys
input = sys.stdin.readline
from collections import deque

n = int(input())
s = input().rstrip()

q = deque()
d = 0
tmp = 0

for i in range(n):
    if s[i] == '(':
        if len(q) > 0 and q[0] == ')':
            q.popleft()
            tmp -= 1
        else:
            q.append(s[i])
            tmp += 1
    elif s[i] == ')':
        if len(q) > 0 and q[0] == '(':
            q.popleft()
            tmp -= 1
        else:
            q.append(s[i])
            tmp += 1
    d = max(tmp, d)

if len(q) == 0:
    print(d)
else:
    print(-1)