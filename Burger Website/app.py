
# def f4(s):
#     for ch in s:
#         if ch in 'aeiou':
#             print('*',end='')
#         elif ch in ['A','E','I','O','U']:
#             print("#",end="")
#         elif ch.isdigit():
#             print(s[0],end="")
#         else:
#             print(s[-1],end="")
# f4('India91')
# print()
# f4('KUwait965')

# h= input("enter a word:")
# vow=0
# con=0
# for i in range(len(h)):
#     if h[i] in ('aeiou'):


#         vow+=1
#     else:
#         con+=1
# print ('no. of vowels=',vow)
# print ('no.of consonants=',con)
# def hello():
#     l=[]
#     for i in range (5):
#         a=int(input('enter no:'))
#         l.append(a)
#     print (l)
#     s=sum(l)
#     print ('sum of all digits=',s)
# hello()

# def hello():
#     global a
#     a=23
#     print(a)
# hello()
# print(a)
# def greetall(a,b):

#     return a+b

# greetall(2,3)

# a=int(input("enter a num:"))
# b=int(input("enter a num:"))

# def ss ():
#     print(a+b)

# ss()

# def atharv (a):
#     res = 2*a**2

#     return res

# res = atharv(2)
# print(res)
# print(atharv(3))

'''def hello():
    l=[]
    lans=[]
    for i in range(5):
        a=int(input('enter no:'))
        l.append(a)
        if l[i]%3==0:
            lans.append(True)
        else:
            lans.append(False)
    print(l)
    print(lans)
hello()'''


''''
d=int(input('enter distance:'))
t=int (input('enter time:'))
def speed():
    
    s=d/t
    return s
speed()
print(speed())'''

'''def f1(a,b):
    a+=b
    b*=a
    print (a,b)
a,b=5,10
f1(a,b)
print (a,b)'''
'''def f2(x, y):
    global b
    b = x + y
    x+=b
    y+=x
    print(x, y, b)
#_main_
a,b=5,10
f2(a, b)
print(a, b)'''


'''def f3(a, b):
    global x, y
    x= a + b
    a, y=a+x, a*x
    print(a, b, x, y)
#_main_
f3(5,10)
print(f3(b=x, a=y))'''


'''def f5(s):
    s1= ''
    for i in range(len(s)):
        if s[i]==s[-1-i]:
            s1+=s[i]
        else: s1=s[i]+s1
    print(s1)
#_main_
f5('abcba')
f5('abcaba')'''



'''def f6(x=5, y=10):
    global a
    x+=x+y
    y=y+a
    a+=a+x
    print(x,y,a)
#_main_
a=4
f6(y=a)
f6(a, a+1)'''


'''def change(A,B):
    for i in range(len(A)):
        print(A[i]+B[i],end='')
        B=B[:2]+(3,)+B[2:]
    for i in B:
        if i in A:
            print(i)
#_main_
A=(2,3,4,5,6)
B=-2,-1,0,1,2
change(A, B)
x=A[1]
y=B[-1]
print(x, y)
print(A,B)'''
'''
f=open('a.txt','r')
x=f.read()
count=0
word =x.split()
for i in x:
    if 'atharv' == word[0]:
        count+=1
print (count)
print(word)
f.close'''

# f=open('a.txt','a')
# a=input('enter something:')
# f.write(a)
# f.close()
# f1=open('a.txt','r')
# b=f1.read()
# sp=0


# for i in f1:
#     if i.isalpha:
#         sp+=1

# print ('alphabet=',sp)
# f1.close()


f=open('a.txt','a')
a=input('enter something:')
f.write(a)
f.close()
f1=open('a.txt','r')
b=f1.read()
v=0
vo=0

def wovel():
    for i in f1:
        if i in 'aeiou':
            v+=1
        elif i in 'AEIOU':
            vo+=1

print (v)
print (vo)
wovel()
f1.close()