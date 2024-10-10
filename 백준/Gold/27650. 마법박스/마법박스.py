import sys
input = sys.stdin.readline

def Eratosthenes(x):
    prime = [1] * (x+1)
    for i in range(2, int(x ** 0.5) + 1):
        if prime[i]:
            j = 2
            while i * j <= x:
                prime[i*j] = 0
                j += 1
    prime_num = [k for k in range(2, x+1) if prime[k]]
    return prime_num


n = int(input())
pr = Eratosthenes(n)
t = n
ques = 20
left = 0
right = len(pr)-1
while left <= right and ques > 0:
    mid = (left + right) // 2
    print(f"? {pr[mid]}")
    sys.stdout.flush()
    a = int(input())

    if a == 1:
        left = mid + 1
    else:
        right = mid - 1
        t = pr[mid]
    ques -= 1

print(f"! {t}")
sys.stdout.flush()