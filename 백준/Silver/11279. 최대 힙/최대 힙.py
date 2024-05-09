import sys
input = sys.stdin.readline
import heapq

x = int(input())

hq = []
for _ in range(x):
    i = int(input())

    if i == 0:
        if hq:
            j = heapq.heappop(hq)
            print(-j)
        else:
            print(0)
    else:
        heapq.heappush(hq, -i)