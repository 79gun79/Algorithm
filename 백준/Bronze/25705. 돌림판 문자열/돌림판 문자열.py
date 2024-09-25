import sys
input = sys.stdin.readline

n = int(input())
ns = input().rstrip()
m = int(input())
ms = input().rstrip()

i, j, k = 0, 0, 0
res = ''
while True:

    i += 1
    j += 1
    a = (i-1) % n

    if ns[a] == ms[k]:
        j = 0
        k += 1
        res += ns[a]

    if j > n:
        print(-1)
        break

    if ms == res:
        print(i)
        break
