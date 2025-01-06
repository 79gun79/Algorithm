import sys
input = sys.stdin.readline
from collections import deque

n = int(input())
q = deque()

op = []
i = 1
for _ in range(n):
    num = int(input())
    while i <= num:
        q.append(i)
        op.append('+')
        i += 1

    if num == q[-1]:
        q.pop()
        op.append('-')
    else:
        print('NO')
        quit()

for j in op:
    print(j)
