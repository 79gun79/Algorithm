import sys
input = sys.stdin.readline
import heapq

n, h, t = map(int, input().split())
lst = []

cnt = 0
for _ in range(n):
    a = int(input())
    heapq.heappush(lst, -a)

for i in range(t):
    b = -(heapq.heappop(lst))
    if b < h:
        heapq.heappush(lst, -b)
        break
    elif b == 1:
        heapq.heappush(lst, -b)
    else:
        b //= 2
        heapq.heappush(lst, -b)
        cnt += 1

giant = -(min(lst))
if giant < h:
    print('YES')
    print(cnt)
else:
    print('NO')
    print(giant)
