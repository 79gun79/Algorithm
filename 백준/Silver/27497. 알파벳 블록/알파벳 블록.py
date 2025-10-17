import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
res = deque()
st = []

for _ in range(n):
    cmd = input().rstrip()
    
    if cmd[0] == '1':
        res.append(cmd[2])
        st.append(True)
    elif cmd[0] == '2':
        res.appendleft(cmd[2])
        st.append(False)
    else:
        if st:
            a = st.pop()
            if a:
                res.pop()
            else:
                res.popleft()
        else:
            continue
            
if res:
    print(''.join(res))
else:
    print(0)
