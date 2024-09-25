import sys
input = sys.stdin.readline

t = int(input())
n_lst = list(map(int, input().split()))

def Yaksoo(x):
    lst = []
    for i in range(2, x+1):
        if x % i == 0:
            lst.append(x // i)

    a = sum(lst)
    if a == x:
        return 'Perfect'
    elif a < x:
        return 'Deficient'
    else:
        return 'Abundant'



for n in n_lst:
    print(Yaksoo(n))