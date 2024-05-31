import sys
input = sys.stdin.readline

n, m = map(int, input().split())
name = {}
for _ in range(n):
    x = (str(input().strip('\n')))
    name[x] = 1

for _ in range(m):
    y = (str(input().strip('\n')))
    if y not in name.keys():
        name[y] = 1
    else:
        name[y] += 1

job = []
for i,j in name.items():
    if j >= 2:
        job.append(i)

job.sort()
print(len(job))
for k in job:
    print(k)
