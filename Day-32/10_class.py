# Blueprint
# self, this - context word

# this is my book - context (book)
# this is my pen - context (pen)
class Car:
    # function =  method (class function)
    def __init__(self, wheels, engine, model, doors):
        # instance variables
        self.wheels = wheels
        self.engine = engine
        self.model = model
        self.doors = doors

    # instance methods - objects share them
    def horn(self):
        return "Vroom Vroom!!!"


# Share

# Object
# self -> Object
hindustan = Car(4, "v4", "Ambassador", 4)
jeep = Car(4, "v6", "Wrangler", 4)
tata =Car(4,"v4","Harrier",4)
print(hindustan)  # Car object
print(jeep)
print(tata)

# Dot syntax - Class objects
print(jeep.model)
print(jeep.doors)
print(tata.model)

print(jeep.horn())
print(hindustan.horn())

# ## Tata
# - Wheels - 4
# - Engine - v4
# - Model - Harrier
# - Doors - 4


# ## Task 1.1
# Create blueprint

# ### Account
# 1. acc_no
# 2. name
# 3. balance


## Task 1.2
# Create 3 account
# 1. nk - 50_000
# 2. rishi - 3_00_000
# 3. puspha - 10_00_000
