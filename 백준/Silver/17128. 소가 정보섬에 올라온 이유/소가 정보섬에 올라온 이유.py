import sys
input = sys.stdin.readline
N, Q = map(int, input().split())
A = list(map(int, input().split()))
num = list(map(int, input().split()))

cow = []
for i in range(N):
    cow.append(A[i] * A[i-1] * A[i-2] * A[i-3])
hap = sum(cow)

for j in num:
    for k in range(4):
        idx = (j-1+k) % N
        cow[idx] *= (-1)
        hap += (2 * cow[idx])
    print(hap)