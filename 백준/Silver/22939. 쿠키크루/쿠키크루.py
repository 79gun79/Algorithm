import sys
input = sys.stdin.readline
from itertools import permutations

n = int(input())
mp = [input().rstrip() for _ in range(n)]

Assassin = []
Healer = []
Mage = []
Tanker = []
Home = []
Goal = []

for i in range(n):
    for j in range(n):
        if mp[i][j] == 'J':
            Assassin.append([i, j])
        elif mp[i][j] == 'C':
            Healer.append([i, j])
        elif mp[i][j] == 'B':
            Mage.append([i, j])
        elif mp[i][j] == 'W':
            Tanker.append([i, j])
        elif mp[i][j] == 'H':
            Home = [i, j]
        elif mp[i][j] == '#':
            Goal = [i, j]

Assassin_dis = sys.maxsize
for k in list(permutations(Assassin, 3)):
    tmp = 0
    tmp += abs(Home[0] - k[0][0]) + abs(Home[1] - k[0][1])
    tmp += abs(k[0][0] - k[1][0]) + abs(k[0][1] - k[1][1])
    tmp += abs(k[1][0] - k[2][0]) + abs(k[1][1] - k[2][1])
    tmp += abs(k[2][0] - Goal[0]) + abs(k[2][1] - Goal[1])
    Assassin_dis = min(Assassin_dis, tmp)
Healer_dis = sys.maxsize
for k in list(permutations(Healer, 3)):
    tmp = 0
    tmp += abs(Home[0] - k[0][0]) + abs(Home[1] - k[0][1])
    tmp += abs(k[0][0] - k[1][0]) + abs(k[0][1] - k[1][1])
    tmp += abs(k[1][0] - k[2][0]) + abs(k[1][1] - k[2][1])
    tmp += abs(k[2][0] - Goal[0]) + abs(k[2][1] - Goal[1])
    Healer_dis = min(Healer_dis, tmp)
Mage_dis = sys.maxsize
for k in list(permutations(Mage, 3)):
    tmp = 0
    tmp += abs(Home[0] - k[0][0]) + abs(Home[1] - k[0][1])
    tmp += abs(k[0][0] - k[1][0]) + abs(k[0][1] - k[1][1])
    tmp += abs(k[1][0] - k[2][0]) + abs(k[1][1] - k[2][1])
    tmp += abs(k[2][0] - Goal[0]) + abs(k[2][1] - Goal[1])
    Mage_dis = min(Mage_dis, tmp)
Tanker_dis = sys.maxsize
for k in list(permutations(Tanker, 3)):
    tmp = 0
    tmp += abs(Home[0] - k[0][0]) + abs(Home[1] - k[0][1])
    tmp += abs(k[0][0] - k[1][0]) + abs(k[0][1] - k[1][1])
    tmp += abs(k[1][0] - k[2][0]) + abs(k[1][1] - k[2][1])
    tmp += abs(k[2][0] - Goal[0]) + abs(k[2][1] - Goal[1])
    Tanker_dis = min(Tanker_dis, tmp)

Job = [Assassin_dis, Healer_dis, Mage_dis, Tanker_dis]
Job_name = ['Assassin', 'Healer', 'Mage', 'Tanker']
mn_dis = sys.maxsize
idx = 0
for l in range(4):
    if mn_dis > Job[l]:
        mn_dis = Job[l]
        idx = l
print(Job_name[idx])