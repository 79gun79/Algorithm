import sys
input = sys.stdin.readline

S = set()
M = int(input())

for _ in range(M):
    a = input().split()
    if len(a) == 1:
        if a[0] == 'all':
            S = set([i for i in range(1,21)])
        else:
            S = set()

    else:
        a[1] = int(a[1])
        if a[0] == 'add':
            S.add(a[1])
        elif a[0] == 'remove':
            S.discard(a[1])
        elif a[0] == 'check':
            if a[1] in S:
                print(1)
            else:
                print(0)
        elif a[0] == 'toggle':
            if a[1] in S:
                S.discard(a[1])
            else:
                S.add(a[1])
