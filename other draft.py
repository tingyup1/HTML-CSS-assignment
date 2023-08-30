x = int(input("How much cash you have?"))
asw = input("Can I look your wallet(y/n)?")

if(x>100000 and asw == 'y'):
    print("You are rich")
elif(x>10):
        print("You have more than 10 euros")
else:
    print("You are poor")
