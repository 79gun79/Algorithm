import sys
input = sys.stdin.readline

s = input().strip('\n')
n = int(input())
word = []
for _ in range(n):
    word.append(input().strip('\n'))

for _ in range(26):
    t = ''
    for i in range(len(s)):
        t += chr(((ord(s[i]) - 97 + 1) % 26) + 97)
    s = t

    for w in word:
        if w in s:
            print(s)
            break
