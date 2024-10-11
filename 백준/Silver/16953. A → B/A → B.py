import sys
input = sys.stdin.readline
from collections import deque

a, b = map(int, input().split())

def chg(i, r):
    q = deque()
    q.append((i, r))

    while q:
        x, y = q.popleft()
        if x == b:
            return y

        if x*10+1 <= b:
            q.append((x*10+1, y+1))
        if x*2 <= b:
            q.append((x*2, y+1))

    return -1

print(chg(a, 1))