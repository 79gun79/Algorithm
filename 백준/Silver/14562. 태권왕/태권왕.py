import sys
input = sys.stdin.readline
from collections import deque

c = int(input())
def KICK(s, t):
    q = deque()
    q.append((s, t, 0))

    while q:
        x, y, z = q.popleft()

        if x == y:
            return z

        if 2 * x <= (y + 3):
            if visited[2*x] == 0:
                q.append((2*x, y+3, z+1))

        if visited[x + 1] == 0:
            q.append((x + 1, y, z + 1))


for _ in range(c):
    visited = [0] * 10001
    s, t = map(int, input().split())
    print(KICK(s, t))