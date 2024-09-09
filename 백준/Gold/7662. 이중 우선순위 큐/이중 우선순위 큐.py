import sys
input = sys.stdin.readline
import heapq

t = int(input())
for _ in range(t):
    k = int(input())
    mxq = []
    mnq = []
    visited = [0] * k
    for i in range(k):
        op, nm = input().rstrip().split()
        nm = int(nm)

        if op == 'I':
            heapq.heappush(mnq, (nm, i))
            heapq.heappush(mxq, (-nm, i))
        elif op == 'D':
            if nm == -1:
                if mnq:
                    visited[heapq.heappop(mnq)[1]] = 1
            elif nm == 1:
                if mxq:
                    visited[heapq.heappop(mxq)[1]] = 1


        while mxq and visited[mxq[0][1]]:
            heapq.heappop(mxq)
        while mnq and visited[mnq[0][1]]:
            heapq.heappop(mnq)

    if not mnq:
        print('EMPTY')
    else:
        print(-mxq[0][0], mnq[0][0])


