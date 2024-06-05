import sys
input = sys.stdin.readline

n, m = map(int, input().split())
ban = []
num = []

while True:
    a, b = input().split()
    if int(a) == 0 and int(b) == 0:
        break
    if num.count(int(a)) >= m:
        continue
    else:
        num.append(int(a))
        ban.append((int(a), b))

ban.sort(key=lambda x:x[1])
ban.sort(key=lambda x:len(x[1]))
ban.sort(key=lambda x:x[0])

blue = []
white = []
for i in ban:
    if i[0] % 2 == 0:
        white.append((i[0], i[1]))
    else:
        blue.append((i[0], i[1]))

for j in blue:
    print(j[0], j[1])

for k in white:
    print(k[0], k[1])