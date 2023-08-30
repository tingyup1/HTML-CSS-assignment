intVar = 20
floatVar = 3.2
strVar = "Software 1"

print(intVar)
print()
print(floatVar)
print(strVar)

#Casting the value from float to int
result = int (intVar + floatVar)
print(result)

shareOfloan = 800.50/3
print(shareOfloan)
rndShareOfloan = int(shareOfloan)
print(rndShareOfloan)

num1 = int(input("Enter some value:\n"))

num2 = int (input("Enter the second value:\n"))

result = num1 + num2
print("The result is：\t" , result)


name = input("Enter your name:\n")
age = input("Enter your age:\n")
print("Name:",name,"Age:",age)
print(name,age)

outPut = f"Name: {name} Age: {age}"
print(outPut)

print(f"Name :{name} Age: {age}")


import math
pi = 3.1415926535
formatPI = ("value of PI: {:.2f}".format(math.pi))
print(formatPI)
radius = float(input("Enter the radius:"))
areaCircle = math.pi * radius **2
print(f"Are of circle areaCircle: {areaCircle:.2f}")






