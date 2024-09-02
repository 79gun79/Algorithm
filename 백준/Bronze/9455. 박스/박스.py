import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    m, n = map(int, input().split())
    mp = [list(map(int, input().split())) for _ in range(m)]

    res = 0
    for j in range(n):
        tmp = m-1
        for i in range(m-1, -1, -1):
            if mp[i][j] == 1:
                res += (tmp-i)
                tmp -= 1

    print(res)