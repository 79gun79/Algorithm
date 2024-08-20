import sys
input = sys.stdin.readline

s, c = map(int, input().split())
p = [int(input()) for _ in range(s)]

st = 1
ed = max(p)

ipa = 0
while st <= ed:
    mid = (st+ed) // 2

    cnt = 0
    for pa in p:
        cnt += pa // mid

    if cnt >= c:
        ipa = max(ipa, mid)
        st = mid + 1
    else:
        ed = mid - 1

print(sum(p) - (c*ipa))
