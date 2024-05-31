import sys
input = sys.stdin.readline

n = int(input())
p = list(map(int,input().split()))
p.sort()

wait = 0
total = 0
for i in p:
    wait += i
    total += wait

print(total)