import sys
input = sys.stdin.readline

n = int(input())
stair = [0] * (n+1)
score = [0] * (n+1)

for i in range(1, n+1):
    stair[i] = int(input())

for j in range(1, n+1):
    if j == 1:
        score[j] = stair[j]
    elif j == 2:
        score[j] = stair[j] + stair[j-1]
    else:
        score[j] = max(score[j-2] + stair[j], score[j-3] + stair[j-1] + stair[j])

print(score[n])