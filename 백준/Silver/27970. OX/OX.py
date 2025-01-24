import sys
input = sys.stdin.readline

s = input().rstrip()

idx = []
for j in range(len(s)):
    if s[j] == 'O':
        idx.append(j)

res = 0
for x in idx:
    res += (2 ** x)
    
print(res % 1000000007)
