# Task 1.1
# Compare Two People’s Heights (Taller / Same Height)
# Hint - input
# Better - abs()
# Expected Output -
# Case 1:
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 163
# Luffy is taller than Zoro by 10cm

# Case 2:
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 185
# Zoro is taller than Luffy by 12cm


# Case 3
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 173
# Luffy and Zoro are of same height


# captain = input("Please tell me the captain name?: ")
# vice_captain = input("Please tell me the vice captain name?: ")
# captain_height = float(input(f"Please tell me the height of {captain}?: "))
# vice_captain_height = float(input(f"Please tell me the height of {vice_captain}?: "))


# if captain_height > vice_captain_height:
#     print(
#         f"{captain} is taller than {vice_captain} by {captain_height - vice_captain_height}cm"
#     )
# elif captain_height < vice_captain_height:
#     print(
#         f"{vice_captain} is taller than {captain} by {vice_captain_height - captain_height}cm"
#     )
# else:
#     print(f"{captain} and {vice_captain} are of same height")


captain = input("Please tell me the captain name?: ")
vice_captain = input("Please tell me the vice captain name?: ")
captain_height = float(input(f"Please tell me the height of {captain}?: "))
vice_captain_height = float(input(f"Please tell me the height of {vice_captain}?: "))

diff = abs(captain_height - vice_captain_height)  # positive value

if captain_height > vice_captain_height:
    print(f"{captain} is taller than {vice_captain} by {diff}cm")
elif captain_height < vice_captain_height:
    print(f"{vice_captain} is taller than {captain} by {diff}cm")
else:
    print(f"{captain} and {vice_captain} are of same height")
