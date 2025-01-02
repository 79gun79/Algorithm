import sys
input = sys.stdin.readline

n = int(input())
mtr = [[1,1], [1,0]]

def mul_matrix(m1, m2):
    res = [[0] * 2 for _ in range(2)]
    for i in range(2):
        for j in range(2):
            for k in range(2):
                res[i][j] += m1[i][k] * m2[k][j] % 1000000007

    return res

def power(a,b):
    if b == 1:
        return a
    else:
        tmp = power(a, b//2)
        if b % 2 == 0:
            return mul_matrix(tmp, tmp)
        else:
            return mul_matrix(mul_matrix(tmp, tmp), a)

res = power(mtr, n)

print(res[0][1] % 1000000007)
