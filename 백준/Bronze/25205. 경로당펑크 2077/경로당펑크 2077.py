import sys
input = sys.stdin.readline

bat = ['r', 's', 'e', 'f', 'a', 'q', 't', 'd', 'w', 'c', 'z', 'x', 'v', 'g']
n = int(input())
s = input().rstrip()

if s[-1] in bat:
    print(1)
else:
    print(0)
