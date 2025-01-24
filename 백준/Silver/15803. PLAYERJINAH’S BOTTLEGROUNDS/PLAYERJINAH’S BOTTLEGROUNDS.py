import sys
input = sys.stdin.readline

p = [tuple(map(int, input().split())) for _ in range(3)]

if p[0][0] == p[1][0] == p[2][0]:
    print('WHERE IS MY CHICKEN?')
    quit()
if p[0][1] == p[1][1] == p[2][1]:
    print('WHERE IS MY CHICKEN?')
    quit()
    
m11 = abs(p[1][0]-p[0][0])
m12 = abs(p[1][1]-p[0][1])
m21 = abs(p[2][0]-p[1][0])
m22 = abs(p[2][1]-p[1][1])
m31 = abs(p[2][0]-p[0][0])
m32 = abs(p[2][1]-p[0][1])

if 0 in [m11, m12, m21, m22, m31, m32]:
    print('WINNER WINNER CHICKEN DINNER!')
    quit()

a1 = m12 / m11
a2 = m22 / m21
a3 = m32 / m31

if a1 == a2 == a3:
    print('WHERE IS MY CHICKEN?')
else:
    print('WINNER WINNER CHICKEN DINNER!')



