import sys
input = sys.stdin.readline
from itertools import permutations

job = ['Assassin', 'Healer', 'Mage', 'Tanker']
n = int(input())
mp = [input().rstrip() for _ in range(n)]

job_dis = {'J': [], 'C': [], 'B': [], 'W': []}
Home = []
Goal = []
for i in range(n):
    for j in range(n):
        if mp[i][j] in job_dis.keys():
            job_dis[mp[i][j]].append([i, j])
        elif mp[i][j] == 'H':
            Home = [i, j]
        elif mp[i][j] == '#':
            Goal = [i, j]

def distance(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

def search_dis(lst):
    dis = sys.maxsize
    for k in list(permutations(lst, 3)):
        tmp = distance(Home, k[0]) + distance(k[0], k[1]) + distance(k[1], k[2]) + distance(k[2], Goal)
        dis = min(dis, tmp)
    return dis

mn = sys.maxsize
res = 0
for i in range(4):
    lst = list(job_dis.values())[i]
    if mn > search_dis(lst):
        mn = search_dis(lst)
        res = i

print(job[res])
