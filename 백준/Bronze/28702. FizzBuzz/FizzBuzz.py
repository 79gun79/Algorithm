import sys
input = sys.stdin.readline

res = 0
for i in range(3):
    idx = 3-i
    s = input().rstrip()
    if s not in ['Fizz', 'Buzz', 'FizzBuzz']:
        res = int(s) + idx
        break

if res % 15 == 0:
    print('FizzBuzz')
elif res % 5 == 0:
    print('Buzz')
elif res % 3 == 0:
    print('Fizz')
else:
    print(res)