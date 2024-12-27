import sys
input = sys.stdin.readline

while True:
    t = int(input())
    if t == 0:
        break
    prt = [0] * (t+1)
    lst = list(input().rstrip().split(','))
    for l in lst:

        if '-' in l:
            a = list(map(int, l.split('-')))

            for i in range(a[0], a[1]+1):
                if i > t:
                    break
                prt[i] = 1

        else:
            l = int(l)
            if l <= t:
                prt[l] = 1

    print(sum(prt))
