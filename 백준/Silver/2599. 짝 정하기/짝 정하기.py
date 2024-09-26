import sys
input = sys.stdin.readline

n = int(input())
st = [list(map(int, input().split())) for _ in range(3)]

for i in range(st[0][0] + 1):
    Ab = i
    Ac = st[0][0] - Ab
    Ba = n - st[2][0] - st[2][1] - Ab
    Bc = st[1][0] - Ba
    Ca = st[0][1] - Ba
    Cb = st[2][0] - Ca

    if Ab >= 0 and Ac >= 0 and Ba >= 0 and Bc >= 0 and Ca >= 0 and Cb >= 0:
        print(1)
        print(Ab, Ac)
        print(Ba, Bc)
        print(Ca, Cb)
        quit()

print(0)

