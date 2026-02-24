shop = {"apple": 50, "banana": 20, "orange": 30}

print(shop)
print(type(shop))  # <class 'dict'>
print(shop["banana"])

# print(shop["grapes"]) # KeyError

# .get() -> ?. (optional chaninging)
print(shop.get("grapes"))  # None

# ?? -> Default value

# shop = {"apple": 50, "banana": 20, "orange": 30, "grapes": 60}
print(shop.get("grapes", "Not found"))


# Update - Dictionary
# pineapple - 90

shop["pineapple"] = 90
print(shop)


print(shop.keys())
print(shop.values())


# Mix Data types
pirate = {
    "name": "Moneky D. Luffy",
    "age": 25,
    "crew_name": "Straw hat pirates",
    "crew_members": ["Zoro", "Sanji", "Nami", "Chopper"],
    "position": "captain",
}



pirate["age"]+= 1
print(pirate["crew_members"][1])
print(pirate["age"])
print(pirate)
# Task
# Increase age by 1


