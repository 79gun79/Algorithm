import sys
input = sys.stdin.readline

while True:
    n = list(map(float,input().split()))
    if not n:
        break

    bank = n[0]
    year = 0
    while bank <= n[2]:
        interest = bank * n[1] / 100
        bank += interest
        year += 1

    print(year)