import sys
input = sys.stdin.readline

a, b = map(int, input().split())

def Eratosthenes(x):
    rt = [1, x]
    while x > 1:
        flag = True
        for i in range(2, int(x**0.5)+1):
            if x % i == 0:
                x //= i
                rt.append(x)
                flag = False
                break
        if flag:
            break

    return rt

A_lst = Eratosthenes(a)
B_lst = Eratosthenes(b)
pr = set(A_lst) & set(B_lst)
print(max(pr))