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
hindustan = Car(4, "v4", "Ambassador", 4)  # creating the object = instantiate
jeep = Car(4, "v6", "Wrangler", 4)

print(hindustan)  # Car object
print(jeep)

# Dot syntax - Class objects
print(jeep.model)
print(jeep.doors)

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


# print(nk.balance) # 50000


class Account:
    def __init__(self, account_number, name, balance):
        self.acc_no = account_number
        self.name = name
        self.balance = balance

    # Task
    def display_balance(self):
        return (f"Your balance is :{self.balance:,}")
   
    def display_withdraw(self):
        pass

nk = Account(101, "Nandha Kumar", 50_000)
rishi = Account(102, "Rishi", 3_00_000)
puspha = Account(103, "Pushpendar", 10_00_000)

# print(rishi.balance)
# print(rishi)

print(rishi.display_balance())  # Your balance is: ₹300,000.00
print(nk.display_balance())  # Your balance is: ₹50,000.00


## Task 1.2

print(rishi.display_balance()) # Your balance is: ₹900,000.00
# print(puspha.withdraw(1_00_000))  # Success. Your balance is: ₹900,000.00
# print(puspha.withdraw(10_00_000))  # Insufficient funds. Your balance is: ₹900,000.00
# print(puspha.withdraw(-100))  # Invalid amount


## Task 1.3


# print(rishi.deposit(1_00_000))  # Success. Your balance is: ₹400,000.00
# print(rishi.display_balance())  # Your balance is: ₹400,000.00


# instance = object
# Class variable (PI) -> for all the instance value remains same
# Instance variable (self.radius) -> for each instance value is different


class Circle:
    # Class variable
    PI = 3.14

    def __init__(self, radius):
        # Instance variable
        self.radius = radius
        print("Radius", self.radius)
        print("PI", self.PI, Circle.PI)

    def calculate_area(self):
        return Circle.PI * self.radius**2


c1 = Circle(2)
c2 = Circle(4)

# print(c1.radius)
# print(c2.radius)

# # ClassName.ClassVariable
# print(Circle.PI)

print(c1.calculate_area())
print(c2.calculate_area())


# ## Decorators - HOF
# - @staticmethod - no access to self ❌
# - @classmethod


# def perimeter(radius):
#     return 2 * Circle.PI * radius


# perimeter(2)


class Circle:
    # Class variable
    PI = 3.14

    def __init__(self, radius):
        # Instance variable
        self.radius = radius
        print("Radius", self.radius)
        print("PI", self.PI, Circle.PI)

    def calculate_area(self):
        return Circle.PI * self.radius**2

    @staticmethod  # Decorators
    def perimeter(radius):
        return 2 * Circle.PI * radius

    # Class method - cls -> cls access class variables
    @classmethod
    def from_diameter(cls, diameter):
        # print(cls.PI)  # ✅
        # print(cls.radius)  # ❌
        radius = diameter / 2
        return Circle(radius)


c1 = Circle(2)
c2 = Circle(4)

c3 = Circle.from_diameter(10)  # Circle(5)

print(c3.calculate_area())
print(Circle.perimeter(2))

class Account:
    interest_rate = 0.02
    def __init__(self,acc_no,name,balance):
        self.acc_no = acc_no
        self.name = name
        self.balance = balance

    def apply_interest(self):
        self.balance = self.balance*Account.interest_rate
        return f"Success. Applied interest rate of 2.00%. Your balance is: ₹{self.balance:,}"    
        

gopi = Account(101, "Gopika Hariharan", 1_00_00_000)
vikki = Account(102, "Vignesh M", 10_00_000)
bala = Account(103, "Bala Kumar", 50_00_000)


# Interest rate 2%
# 100 + 2 = 102
print(gopi.apply_interest())
print(vikki.apply_interest())
print(bala.apply_interest())

# Success. Applied interest rate of 2.00%. Your balance is: ₹10,200,000.00
# Success. Applied interest rate of 2.00%. Your balance is: ₹1,020,000.00
# Success. Applied interest rate of 2.00%. Your balance is: ₹5,100,000.00

# print(gopi.display_balance())
# print(vikki.display_balance())
# print(bala.display_balance())


# Your balance is: ₹10,200,000.00
# Your balance is: ₹1,020,000.00
# Your balance is: ₹5,100,000.00


# Task 1.6
# Account.update_interest_rate(4)
# Clue: classmethod


class Account:
    # class variable
    interest_rate = 0.04

    def __init__(self, account_number, name, balance):
        self.acc_no = account_number
        self.name = name
        self.balance = balance

    # Task
    def display_balance(self):
        return f"Your balance is: ₹{self.balance:,.2f}"

    def withdraw(self, amount):
        # Shield 🛡️
        if amount < 0:
            return "Invalid amount"

        if amount > self.balance:
            return f"Insufficient funds. {self.display_balance()}"
        # Shield 🛡️

        self.balance = self.balance - amount
        return f"Success. {self.display_balance()}"

    def apply_interest(self):
        self.balance = self.balance * Account.interest_rate + self.balance
        return f"Success. Applied interest rate of {Account.interest_rate:.2%}. {self.display_balance()}"

    def update_interest_rate():
        pass


gopi = Account(101, "Gopika Hariharan", 1_00_00_000)
vikki = Account(102, "Vignesh M", 10_00_000)
bala = Account(103, "Bala Kumar", 50_00_000)

# print(Account.update_interest_rate(4))

print(gopi.apply_interest())
print(vikki.apply_interest())
print(bala.apply_interest())

# print(gopi.display_balance())
# print(vikki.display_balance())
# print(bala.display_balance())

# # Success. Interest rate updated => 4.00%
# # Success. Applied interest rate of 4.00%. Your balance is: ₹10,400,000.00
# # Success. Applied interest rate of 4.00%. Your balance is: ₹1,040,000.00
# # Success. Applied interest rate of 4.00%. Your balance is: ₹5,200,000.00
# # Your balance is: ₹10,400,000.00
# # Your balance is: ₹1,040,000.00
# # Your balance is: ₹5,200,000.00

# # Task 1.7
# gopi = Account(101, "Gopika Hariharan", 1_00_00_000)
# vikki = Account(102, "Vignesh M", 10_00_000)
# bala = Account(103, "Bala Kumar", 50_00_000)
# bala2 = Account(104, "Bala Kumar", 50_00_000)

# print(Account.get_total_no_accounts())
# # In total we have 4 accounts

