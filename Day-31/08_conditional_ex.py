stock1 = "vanilla"
stock2 = "green tea"
stock3 = "lemon"
stock4 = "chocolate"


# Task 1.2
# Clue - String methods
# Handle the extra space & letter case
# Case1:
# Please enter your fav 🍧?:      vaNillA
# Yes, we have vanilla in stock


# Case 2:
# Please enter your fav 🍧?:   pisTa
# Sorry, we ran out of pista


name = input("Please enter your fav 🍧?:")
if(stock1 == name):
   print("Yes, we have vanilla in stock")
elif(stock2 == name):
   print("Yes, we have green tea in stock")
elif(stock1 == name):
   print("Yes, we have lemon in stock")  
elif(stock1 == name):
   print("Yes, we have choclate in stock")       
else:
     print(f"Sorry, we ran out of{name} ")