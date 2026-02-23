s = "Python Rocks"

# to
# start:stop:step (1)
print(s[0:6])  # Python
print(s[0:6:1])  # Python
print(s[0:6:3])  # Ph
# 0. -> P
# 0 + 3  = 3 -> h
# 3 + 3  = 6 -><space>

# yhn
print(s[1:6:2])

print(s[2:5])
print(s[2:5:2])


# start -> 0 (step > 0)
# start -> -1 (step < 0)

print(s[-1:-6:-1])
print(s[-1::-1])

# Reverse
print(s[::-1])


# print(s[0:6:-1]) Invalid ''

followers = 2000

# Multi line string supports new line
print(f"""
This is awesome
We are in BCS. Followers {followers}
""")


fav_movie = "John wiCk"


print(fav_movie.upper())
print(fav_movie.lower())
print(fav_movie.capitalize())  # John wick
print(fav_movie.title())  # John Wick
print(fav_movie.swapcase())  # jOHN wIcK


message = "   With great power comes great responsibility   "
clean_message = message.strip()

print(clean_message)

# Strip - remove only leading & trailing characters

coded_message = "********SO*S******"
decoded_message = coded_message.strip("*")

print(decoded_message)


quote = "Dream is not something that you see in sleep, Dream is something that does not let you sleep"
print(quote.count("Dream"))  # 2
print(quote.find("something"))  # 13

print(quote.replace("Dream", "🛌💭"))
