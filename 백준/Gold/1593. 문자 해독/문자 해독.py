import sys
input = sys.stdin.readline

g, s = map(int, input().split())
W = str(input().strip('\n'))
S = str(input().strip('\n'))

wl = [0] * 58
sl = [0] * 58

for j in range(g):
    wl[ord(W[j])-65] += 1

cnt = 0
for i in range(s):
    sl[ord(S[i])-65] += 1

    if i >= g-1:
        if wl == sl:
            cnt += 1
        sl[ord(S[i-g+1])-65] -= 1

print(cnt)
