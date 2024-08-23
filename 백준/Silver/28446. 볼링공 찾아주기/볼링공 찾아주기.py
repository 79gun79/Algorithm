import sys
input = sys.stdin.readline

m = int(input())
sm = {}
for _ in range(m):
    a = list(map(int, input().split()))
    if a[0] == 1:
        sm[a[2]] = a[1]
    elif a[0] == 2:
        print(sm[a[1]])