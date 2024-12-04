import sys
input = sys.stdin.readline

n = int(input())
b = [int(input()) for _ in range(n)]

b.sort(reverse=True)
for i in range(len(b)-2):
    if b[i] >= b[i+1] + b[i+2]:
        continue
    else:
        print(sum(b[i:i+3]))
        quit()

print(-1)