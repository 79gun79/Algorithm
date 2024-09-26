import sys
input = sys.stdin.readline

n = int(input())
st = [list(map(int, input().split())) for _ in range(3)]

for i in range(st[0][0] + 1):
    A = i
    a = st[0][0] - A
    B = n - st[2][0] - st[2][1] - A
    b = st[1][0] - B
    C = st[0][1] - B
    c = st[2][0] - C

    if A >= 0 and B >= 0 and C >= 0 and a >= 0 and b >= 0 and c >= 0:
        print(1)
        print(A, a)
        print(B, b)
        print(C, c)
        quit()

print(0)

