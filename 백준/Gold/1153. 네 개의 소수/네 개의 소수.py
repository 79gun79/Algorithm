import sys
input = sys.stdin.readline

n = int(input())

def Eratosthenes(x):
    prime = [1] * (x+1)

    for i in range(2, int(x ** 0.5) + 1):
        if prime[i]:
            bae = 2
            while i*bae <= x:
                prime[i*bae] = 0
                bae += 1

    return prime

res = ""
if n < 8:
    print(-1)
    exit()
elif n % 2 == 1:
    res = "2 3 "
    n -= 5
elif n % 2 == 0:
    res = "2 2 "
    n -= 4

pr = Eratosthenes(n)

for i in range(2, n+1):
    if pr[i] and pr[n-i]:
        res += str(i) + ' ' + str(n-i)
        break
print(res)

