import sys
input = sys.stdin.readline
from collections import deque

a, b, n, m = map(int, input().split())
def Now_X(x):
    nx = [x-1, x+1, x-a, x-b, x+a, x+b, x*a, x*b]
    return nx

q = deque()
visited = [0] * (100001)
def BFS():
    flag = False
    q.append(n)
    visited[n] = 1

    while q:
        xi = q.popleft()
        for i in range(8):
            c = Now_X(xi)[i]
            if 0 <= c <= 100000 and not visited[c]:
                visited[c] = visited[xi] + 1
                q.append(c)
            if c == m:
                flag = True
                break
        if flag:
            break
    print(max(visited)-1)

BFS()
