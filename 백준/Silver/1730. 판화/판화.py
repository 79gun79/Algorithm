import sys
input = sys.stdin.readline

n = int(input())
mv = input().rstrip()
mp = [['.' for _ in range(n)] for _ in range(n)]
x, y = 0, 0

def chg_mp(x, y, i):
    if i in ['U', 'D']:
        if mp[x][y] == '.':
            mp[x][y] = '|'
        elif mp[x][y] == '-':
            mp[x][y] = '+'
    if i in ['L', 'R']:
        if mp[x][y] == '.':
            mp[x][y] = '-'
        elif mp[x][y] == '|':
            mp[x][y] = '+'

for i in mv:
    if i == 'U':
        if x-1 < 0:
            continue
        else:
            chg_mp(x, y, i)
            x -= 1
            chg_mp(x, y, i)
    if i == 'D':
        if x+1 >= n:
            continue
        else:
            chg_mp(x, y, i)
            x += 1
            chg_mp(x, y, i)

    if i == 'L':
        if y-1 < 0:
            continue
        else:
            chg_mp(x, y, i)
            y -= 1
            chg_mp(x, y, i)

    if i == 'R':
        if y+1 >= n:
            continue
        else:
            chg_mp(x, y, i)
            y += 1
            chg_mp(x, y, i)

for m in mp:
    print("".join(m))