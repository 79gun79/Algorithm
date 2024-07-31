import sys
input = sys.stdin.readline

n = int(input())

if n < 2023:
    print(0)
else:
    cnt = 0
    for i in range(2023, n+1):
        i = str(i)
        if not {'0', '2', '3'}.issubset(set(i)):
            continue
        tmp = []
        for j in i:
            if j == '2' and len(tmp) in [0, 2]:
                tmp.append(j)
            elif j == '0' and len(tmp) == 1:
                tmp.append(j)
            elif j == '3' and len(tmp) == 3:
                cnt += 1
                break
    print(cnt)

