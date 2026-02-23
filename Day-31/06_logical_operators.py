print((5 > 3) and (4 != 4))  # F

# Priority
# not > and > or
print((2 <= 3) or (5 <= 2) and (4 > 2))  # True


print(not (2 <= 3) or (5 <= 2) and (4 > 2))  # False
