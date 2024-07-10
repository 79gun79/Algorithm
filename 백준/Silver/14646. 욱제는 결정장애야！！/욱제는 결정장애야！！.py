import sys
input = sys.stdin.readline

n = int(input())
stk = [0] * 100001
menu = list(map(int, input().split()))

ans = 0
mx = 0
for i in menu:
    if stk[i] == 0:
        stk[i] = 1
        ans += 1
    else:
        stk[i] = 0
        ans -= 1
    mx = max(mx, ans)

print(mx)