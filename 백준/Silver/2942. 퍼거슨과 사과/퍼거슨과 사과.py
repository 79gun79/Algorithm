import sys
input = sys.stdin.readline

r, g = map(int, input().split())

def gcd(a, b):
    if a < b:
        a, b = b, a
    while b > 0:
        a, b = b, a % b
    return a

gcd_num = gcd(r, g)
for i in range(1, gcd_num+1):
    if gcd_num % i == 0:
        print(i, r//i, g//i)