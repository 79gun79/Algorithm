from sys import stdin
from collections import deque

t = int(stdin.readline().strip())

for _ in range(t):
    a = deque(list(stdin.readline().strip()))
    cmp = deque()
    while len(a) > 0:
        s = a.popleft()
        if (s == ')') & (len(cmp) > 0):
            cmp.popleft()
        elif (s == '('):
            cmp.append(s)
        elif (s == ')'):
            cmp.append(s)
            break

    if (len(cmp) > 0):
        print('NO')
    else:
        print('YES')


