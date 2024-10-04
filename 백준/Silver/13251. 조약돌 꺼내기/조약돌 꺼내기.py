import sys
input = sys.stdin.readline

def factorial(x, k):
    res = x
    for _ in range(k-1):
        x -= 1
        if x < 1:
            return 0
        res *= x
    return res

m = int(input())
st = list(map(int,input().split()))
k = int(input())

if k == 1:
    print(1.0)
    quit()

boonja = 0
for i in st:
    boonja += factorial(i, k)
boonmo = factorial(sum(st), k)

print(boonja/boonmo)