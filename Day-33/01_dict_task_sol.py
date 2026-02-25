books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]

# Task 1.1 only titles
#  print(titles) -> ["Infinite Jest", "The Catcher in the Rye" , ...]

titles = []
for book in books:
    titles.append(book["title"])

print(titles)

fiction_titles = []
for book in books:
    if book["genre"] == "Fiction":
        fiction_titles.append(book["title"])

print(fiction_titles)


high_rated_titles = []
for book in books:
    if book["rating"] >= 4.7:
        high_rated_titles.append(book["title"])

print(high_rated_titles)
print(f"The books available are {high_rated_titles}")
print(
    f"The books available are {', '.join(high_rated_titles[:-1])} and {high_rated_titles[-1]}"
)
