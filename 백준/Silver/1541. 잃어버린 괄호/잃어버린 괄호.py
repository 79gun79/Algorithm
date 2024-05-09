import sys
input = sys.stdin.readline

S = input().strip('\n')
c = S.split('-')

res = 0
cnt = 0
for i in c:
    j = sum(map(int, i.split('+')))
    if cnt == 0:
        if S[0] == '-':
            res -= j
        else:
            res += j
    else:
        res -= j
    cnt += 1

print(res)
