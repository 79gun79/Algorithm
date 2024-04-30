import sys
input = sys.stdin.readline
from collections import deque

n, k = map(int, input().split())
w = [0] * 100001

def BFS():
    q = deque()
    q.append(n)
    while q:
        x = q.popleft()
        if x == k:
            return w[x]
        for i in (x-1, x+1, x*2):
            if 0<=i<=100000 and not w[i]:
                w[i] = w[x] + 1
                q.append(i)

print(BFS())
