fruits = ["🥭", "🍉", "🍎", "🍓", "🥝"]


print(fruits[0:5:2])  # ['🥭', '🍎', '🥝']
print(fruits[::2])  # ['🥭', '🍎', '🥝']
print(fruits[0:4:3])  # ['🥭', '🍓']
print(fruits[::-1])


basket1 = ["🍉", "🍎"]
basket2 = ["🌹", "🌼", "🌷"]


big_basket = basket1 + basket2

# big_basket1 = [...basket1,...basket2 ]

# * -> unpacking operator (List), ** (Dictionary) (Spread operator)
big_basket1 = [*basket1, *basket2, "🍍"]
print(big_basket)
print(big_basket1)


fruits = ["🥭", "🍉", "🍎", "🍓", "🥝"]
fruits.append("🫐")
print(fruits)


fruits.insert(1, "🍑")
print(fruits)


flowers = ["💐", "🌷", "🌼", "🌷", "🌺"]
# flowers.remove("🌷")

# flowers.pop()
flowers.pop(2)  # pass index

print(flowers)
