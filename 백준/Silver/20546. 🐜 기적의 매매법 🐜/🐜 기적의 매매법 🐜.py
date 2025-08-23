money = int(input())
stock = list(map(int, input().split()))

# 준현: 최대한 많이 삼
a_stock = 0
a_money = money
for j in stock:
    if a_money >= j:
        a_stock += a_money // j
        a_money = a_money % j

# 성민
b_stock = 0
b_money = money
for i in range(3, len(stock)):
    if (stock[i-3] > stock[i-2]) and (stock[i-2] > stock[i-1]) and (stock[i-1] > stock[i]):
        if b_money >= stock[i]:
            b_stock += b_money // stock[i]
            b_money = b_money % stock[i]

a_sum = a_money+a_stock*stock[-1]
b_sum = b_money+b_stock*stock[-1]

if a_sum > b_sum:
    print("BNP")
elif a_sum < b_sum:
    print("TIMING")
else:
    print("SAMESAME")
