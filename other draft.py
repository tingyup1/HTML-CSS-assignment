import math
pi = 3.1415926535
formatPI = ("value of PI: {:.2f}".format(math.pi))
print(formatPI)
radius = float(input("Enter the radius:"))
areaCircle = math.pi * radius **2
print(f"Are of circle areaCircle: {areaCircle:.2f}")