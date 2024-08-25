import sys
input = sys.stdin.readline

m = int(input().strip())
n = int(input().strip())
so = []

def Soinsoo(x):
    if x == 1:
        return False
    for i in range(2, x):
        if x % i == 0:
            return False
    return True

for k in range(m, n+1):
    flag = Soinsoo(k)
    if flag:
        so.append(k)
    else:
        continue

if len(so) == 0:
    print(-1)
else:
    print(sum(so))
    print(min(so))