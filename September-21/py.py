import random
x = random.randint(1,10)
y = None

while x != y:
    y = (input("Number"))
    if(x == y):
        print("Guessed")
    else:
        print("Nah uh")
