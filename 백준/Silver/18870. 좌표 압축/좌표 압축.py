import sys
input = sys.stdin.readline

n = int(input())
x = list(map(int, input().split()))

tmp = sorted(x)
z = dict()
t = 0
for i in tmp:
    if i not in z:
        z[i] = t
        t += 1

for j in x:
    print(z[j], end=" ")