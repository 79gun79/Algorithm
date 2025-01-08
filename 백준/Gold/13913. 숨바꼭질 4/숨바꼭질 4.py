import sys
input = sys.stdin.readline
from collections import deque

def bfs(x):
    q = deque()
    q.append(x)
    while q:
        a = q.popleft()
        da = [a - 1, a + 1, 2 * a]
        if a == k:
            return visited[a]
        for i in da:
            if i < 0 or i >= 100001:
                continue
            if visited[i] == 0:
                visited[i] = visited[a] + 1
                path[i] = a
                q.append(i)

n, k = map(int, input().split())
visited = [0] * (100001)
path = [0] * (100001)
print(bfs(n))

path_prt = [k]
idx = k
while idx != n:
    path_prt.append(path[idx])
    idx = path[idx]

path_prt = path_prt[::-1]
for j in path_prt:
    print(j, end=" ")
