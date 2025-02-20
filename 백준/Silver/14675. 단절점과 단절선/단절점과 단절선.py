import sys
input = sys.stdin.readline

n = int(input())
tr = [[] for _ in range(n+1)]

for _ in range(n-1):
    a, b = map(int, input().split())
    tr[a].append(b)
    tr[b].append(a)

q = int(input())
for _ in range(q):
    t, k = map(int, input().split())
    if t == 1:
        if len(tr[k]) >= 2:
            print('yes')
        else:
            print('no')
    elif t == 2:
        print('yes')
