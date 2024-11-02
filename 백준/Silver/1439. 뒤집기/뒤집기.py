import sys
input = sys.stdin.readline

s = input().rstrip()
cnt = [0, 0]
for i in range(len(s)):
    j = int(s[i])
    if i == 0:
        cnt[j] += 1
    if s[i] != s[i-1]:
        cnt[j] += 1

print(min(cnt))