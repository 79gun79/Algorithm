import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
a = deque(enumerate(map(int, input().split())))
res = f'{a[0][0] + 1}'
tmp = a.popleft()

while a:
    if tmp[1] > 0:
        for _ in range(tmp[1]):
            a.append(a.popleft())
        tmp = a.pop()
        res += f' {tmp[0] + 1}'
    else:
        for _ in range(abs(tmp[1])):
            a.appendleft(a.pop())
        tmp = a.popleft()
        res += f' {tmp[0] + 1}'

print(res)