import sys
from collections import deque
inp = sys.stdin.readline
n = int(inp())

st = deque()
op = []
index = 1

for _ in range(n):
    num = int(inp())
    while index <= num:
        st.append(index)
        op.append('+')
        index += 1

    if st[-1] == num:
        st.pop()
        op.append('-')
    else:
        print('NO')
        quit()

for i in op:
    print(i)