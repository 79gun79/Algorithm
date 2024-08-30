import sys
input = sys.stdin.readline

n = int(input())
chair = [list(map(int,input().split())) for _ in range(n)]

def HCPC(x, y, n):
    if n < 2:
        return chair[x][y]

    else:
        num = []
        num.append(HCPC(x, y, n//2))
        num.append(HCPC(x, y + n//2, n//2))
        num.append(HCPC(x + n//2, y, n//2))
        num.append(HCPC(x + n//2, y + n//2, n//2))
        num.sort()

        return num[1]

print(HCPC(0, 0, n))