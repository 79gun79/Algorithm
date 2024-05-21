import sys
input = sys.stdin.readline

def chk(s):
    for st in range(len(s)):
        if s[st] == nw[0]:
            for ed in range(st, len(s)):
                if s[ed] == nw[-1]:
                    gap_av = (ed-st) // (len(nw)-1)
                    cnt = 0
                    while cnt < len(nw):
                        if s[st+gap_av*cnt] == nw[cnt]:
                            cnt += 1
                            continue
                        break
                    else:
                        return 1
    return 0

old = []
n = int(input())
nw = input().strip('\n')
for _ in range(n):
    old.append(input().strip('\n'))

cnt = 0
for i in old:
    cnt += chk(i)
print(cnt)
