import sys
input = sys.stdin.readline

n = int(input())
s = input().rstrip()

pw = {'000000': 'A', '001111': 'B',
      '010011': 'C', '011100': 'D',
      '100110': 'E', '101001': 'F',
      '110101': 'G', '111010': 'H'}

res = ''
idx = 0
for i in range(0, len(s), 6):
    tmp = s[i:i+6]
    idx += 1
    if tmp in pw.keys():
        res += pw[tmp]
    else:
        chg = ''
        for k in pw.keys():
            chk = 0
            for j in range(6):
                if tmp[j] != k[j]:
                    chk += 1
            if chk < 2:
                chg += pw[k]

        if len(chg) == 1:
            res += chg

        else:
            print(idx)
            quit()
print(res)
