import sys
input = sys.stdin.readline

n = int(input())
res = 0
if n < 2023:
    res = 0
else:
    for i in range(2023, n+1):
        i = str(i)
        if not {'0','2','3'}.issubset(set(i)):
            continue
        tmp = []
        for j in i:
            if j == '2' and len(tmp) in [0, 2]:
                tmp.append(j)
            elif j == '0' and len(tmp) == 1:
                tmp.append(j)
            elif j == '3' and len(tmp) == 3:
                res += 1
                break
print(res)