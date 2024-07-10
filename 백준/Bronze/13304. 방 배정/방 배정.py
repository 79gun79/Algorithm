import sys
input = sys.stdin.readline

n, k = map(int, input().split())
room = [0] * 5
for _ in range(n):
    s, y = map(int, input().split())

    if 1 <= y <= 2:
        room[0] += 1
    elif 3 <= y <= 4:
        if s == 0:
            room[1] += 1
        elif s == 1:
            room[2] += 1
    if 5 <= y <= 6:
        if s == 0:
            room[3] += 1
        elif s == 1:
            room[4] += 1

for i in range(5):
    if room[i] % k == 0:
        room[i] = (room[i] // k)
    else:
        room[i] = (room[i] // k) + 1

print(sum(room))