import sys
input = sys.stdin.readline

n = int(input())
ch = [list(map(int, input().split())) for _ in range(n)]

def HCPC(x, y, n):
    if n < 2:
        return ch[x][y]

    else:
        a = HCPC(x, y, n//2)
        b = HCPC(x, y + n//2, n//2)
        c = HCPC(x + n//2, y, n//2)
        d = HCPC(x + n//2, y + n//2, n//2)
        num = [a, b, c, d]
        num.sort()

        return num[1]

print(HCPC(0,0, n))