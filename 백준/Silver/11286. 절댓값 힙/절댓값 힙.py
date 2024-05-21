import sys
input = sys.stdin.readline
import heapq

b = []
n = int(input())
for _ in range(n):
    x = int(input())
    if x == 0:
        if len(b) > 0:
            y = heapq.heappop(b)[1]
            print(y)
        else:
            print(0)
    else:
        heapq.heappush(b, (abs(x), x))
