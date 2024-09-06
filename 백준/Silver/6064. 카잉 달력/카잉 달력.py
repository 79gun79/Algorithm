import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    m, n, x, y = map(int, input().split())

    res = x
    flag = False
    while res <= m*n:
        if (res-x) % m == 0 and (res-y) % n == 0:
            flag = True
            break
        res += m

    if flag:
        print(res)
    else:
        print(-1)