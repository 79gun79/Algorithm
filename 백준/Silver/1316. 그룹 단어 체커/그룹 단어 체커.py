import sys
input = sys.stdin.readline

n = int(input())
res = 0
for _ in range(n):
    a = input().rstrip()
    flag = True
    check = []
    for i in range(len(a) - 1):
        if a[i] != a[i+1]:
            if ord(a[i]) in check:
                flag = False
                break
            check.append(ord(a[i]))
    if ord(a[-1]) in check:
        flag = False
    if flag:
        res += 1

print(res)


