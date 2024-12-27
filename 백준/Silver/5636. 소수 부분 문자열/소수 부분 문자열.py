import sys
input = sys.stdin.readline

def prime(x):
    for i in range(2, int(x**(0.5))+1):
        if x % i == 0:
            return False
    return True


while True:
    t = input().rstrip()

    if t == '0':
        break

    pr = 0
    s = len(t)
    for i in range(s):
        for j in range(i+1, s+1):
            a = int(t[i:j])
            if prime(a):
                if 2 <= a <= 100000:
                    pr = max(pr, a)

    print(pr)
