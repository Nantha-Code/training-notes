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


fav_ice_cream = input("Please enter your fav 🍧?: ").strip().lower()

# if (
#     fav_ice_cream == stock1
#     or fav_ice_cream == stock2
#     or fav_ice_cream == stock3
#     or fav_ice_cream == stock4
# ):
#     print(f"Yes, we have {fav_ice_cream} in stock")
# else:
#     print(f"Sorry, we ran out of {fav_ice_cream}")

# in - membership operator
if fav_ice_cream in [stock1, stock2, stock3, stock4]:
    print(f"Yes, we have {fav_ice_cream} in stock")
else:
    print(f"Sorry, we ran out of {fav_ice_cream}")
