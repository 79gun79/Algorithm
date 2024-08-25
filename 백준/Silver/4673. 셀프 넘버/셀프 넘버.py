import sys
input = sys.stdin.readline

all_num = set(range(1, 10001))
make_num = set()
for i in range(1, 10001):
    for j in str(i):
        i += int(j)
    make_num.add(i)

self_num = sorted(all_num - make_num)
for k in self_num:
    print(k)