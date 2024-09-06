import sys
input = sys.stdin.readline
from collections import deque

t = int(input())
for _ in range(t):
    p = input().rstrip()
    n = int(input())
    x = list(input().rstrip()[1:-1].split(','))
    if n == 0:
        x = []

    q = deque(x)
    flag = True
    rev = 0
    for i in p:
        if i == 'R':
            rev += 1
        elif i == 'D':
            if len(q) < 1:
                flag = False
                print('error')
                break

            if rev % 2 == 0:
                q.popleft()
            else:
                q.pop()

    if flag:
        if rev % 2 == 1:
            q.reverse()
            print('[' + ','.join(q) + ']')
        else:
            print('[' + ','.join(q) + ']')

