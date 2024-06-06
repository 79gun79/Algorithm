import sys
input = sys.stdin.readline

N, M, L= map(int, input().split())
s = []
for _ in range(M):
    s.append(int(input()))
s.append(L)

for _ in range(N):
    q = int(input())
    res = 0
    l = 0
    r = s[M - 1]

    while l <= r:
        mid = (l+r) // 2
        cnt = 0
        tmp = 0

        for i in range(M+1):
            if s[i] - tmp >= mid:
                cnt += 1
                tmp = s[i]

        if cnt > q:
            l = mid + 1
            res = max(res, mid)
        else:
            r = mid - 1

    print(r)

