import sys
input = sys.stdin.readline
import heapq

n, m = map(int, input().split())
t = list(map(int, input().split()))
t.sort(reverse=True)
c = []
for i in t:
    if len(c) < m:
        heapq.heappush(c, i)
    else:
        a = heapq.heappop(c)
        heapq.heappush(c, a+i)

print(max(c))
