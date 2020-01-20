let a = {}
a.x = 10
a.y = 'abc'
a.z = [1, 2, 3]

b = Object.create(a)
b.p = 11
b.q = [10, 20, 30]
b.r = 'def'

c = Object.create(b)
c.g = true
c.h = [20, 40, 60]
c.i = 'lmn'