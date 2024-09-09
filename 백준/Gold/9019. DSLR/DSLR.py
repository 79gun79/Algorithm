import sys
input = sys.stdin.readline
from collections import deque

t = int(input())
for _ in range(t):
    visited = [0] * 10000
    q = deque()
    a, b = map(int, input().split())

    q.append((a, ''))

    while q:
        i, j = q.popleft()
        if i == b:
            print(j)
            break

        d = (i * 2) % 10000
        if visited[d] == 0:
            q.append((d, j + 'D'))
            visited[d] = 1

        s = (i - 1) % 10000
        if visited[s] == 0:
            q.append((s, j + 'S'))
            visited[s] = 1

        l = (i % 1000 * 10) + (i // 1000)
        if visited[l] == 0:
            q.append((l, j + 'L'))
            visited[l] = 1

        r = (i % 10 * 1000) + (i // 10)
        if visited[r] == 0:
            q.append((r, j + 'R'))
            visited[r] = 1
