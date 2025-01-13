import sys
input = sys.stdin.readline

def bellmanFord(st):
    distance = [sys.maxsize] * (n+1)
    distance[st] = 0

    for i in range(n):
        for edge in edges:
            s1, e1, t1 = edge
            if distance[e1] > distance[s1] + t1:
                distance[e1] = distance[s1] + t1
                if i == n-1:
                    return 'YES'
    return 'NO'


tc = int(input())
for _ in range(tc):
    n, m, w = map(int, input().split())
    edges = []
    for _ in range(m):
        s, e, t = map(int, input().split())
        edges.append((s, e, t))
        edges.append((e, s, t))
    for _ in range(w):
        s, e, t = map(int, input().split())
        edges.append((s, e, -t))  # 음수 가중치의 간선

    print(bellmanFord(1))