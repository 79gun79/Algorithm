import sys
import heapq
input = sys.stdin.readline

v, e = map(int, input().split())
k = int(input())
gr = [[] for _ in range(v+1)]
dis = [sys.maxsize] * (v+1)

for _ in range(e):
    a = list(map(int, input().split()))
    gr[a[0]].append((a[1], a[2]))

def dijkstra(st):
    q = []
    heapq.heappush(q, (0, st)) # (거리, 값)
    dis[st] = 0

    while q:
        dist, val = heapq.heappop(q)

        if dis[val] < dist:
            continue

        for i in gr[val]:
            if dist+i[1] < dis[i[0]]:
                dis[i[0]] = dist+i[1]
                heapq.heappush(q, (dist+i[1], i[0]))

dijkstra(k)

for j in range(1, v+1):
    if dis[j] == sys.maxsize:
        print('INF')
    else:
        print(dis[j])
    
