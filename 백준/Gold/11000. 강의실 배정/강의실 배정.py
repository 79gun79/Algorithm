import sys
import heapq
input = sys.stdin.readline

n = int(input())
tm = []
for _ in range(n):
    tm.append(list(map(int, input().split())))

tm.sort(key=lambda x: (x[0], x[1]))

minHeap = [tm[0][1]]
for i in range(1, n):
    if minHeap[0] <= tm[i][0]:
        heapq.heappop(minHeap)
    heapq.heappush(minHeap, tm[i][1])

print(len(minHeap))
