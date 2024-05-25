import sys
input = sys.stdin.readline
from collections import deque

n = int(input())
bridge = list(map(int, input().split()))
a, b = map(int, input().split())

def BFS(x, y, brd):
    q = deque()
    q.append(x-1)
    visit = [-1] * n
    visit[x-1] = 0
    while q:
        k = q.popleft()
        for i in range(k, n, brd[k]):
            if visit[i] == -1:
                q.append(i)
                visit[i] = visit[k] + 1
                if i == y-1:
                    return visit[i]

        for i in range(k, -1, -brd[k]):
            if visit[i] == -1:
                q.append(i)
                visit[i] = visit[k] + 1
                if i == y-1:
                    return visit[i]
    return -1

print(BFS(a, b, bridge))