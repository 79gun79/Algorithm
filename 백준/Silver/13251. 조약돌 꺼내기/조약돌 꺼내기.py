import sys
input = sys.stdin.readline

def fact(x, k):
    res = 1
    for _ in range(k):
        res *= x
        x -= 1
        if x < 0:
            return 0
    return res

m = int(input())
st = list(map(int, input().split()))
k = int(input())

boonja = 0
for i in st:
    boonja += fact(i, k)
boonmo = fact(sum(st), k)

print(boonja/boonmo)