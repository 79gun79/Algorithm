n = int(input())
tmp = []
for _ in range(n):
    tmp.append(int(input()))

tmp.sort()
for i in range(n):
    print(tmp[i])