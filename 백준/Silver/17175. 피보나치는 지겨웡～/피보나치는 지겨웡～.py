import sys
input = sys.stdin.readline

n = int(input())
fibo = [1 for _ in range(n+1)]
res = 1

for i in range(2, n+1):
    fibo[i] = fibo[i-2] + fibo[i-1] + 1

print(fibo[n] % 1000000007)