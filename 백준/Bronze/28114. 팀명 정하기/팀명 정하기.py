p1, y1, s1 = map(str, input().split())
p2, y2, s2 = map(str, input().split())
p3, y3, s3 = map(str, input().split())

p1=int(p1)
p2=int(p2)
p3=int(p3)

y1 = int(y1) % 100
y2 = int(y2) % 100
y3 = int(y3) % 100

s1 = s1[0]
s2 = s2[0]
s3 = s3[0]

year = [y1,y2,y3]
year.sort()
print(str(year[0])+str(year[1])+str(year[2]))

if p1>p2:
    if p2>p3:
        print(s1+s2+s3)
    elif p2<p3:
        if p1>p3:
            print(s1+s3+s2)
        elif p1<p3:
            print(s3+s1+s2)
elif p1<p2:
    if p1>p3:
        print(s2+s1+s3)
    elif p1<p3:
        if p2>p3:
            print(s2+s3+s1)
        elif p2<p3:
            print(s3+s2+s1)

