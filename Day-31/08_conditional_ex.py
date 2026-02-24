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
if(stock1 == name or stock2 == name or stock3 == name or stock4 == name ):
   print(f"Yes, we have {name} in stock")     
else:
     print(f"Sorry, we ran out of{name} ")

