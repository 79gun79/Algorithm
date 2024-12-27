import sys
input = sys.stdin.readline

n, b, h, w = map(int, input().split())
av = []
for _ in range(h):
    flag = False
    p = int(input())
    a = list(map(int,input().split()))

    for i in a:
        if i > n:
            av.append(p * n)

if len(av) == 0:
    print('stay home')
elif min(av) > b:
    print('stay home')
else:
    print(min(av))