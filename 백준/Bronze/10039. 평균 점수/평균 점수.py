import sys
input = sys.stdin.readline

sm = 0
for _ in range(5):
    a = int(input())
    if a < 40:
        a = 40
    sm += a
    
print(sm//5)