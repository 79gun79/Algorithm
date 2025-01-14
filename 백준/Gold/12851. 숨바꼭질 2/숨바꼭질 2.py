import sys
input = sys.stdin.readline
from collections import deque

def bfs(s, e):
    q = deque()
    q.append(s)
    fast_time = 0
    cnt = 0
    while q:
        x = q.popleft()
        if x == e:
            fast_time = visited[x]
            cnt += 1
            continue

        for i in [x-1, x+1, 2*x]:
            if i < 0 or i > 100000:
                continue
            if visited[i] == 0 or visited[i] == visited[x] + 1:
                visited[i] = visited[x] + 1
                q.append(i)
    return fast_time, cnt

n, k = map(int,input().split())
visited = [0] * (100001)
a = bfs(n,k)
print(a[0])
print(a[1])