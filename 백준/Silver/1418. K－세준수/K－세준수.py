import sys
input = sys.stdin.readline

def eratosthenes(x):
    prime = [0] * (x+1)

    for i in range(2, x + 1):
        if prime[i] == 0:
            prime[i] = i
            j = 2
            while i * j <= x:
                if (i*j) % i == 0:
                    prime[i*j] = max(prime[i*j], i)
                j += 1

    return prime


n = int(input())
k = int(input())
lst = eratosthenes(n)
res = 0
for i in lst:
    if i <= k:
        res += 1
print(res-1)